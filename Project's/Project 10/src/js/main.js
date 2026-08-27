// ================= CONSTANTS =================
const API_BASE = "https://nutriplan-api.vercel.app/api";

const DAILY_GOALS = {
    calories: 2000,
    protein: 50,
    carbs: 250,
    fat: 65,
};

const categoryColors = {
    Beef: {
        bg: "from-red-50 to-rose-50",
        border: "border-red-200 hover:border-red-400",
        icon: "from-red-400 to-rose-500",
    },
    Chicken: {
        bg: "from-yellow-50 to-amber-50",
        border: "border-yellow-200 hover:border-yellow-400",
        icon: "from-yellow-400 to-amber-500",
    },
    Dessert: {
        bg: "from-pink-50 to-fuchsia-50",
        border: "border-pink-200 hover:border-pink-400",
        icon: "from-pink-400 to-fuchsia-500",
    },
    Lamb: {
        bg: "from-orange-50 to-amber-50",
        border: "border-orange-200 hover:border-orange-400",
        icon: "from-orange-400 to-amber-500",
    },
    Miscellaneous: {
        bg: "from-slate-50 to-gray-50",
        border: "border-slate-200 hover:border-slate-400",
        icon: "from-slate-400 to-gray-500",
    },
    Pasta: {
        bg: "from-yellow-50 to-orange-50",
        border: "border-yellow-200 hover:border-yellow-400",
        icon: "from-yellow-400 to-orange-500",
    },
    Pork: {
        bg: "from-rose-50 to-red-50",
        border: "border-rose-200 hover:border-rose-400",
        icon: "from-rose-400 to-red-500",
    },
    Seafood: {
        bg: "from-cyan-50 to-blue-50",
        border: "border-cyan-200 hover:border-cyan-400",
        icon: "from-cyan-400 to-blue-500",
    },
    Side: {
        bg: "from-green-50 to-emerald-50",
        border: "border-green-200 hover:border-green-400",
        icon: "from-green-400 to-emerald-500",
    },
    Starter: {
        bg: "from-cyan-50 to-teal-50",
        border: "border-cyan-200 hover:border-cyan-400",
        icon: "from-cyan-400 to-teal-500",
    },
    Vegan: {
        bg: "from-emerald-50 to-green-50",
        border: "border-emerald-200 hover:border-emerald-400",
        icon: "from-emerald-400 to-green-500",
    },
    Vegetarian: {
        bg: "from-lime-50 to-green-50",
        border: "border-lime-200 hover:border-lime-400",
        icon: "from-lime-400 to-green-500",
    },
};

const PRODUCT_CATEGORY_STYLES = {
    snacks: {
        gradient: "from-purple-500 to-pink-500",
        icon: "fa-cookie-bite",
    },
    beverages: {
        gradient: "from-blue-500 to-cyan-500",
        icon: "fa-glass-water",
    },
    "breakfast-cereals": {
        gradient: "from-amber-500 to-orange-500",
        icon: "fa-wheat-awn",
    },
    dairies: {
        gradient: "from-sky-400 to-blue-500",
        icon: "fa-cheese",
    },
    fruits: {
        gradient: "from-green-500 to-emerald-500",
        icon: "fa-apple-whole",
    },
    meats: {
        gradient: "from-red-500 to-rose-500",
        icon: "fa-drumstick-bite",
    },
};


// ================= GLOBAL STATE =================
let currentMeal = null;
let nutritionData = null;
let modalServings = 1;
let allProducts = [];
let activeNutriGrade = "";

// ================= INIT APP =================
document.addEventListener("DOMContentLoaded", () => {
    showSection("all-recipes-section");
    initSidebar();
    initNavigation();
    loadRandomMeals();
    loadCategories();
    loadAreas();
    initSearch();
    initProducts();
    initFoodLog();

    setTimeout(() => {
        const loader = document.getElementById("app-loading-overlay");
        if (loader) loader.style.display = "none";
    }, 800);
});

// ================= SIDEBAR =================
function initSidebar() {
    const menuBtn = document.getElementById("header-menu-btn");
    const closeBtn = document.getElementById("sidebar-close-btn");
    const overlay = document.getElementById("sidebar-overlay");
    const sidebar = document.getElementById("sidebar");

    menuBtn?.addEventListener("click", () => {
        sidebar.classList.add("active");
        overlay.classList.add("active");
    });

    closeBtn?.addEventListener("click", () => {
        sidebar.classList.remove("active");
        overlay.classList.remove("active");
    });

    overlay?.addEventListener("click", () => {
        sidebar.classList.remove("active");
        overlay.classList.remove("active");
    });
}

// ================= NAVIGATION =================
function initNavigation() {
    const sections = {
        "Meals": "all-recipes-section",
        "Scanner": "products-section",
        "Food Log": "foodlog-section"
    };

    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const text = link.innerText;

            for (const [key, sectionId] of Object.entries(sections)) {
                if (text.includes(key)) {
                    showSection(sectionId);
                    if (key === "Food Log") initFoodLog();
                    break;
                }
            }
        });
    });
}

function showSection(sectionId) {
    // Hide all sections
    ["all-recipes-section", "meal-details", "products-section", "foodlog-section"].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = "none";
    });

    // Show target section
    const target = document.getElementById(sectionId);
    if (target) target.style.display = "block";

    // Show/hide search filters
    const searchSection = document.getElementById("search-filters-section");
    const categorySection = document.getElementById("meal-categories-section");
    if (searchSection) searchSection.style.display = sectionId === "all-recipes-section" ? "block" : "none";
    if (categorySection) categorySection.style.display = sectionId === "all-recipes-section" ? "block" : "none";

    // Update header
    const headerMap = {
        "all-recipes-section": { title: "Meals & Recipes", desc: "Discover delicious and nutritious recipes" },
        "products-section": { title: "Product Scanner", desc: "Search packaged foods and scan barcodes" },
        "foodlog-section": { title: "Food Log", desc: "Track your daily nutrition intake" }
    };

    if (headerMap[sectionId]) {
        document.querySelector("#header h1").innerText = headerMap[sectionId].title;
        document.querySelector("#header p").innerText = headerMap[sectionId].desc;
    }

    // Update nav active state
    document.querySelectorAll(".nav-link").forEach(link => {
        link.classList.remove("bg-emerald-50", "text-emerald-700", "font-semibold");
        link.classList.add("text-gray-600");
    });

    const navMap = { "all-recipes-section": "Meals", "products-section": "Scanner", "foodlog-section": "Food Log" };
    document.querySelectorAll(".nav-link").forEach(link => {
        if (link.innerText.includes(navMap[sectionId])) {
            link.classList.remove("text-gray-600");
            link.classList.add("bg-emerald-50", "text-emerald-700", "font-semibold");
        }
    });

    history.pushState({}, "", `#${sectionId}`);
}

// ================= MEALS =================
async function loadRandomMeals() {
    const grid = document.getElementById("recipes-grid");
    if (!grid) return;

    grid.innerHTML = '<div class="col-span-4 text-center py-12"><div class="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto"></div></div>';

    try {
        const res = await fetch(`${API_BASE}/meals/random?count=25`);
        const data = await res.json();
        renderMeals(data.results || []);
    } catch (err) {
        grid.innerHTML = '<p class="col-span-4 text-center text-gray-500">Failed to load meals</p>';
    }
}

function renderMeals(meals) {
    const grid = document.getElementById("recipes-grid");
    if (!grid) return;

    if (!meals.length) {
        grid.innerHTML = '<p class="col-span-4 text-center text-gray-500">No recipes found</p>';
        return;
    }

    grid.innerHTML = meals.map(meal => {
        const instructionsText = Array.isArray(meal.instructions)
            ? meal.instructions.join(" ")
            : meal.instructions || "";

        const shortDesc = instructionsText
            ? instructionsText.slice(0, 80) + "..."
            : "Delicious recipe to try!";

        return `
      <div 
        class="recipe-card bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer group"
        data-id="${meal.id}"
      >
        <!-- Image -->
        <div class="relative h-48 overflow-hidden">
          <img
            src="${meal.thumbnail}"
            alt="${meal.name}"
            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />

        <!-- Badges -->
            <div class="absolute bottom-3 left-3 flex gap-2">

            <!-- Category Badge -->
            <span class="flex items-center gap-1 px-2 py-1 bg-white rounded-full text-xs font-semibold text-gray-800 shadow">
                <i class="fa fa-tag text-emerald-600 text-xs"></i>
                ${meal.category}
            </span>

            <!-- Area Badge -->
            <span class="flex items-center gap-1 px-2 py-1 bg-white rounded-full text-xs font-semibold text-gray-800 shadow">
                <i class="fa-solid fa-globe text-blue-500 text-xs"></i>
                ${meal.area}
            </span>
        </div>

        </div>

        <!-- Content -->
        <div class="p-4">
            <h3 class="text-base font-bold text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors">
            ${meal.name}
            </h3>

            <p class="text-xs text-gray-600 mb-3">
            ${shortDesc}
            </p>

            <div class="flex items-center justify-between text-xs">
            <span class="font-semibold text-gray-900 flex items-center gap-1">
                <i class="fa-solid fa-utensils text-emerald-600 text-xs"></i>
                ${meal.category}
            </span>
            <span class="font-semibold text-gray-500 flex items-center gap-1">
                <i class="fa-solid fa-globe text-blue-500 text-xs"></i>
                ${meal.area}
            </span>
          </div>
        </div>
      </div>
    `;
    }).join("");


    grid.querySelectorAll(".recipe-card").forEach(card => {
        card.addEventListener("click", () => {
            loadMealDetails(card.dataset.id);
        });
    });
}

async function loadMealDetails(id) {
    try {
        const res = await fetch(`${API_BASE}/meals/${id}`);
        const data = await res.json();
        currentMeal = data.result;

        showSection("meal-details");
        renderMealDetails(currentMeal);
        loadNutrition(currentMeal);
    } catch (err) {
        console.error("Failed to load meal", err);
    }
}

function renderMealDetails(meal) {
    document.querySelector("#meal-details h1").innerText = meal.name;
    document.querySelector("#meal-details img").src = meal.thumbnail;

    // Ingredients
    const ingredientsGrid = document.querySelector(
        "#meal-details .grid.grid-cols-1.md\\:grid-cols-2"
    ).innerHTML = meal.ingredients.map(item => `
        <div class="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
            <span class="font-medium">${item.measure}</span>
            ${item.ingredient}
        </div>
    `).join("");


    // Instructions
    const instructionsDiv = document.querySelector("#meal-details .space-y-4");
    instructionsDiv.innerHTML = meal.instructions.map((step, i) => `
        <div class="flex gap-4 p-4 rounded-xl hover:bg-gray-50">
            <div class="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold">
                ${i + 1}
            </div>
            <p class="pt-2 text-gray-700">${step}</p>
        </div>
    `).join("");

    // Video
    if (meal.youtube) {
        const videoId = meal.youtube.split("v=")[1];
        document.querySelector("#meal-details iframe").src = `https://www.youtube.com/embed/${videoId}`;
    }

    // Back button
    document.getElementById("back-to-meals-btn").onclick = () => showSection("all-recipes-section");

    // Log meal button
    document.getElementById("log-meal-btn").onclick = () => {
        if (nutritionData) {
            modalServings = 1;
            openLogMealModal();
        }
    };

}

async function loadNutrition(meal) {
    const container = document.getElementById("nutrition-facts-container");
    container.innerHTML = '<p class="text-sm text-gray-500">Analyzing nutrition...</p>';

    try {
        const res = await fetch(`${API_BASE}/nutrition/analyze`, {
            method: "POST",
            headers: { "Content-Type": "application/json", "x-api-key": "JETYOUogLS7wAmiutSocdnnVbN6B7TrKTuBjzXVv" },
            body: JSON.stringify({
                recipeName: meal.name,
                ingredients: meal.ingredients.map(i => `${i.measure} ${i.ingredient}`)
            })
        });

        const data = await res.json();
        nutritionData = data.data;
        renderNutrition(nutritionData);
    } catch {
        container.innerHTML = '<p class="text-sm text-gray-500">Failed to load nutrition</p>';
    }
}

function renderNutrition(nutrition) {
    document.getElementById("hero-servings").innerText = "1 serving";
    document.getElementById("hero-calories").innerText = `${Math.round(nutrition.perServing.calories)} cal/serving`;

    const container = document.getElementById("nutrition-facts-container").innerHTML = `
        <p class="text-sm text-gray-500 mb-4">Per serving</p>

        <div class="bg-emerald-50 rounded-xl text-center py-5 mb-6">
            <p class="text-sm text-gray-600">Calories per serving</p>
            <p class="text-4xl font-bold text-emerald-600">
                ${Math.round(nutrition.perServing.calories)}
            </p>
            <p class="text-xs text-gray-500 mt-1">
                Total: ${Math.round(nutrition.totals.calories)} cal
            </p>
        </div>

        ${nutritionRow("Protein", nutrition.perServing.protein, "emerald", "g")}
        ${nutritionRow("Carbs", nutrition.perServing.carbs, "blue", "g")}
        ${nutritionRow("Fat", nutrition.perServing.fat, "purple", "g")}
        ${nutritionRow("Fiber", nutrition.perServing.fiber, "orange", "g")}
        ${nutritionRow("Sugar", nutrition.perServing.sugar, "pink", "g")}
        ${nutritionRow("Saturated Fat", nutrition.perServing.saturatedFat, "red", "g")}

        <div class="mt-6">
            <p class="text-sm font-semibold text-gray-700 mb-2">Other</p>
            <div class="flex justify-between text-sm text-gray-600">
                <span>Cholesterol</span>
                <span>${Math.round(nutrition.perServing.cholesterol)}mg</span>
            </div>
            <div class="flex justify-between text-sm text-gray-600 mt-1">
                <span>Sodium</span>
                <span>${Math.round(nutrition.perServing.sodium)}mg</span>
            </div>
        </div>
    `;
}

function nutritionRow(label, value, color, unit) {
    return `
        <div class="mb-4">
            <div class="flex items-center justify-between text-sm mb-1">
                <span class="flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-${color}-500"></span>
                    ${label}
                </span>
                <span class="font-semibold">${Math.round(value)}${unit}</span>
            </div>
            <div class="w-full bg-gray-100 rounded-full h-2">
                <div class="bg-${color}-500 h-2 rounded-full"
                    style="width:${Math.min(value, 100)}%"></div>
            </div>
        </div>
    `;
}

// ================= CATEGORIES & AREAS =================
async function loadCategories() {
    const grid = document.getElementById("categories-grid");
    if (!grid) return;

    try {
        const res = await fetch(`${API_BASE}/meals/categories`);
        const data = await res.json();
        const categories = data.results.slice(0, 12);

        grid.innerHTML = categories.map(cat => {
            const color = categoryColors[cat.name] || {
                bg: "from-gray-50 to-gray-100",
                border: "border-gray-200 hover:border-gray-400",
                icon: "from-gray-400 to-gray-500",
            };

            return `
            <div
            class="category-card bg-gradient-to-br ${color.bg} rounded-xl p-3 border ${color.border}
            hover:shadow-md cursor-pointer transition-all group"
            data-category="${cat.name}"
            >
            <div class="flex items-center gap-2.5">
                <div
                class="w-9 h-9 bg-gradient-to-br ${color.icon}
                rounded-lg flex items-center justify-center
                group-hover:scale-110 transition-transform shadow-sm"
                >
                <i class="fa-solid fa-utensils text-white text-sm"></i>
                </div>

                <h3 class="text-sm font-bold text-gray-900">
                ${cat.name}
                </h3>
            </div>
            </div>
        `;
        }).join("");

        grid.querySelectorAll(".category-card").forEach(card => {
            card.addEventListener("click", () => filterByCategory(card.dataset.category));
        });
    } catch (err) {
        console.error("Failed to load categories", err);
    }
}

async function loadAreas() {
    const container = document.querySelector("#search-filters-section .flex");
    if (!container) return;

    try {
        const res = await fetch(`${API_BASE}/meals/areas`);
        const data = await res.json();

        container.innerHTML = `
      <button class="area-btn px-4 py-2 rounded-full font-medium text-sm bg-emerald-600 text-white" data-area="">All Cuisines</button>
      ${data.results.map(area => `
        <button class="area-btn px-4 py-2 rounded-full font-medium text-sm bg-gray-100 text-gray-700" data-area="${area.name}">${area.name}</button>
      `).join("")}
    `;

        container.querySelectorAll(".area-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                container.querySelectorAll(".area-btn").forEach(b => {
                    b.classList.remove("bg-emerald-600", "text-white");
                    b.classList.add("bg-gray-100", "text-gray-700");
                });
                btn.classList.remove("bg-gray-100", "text-gray-700");
                btn.classList.add("bg-emerald-600", "text-white");

                if (btn.dataset.area) filterByArea(btn.dataset.area);
                else loadRandomMeals();
            });
        });
    } catch (err) {
        console.error("Failed to load areas", err);
    }
}

async function filterByCategory(category) {
    const grid = document.getElementById("recipes-grid");
    grid.innerHTML = '<div class="flex items-center justify-center py-12"><div class="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div></div>';

    try {
        const res = await fetch(`${API_BASE}/meals/filter?category=${category}&page=1&limit=25`);
        const data = await res.json();
        renderMeals(data.results || []);
    } catch {
        grid.innerHTML = '<p class="col-span-4 text-center text-gray-500">Failed to filter meals</p>';
    }
}

async function filterByArea(area) {
    const grid = document.getElementById("recipes-grid");
    grid.innerHTML = '<div class="flex items-center justify-center py-12"><div class="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div></div>';

    try {
        const res = await fetch(`${API_BASE}/meals/search?q=${area}&page=1&limit=25`);
        const data = await res.json();
        renderMeals(data.results || []);
    } catch {
        grid.innerHTML = '<p class="col-span-4 text-center text-gray-500">Failed to filter meals</p>';
    }
}

// ================= SEARCH =================
function initSearch() {
    const input = document.getElementById("search-input");
    if (!input) return;

    let timeout;
    input.addEventListener("input", (e) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => searchMeals(e.target.value.trim()), 500);
    });
}

async function searchMeals(term) {
    if (!term) {
        loadRandomMeals();
        return;
    }

    const grid = document.getElementById("recipes-grid");
    grid.innerHTML = '<div class="flex items-center justify-center py-12"><div class="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div></div>';

    try {
        const res = await fetch(`${API_BASE}/meals/search?q=${term}`);
        const data = await res.json();

        renderMeals(data.results || []);
    } catch {
        grid.innerHTML = '<p class="col-span-4 text-center text-gray-500">Search failed</p>';
    }
}

// ================= LOG MEAL MODAL =================
function openLogMealModal() {
    const modal = document.getElementById("log-meal-modal");
    modal.classList.remove("hidden");

    document.getElementById("modal-meal-name").innerText = currentMeal.name;
    document.getElementById("modal-meal-img").src = currentMeal.thumbnail;
    updateModalNutrition();

    document.getElementById("serving-plus").onclick = () => {
        modalServings += 0.5;
        updateModalNutrition();
    };

    document.getElementById("serving-minus").onclick = () => {
        if (modalServings > 0.5) {
            modalServings -= 0.5;
            updateModalNutrition();
        }
    };

    document.getElementById("modal-cancel").onclick = () => modal.classList.add("hidden");
    document.getElementById("modal-confirm").onclick = () => {
        addMealToLog({
            name: currentMeal.name,
            image: currentMeal.thumbnail,
            servings: modalServings,
            time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
            totals: {
                calories: nutritionData.perServing.calories * modalServings,
                protein: nutritionData.perServing.protein * modalServings,
                carbs: nutritionData.perServing.carbs * modalServings,
                fat: nutritionData.perServing.fat * modalServings,
            }
        });
        modal.classList.add("hidden");
    };
}

function updateModalNutrition() {
    document.getElementById("modal-servings").innerText = modalServings;
    document.getElementById("modal-calories").innerText = Math.round(nutritionData.perServing.calories * modalServings);
    document.getElementById("modal-protein").innerText = Math.round(nutritionData.perServing.protein * modalServings) + "g";
    document.getElementById("modal-carbs").innerText = Math.round(nutritionData.perServing.carbs * modalServings) + "g";
    document.getElementById("modal-fat").innerText = Math.round(nutritionData.perServing.fat * modalServings) + "g";
}

// ================= FOOD LOG =================
function addMealToLog(item) {
    const log = JSON.parse(localStorage.getItem("foodLog")) || [];
    log.push({
        name: item.name,
        image: item.image || "",
        servings: item.servings,
        totals: item.totals,
        time: item.time,
        date: new Date().toDateString(),
    });
    localStorage.setItem("foodLog", JSON.stringify(log));

    Swal.fire({
        icon: "success",
        html: `
      <div class="text-center">
        <h2 class="text-xl font-bold">Meal Logged!</h2>
        <p>${item.name} (${item.servings} servings)</p>
        <p class="text-green-600 font-bold">
          +${Math.round(item.totals.calories)} calories
        </p>
      </div>
    `,
        showConfirmButton: false,
        timer: 1500,
    });
}

function initFoodLog() {
    const list = document.getElementById("logged-items-list");
    const emptyState = document.getElementById("foodlog-empty");
    const countEl = document.getElementById("logged-items-count");


    if (!list || !countEl) return;

    const today = new Date().toDateString();
    const log = JSON.parse(localStorage.getItem("foodLog")) || [];
    const todayMeals = log.filter(m => m.date === today);

    if (!todayMeals.length) {
        emptyState?.classList.remove("hidden");
        list.innerHTML = "";
        list.appendChild(emptyState);
        countEl.innerText = "Logged Items (0)";
        updateBar("calories", 0, DAILY_GOALS.calories);
        updateBar("protein", 0, DAILY_GOALS.protein);
        updateBar("carbs", 0, DAILY_GOALS.carbs);
        updateBar("fat", 0, DAILY_GOALS.fat);
        updateWeeklyOverview();
        return;
    }

    emptyState?.classList.add("hidden");
    document.getElementById("logged-items-count").innerText = `Logged Items (${todayMeals.length})`;

    const totals = todayMeals.reduce((t, m) => {
        t.calories += m.totals.calories;
        t.protein += m.totals.protein;
        t.carbs += m.totals.carbs;
        t.fat += m.totals.fat;
        return t;
    }, { calories: 0, protein: 0, carbs: 0, fat: 0 });

    updateBar("calories", totals.calories, DAILY_GOALS.calories);
    updateBar("protein", totals.protein, DAILY_GOALS.protein);
    updateBar("carbs", totals.carbs, DAILY_GOALS.carbs);
    updateBar("fat", totals.fat, DAILY_GOALS.fat);
    updateWeeklyOverview();

    list.innerHTML = todayMeals.map((item, i) => `
    <div class="flex items-center justify-between bg-gray-50 rounded-xl p-4">
      <div class="flex items-center gap-4">
        <img src="${item.image || "./assets/meal-placeholder.png"}" class="w-14 h-14 rounded-xl object-cover"/>
        <div>
          <p class="font-semibold">${item.name}</p>
          <p class="text-sm text-gray-500">${item.servings} servings • ${item.time}</p>
        </div>
      </div>
      <div class="flex items-center gap-4">
        <p class="font-bold text-emerald-600">${Math.round(item.totals.calories)} kcal</p>
        <button class="delete-item text-gray-400 hover:text-red-500" data-index="${i}">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </div>
  `).join("");

    list.onclick = (e) => {
        const btn = e.target.closest(".delete-item");
        if (!btn) return;

        Swal.fire({
            title: "Delete this meal?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#e11d48",
            confirmButtonText: "Delete",
        }).then(result => {
            if (result.isConfirmed) {
                const index = Number(btn.dataset.index);
                let count = -1;
                const updated = log.filter(item => {
                    if (item.date !== today) return true;
                    count++;
                    return count !== index;
                });
                localStorage.setItem("foodLog", JSON.stringify(updated));
                updateBar("calories", totals.calories - todayMeals[index].totals.calories, DAILY_GOALS.calories);
                updateBar("protein", totals.protein - todayMeals[index].totals.protein, DAILY_GOALS.protein);
                updateBar("carbs", totals.carbs - todayMeals[index].totals.carbs, DAILY_GOALS.carbs);
                updateBar("fat", totals.fat - todayMeals[index].totals.fat, DAILY_GOALS.fat);
                updateWeeklyOverview();
                initFoodLog();
            }
        });
    };

    document.getElementById("clear-foodlog").onclick = () => {
        Swal.fire({
            title: "Clear today's log?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#e11d48",
            confirmButtonText: "Clear",
        }).then(res => {
            if (res.isConfirmed) {
                const filtered = log.filter(m => m.date !== today);
                localStorage.setItem("foodLog", JSON.stringify(filtered));
                updateBar("calories", 0, DAILY_GOALS.calories);
                updateBar("protein", 0, DAILY_GOALS.protein);
                updateBar("carbs", 0, DAILY_GOALS.carbs);
                updateBar("fat", 0, DAILY_GOALS.fat);
                updateWeeklyOverview();
                initFoodLog();
            }
        });
    };
}

// ================= WEEKLY OVERVIEW =================
function updateWeeklyOverview() {
    const log = JSON.parse(localStorage.getItem("foodLog")) || [];
    const today = new Date();

    let weeklyCalories = 0;
    let weeklyItems = 0;
    let daysOnGoal = 0;

    for (let d = 0; d < 7; d++) {
        const date = new Date(today);
        date.setDate(today.getDate() - d);
        const dateStr = date.toDateString();

        const meals = log.filter(m => m.date === dateStr);
        const dayCalories = meals.reduce((s, m) => s + m.totals.calories, 0);

        weeklyCalories += dayCalories;
        weeklyItems += meals.length;

        const box = document.querySelector(`.weekly-day[data-day="${6 - d}"]`);
        if (box) {
            const el = box.querySelector(".weekly-calories");
            if (el) el.innerText = Math.round(dayCalories);
        }

        if (dayCalories >= DAILY_GOALS.calories * 0.9) daysOnGoal++;
    }

    document.getElementById("weekly-average").innerText =
        Math.round(weeklyCalories / 7);

    document.getElementById("weekly-items").innerText = weeklyItems;
    document.getElementById("days-on-goal").innerText = daysOnGoal;
}


function updateBar(type, value, goal) {
    const valueEl = document.getElementById(`${type}-value`);
    const barEl = document.getElementById(`${type}-bar`);
    if (valueEl) valueEl.innerText = Math.round(value);
    if (barEl) barEl.style.width = `${Math.min((value / goal) * 100, 100)}%`;
}

// ================= PRODUCTS =================

// ================= INIT =================
function initProducts() {
    const searchBtn = document.getElementById("search-product-btn");
    const input = document.getElementById("product-search-input");
    const barcodeBtn = document.getElementById("lookup-barcode-btn");
    const barcodeInput = document.getElementById("barcode-input");

    showProductsEmpty();

    initNutriScoreFilter();
    loadproductCategories();
    initCategoryButtons();

    // ===== SEARCH BY NAME =====
    searchBtn?.addEventListener("click", async () => {
        const q = input.value.trim();
        if (!q) return;

        showProductsLoading();

        try {
            const res = await fetch(
                `${API_BASE}/products/search?q=${encodeURIComponent(q)}&page=1&limit=24`
            );
            const data = await res.json();

            allProducts = data.results || [];
            applyFilters();

        } catch (err) {
            console.error("Search error:", err);
            showProductsEmpty("Failed to load products. Please try again.");
        }
    });

    // ===== SEARCH BY BARCODE =====
    barcodeBtn?.addEventListener("click", async () => {
        const code = barcodeInput.value.trim();
        if (!code) return;

        showProductsLoading();

        try {
            const res = await fetch(`${API_BASE}/products/barcode/${code}`);
            const data = await res.json();

            allProducts = data.result ? [data.result] : [];
            applyFilters();

        } catch (err) {
            console.error("Barcode error:", err);
            showProductsEmpty("Product not found. Please verify the barcode.");
        }
    });
}

// ================= NUTRI SCORE FILTER =================
function initNutriScoreFilter() {
    const buttons = document.querySelectorAll(".nutri-score-filter");

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            buttons.forEach(b =>
                b.classList.remove("bg-emerald-600", "text-white")
            );

            btn.classList.add("bg-emerald-600", "text-white");

            activeNutriGrade = btn.dataset.grade || "";
            applyFilters();
        });
    });
}

// ================= CATEGORY BUTTONS =================
function initCategoryButtons() {
    document.addEventListener("click", async (e) => {
        const btn = e.target.closest(".product-category-btn");
        if (!btn) return;

        const category = btn.dataset.category;
        if (!category) return;

        showProductsLoading();

        try {
            const res = await fetch(
                `https://nutriplan-api.vercel.app/api/products/category/${category}`
            );
            const data = await res.json();

            allProducts = data.results || [];
            applyFilters();

        } catch (err) {
            showProductsEmpty("Failed to load category products");
        }
    });
}



async function loadproductCategories() {
    const container = document.getElementById("product-categories");
    if (!container) return;

    try {
        const res = await fetch(
            "https://nutriplan-api.vercel.app/api/products/categories"
        );
        const data = await res.json();

        if (!data.results || !data.results.length) return;

        container.innerHTML = data.results.map(cat => {
            const key = cat.id.replace("en:", "");
            const style = PRODUCT_CATEGORY_STYLES[key] || {
                gradient: "from-green-500 to-emerald-500",
                icon: "fa-box",
            };

            return `
              <button
                class="product-category-btn flex-shrink-0 px-5 py-3
                bg-gradient-to-r ${style.gradient}
                text-white rounded-xl font-semibold
                hover:shadow-lg transition-all"
                data-category="${key}">
                
                <i class="fa-solid ${style.icon} mr-2"></i>
                ${cat.name}
              </button>
            `;
        }).join("");

    } catch (err) {
        console.error("Failed to load product categories", err);
    }
}



// ================= APPLY FILTERS =================
function applyFilters() {
    let filtered = [...allProducts];

    if (activeNutriGrade) {
        filtered = filtered.filter(
            p => (p.nutritionGrade || "").toLowerCase() === activeNutriGrade
        );
    }

    if (!filtered.length) {
        showProductsEmpty("No products match this filter");
        return;
    }

    updateProductsCount(filtered.length);
    renderProducts(filtered);
}

// ================= UI HELPERS =================
function updateProductsCount(count = 0) {
    const countEl = document.getElementById("products-count");
    if (!countEl) return;
    countEl.innerText = count === 0 ? "0 products" : `${count} products`;
}

function showProductsLoading() {
    const grid = document.getElementById("products-grid");
    updateProductsCount(0);

    grid.innerHTML = `
      <div class="col-span-4 text-center py-20">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto"></div>
      </div>
    `;
}

function showProductsEmpty(message) {
    const grid = document.getElementById("products-grid");
    updateProductsCount(0);

    grid.innerHTML = `
      <div class="col-span-4 text-center py-20 text-gray-500">
        <div class="flex flex-col items-center gap-4">
          <i class="fa-solid fa-box-open text-4xl opacity-40"></i>
          <p class="text-lg font-medium">No products to display</p>
          <p class="text-sm">
            ${message || "Search for a product or browse by category"}
          </p>
        </div>
      </div>
    `;
}

// ================= RENDER PRODUCTS =================
function renderProducts(products) {
    const grid = document.getElementById("products-grid");

    grid.innerHTML = products.map(p => {
        const nutrients = p.nutrients || {};
        const nutriScore = (p.nutritionGrade || "unknown").toUpperCase();
        const novaGroup = p.novaGroup || 0;

        const nutriColors = {
            A: "bg-green-500",
            B: "bg-lime-500",
            C: "bg-yellow-500",
            D: "bg-orange-500",
            E: "bg-red-500",
        };

        const nutriColor = nutriColors[nutriScore] || "bg-gray-400";

        return `
        <div class="bg-white rounded-xl shadow hover:shadow-lg transition-all">
          <div class="relative h-40 bg-gray-100 flex items-center justify-center overflow-hidden">
            <img src="${p.image || "https://via.placeholder.com/200"}"
                 class="w-full h-full object-contain p-2"
                 alt="${p.name || "Product"}"/>

            ${nutriScore !== "UNKNOWN"
                ? `<div class="absolute top-2 left-2 ${nutriColor} text-white text-xs font-bold px-2 py-1 rounded">
                     Nutri-Score ${nutriScore}
                   </div>`
                : ""}

            ${novaGroup
                ? `<div class="absolute top-2 right-2 bg-lime-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                     ${novaGroup}
                   </div>`
                : ""}
          </div>

          <div class="p-4">
            <p class="text-xs text-emerald-600 font-semibold mb-1">
              ${p.brand || "Unknown Brand"}
            </p>

            <h3 class="font-bold text-gray-900 mb-2 line-clamp-2">
              ${p.name || "Unnamed Product"}
            </h3>

            <p class="text-xs text-gray-500 mb-3">
              <i class="fa-solid fa-fire mr-1"></i>
              ${Math.round(nutrients.calories || 0)} kcal / 100g
            </p>

            <div class="grid grid-cols-4 gap-1 text-center mb-3">
              ${macroBox("Protein", nutrients.protein, "emerald")}
              ${macroBox("Carbs", nutrients.carbs, "blue")}
              ${macroBox("Fat", nutrients.fat, "purple")}
              ${macroBox("Sugar", nutrients.sugar, "orange")}
            </div>

            <button class="add-product-btn w-full bg-emerald-600 text-white py-2 rounded hover:bg-emerald-700 transition"
              data-product='${JSON.stringify({
                    name: p.name,
                    image: p.image,
                    calories: nutrients.calories || 0,
                    protein: nutrients.protein || 0,
                    carbs: nutrients.carbs || 0,
                    fat: nutrients.fat || 0,
                })}'>
              <i class="fa-solid fa-plus mr-1"></i>
              Add to Food Log
            </button>
          </div>
        </div>
        `;
    }).join("");

    grid.querySelectorAll(".add-product-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const product = JSON.parse(btn.dataset.product);

            addMealToLog({
                name: product.name || "Product",
                image: product.image || "",
                servings: 1,
                time: new Date().toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                }),
                totals: {
                    calories: product.calories,
                    protein: product.protein,
                    carbs: product.carbs,
                    fat: product.fat,
                },
            });

            initFoodLog();
        });
    });
}

// ================= SMALL UI BLOCK =================
function macroBox(label, value = 0, color) {
    return `
      <div class="bg-${color}-50 rounded p-1.5">
        <p class="text-xs font-bold text-${color}-700">${value.toFixed(1)}g</p>
        <p class="text-[10px] text-gray-500">${label}</p>
      </div>
    `;
}

