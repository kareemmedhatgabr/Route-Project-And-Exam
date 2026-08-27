
var meals= [
    {
        mealImg : "image/meal-1.jpg",
        ratingAverage : 4.5,
        ratingQuantity : "156 reviews",
        prepTimeDisplay : "20 min",
        cookTimeDisplay : "35 min",
        servingsDisplay : "2 people",
        difficultyBadge : "Easy",
        categoryBadge : "Mediterranean",
        recipeName : "Mediterranean Quinoa Bowl",
        recipeDescription : "Healthy bowl with quinoa, vegetables, and tahini dressing",
        timeWarning : true ,
        ingredients : [
            '1 cup quinoa',
            'Cherry tomatoes, halved',
            'Cucumber, diced',
            'Red onion, sliced',
            'Kalamata olives',
            'Feta cheese, crumbled',
            'Fresh parsley',
            'Tahini dressing'
        ],
        instructions : [
            'Rinse quinoa thoroughly. Cook according to package directions, usually 15 minutes.',
            'While quinoa cooks, prepare all vegetables and set aside.',
            'For tahini dressing: mix tahini, lemon juice, garlic, and water until smooth.',
            'Fluff cooked quinoa with a fork and let cool slightly.',
            'Arrange quinoa in bowls. Top with tomatoes, cucumber, onion, and olives.',
            'Sprinkle with feta cheese and fresh parsley. Drizzle with tahini dressing.',
        ],
        nutrition : {
            calories : '480 kcal',
            protein : '18g',
            carbohydrates : '58g',
            fat : '20g',
            fiber : '10g',
            sodium : '540mg',
        },
        tips : [
            'Rinse quinoa well to remove bitter coating',
            'Let quinoa cool before adding fresh ingredients',
            'Make extra tahini dressing - it keeps well in the fridge',
            'Add grilled chicken or chickpeas for extra protein'
        ]
    },
    {
        mealImg: "image/meal-2.webp",
        ratingAverage: 4.8,
        ratingQuantity: "320 reviews",
        prepTimeDisplay: "15 min",
        cookTimeDisplay: "45 min",
        servingsDisplay: "4 people",
        difficultyBadge: "Medium",
        categoryBadge: "Italian",
        recipeName: "Classic Beef Lasagna",
        recipeDescription: "Rich, comforting layers of pasta, beef ragu, and creamy béchamel sauce.",
        timeWarning: true,
        ingredients: [
            '1 lb ground beef',
            '1 box lasagna noodles',
            '2 jars marinara sauce',
            'Ricotta cheese',
            'Mozzarella cheese, shredded',
            'Parmesan cheese',
            'Onion and garlic, diced',
            'Fresh basil'
        ],
        instructions: [
            'Cook ground beef with onion and garlic; drain excess fat.',
            'Stir in marinara sauce and simmer for 15 minutes.',
            'Mix ricotta with half of the Parmesan cheese.',
            'Preheat oven to 375°F (190°C).',
            'Layer ingredients: sauce, noodles, ricotta mixture, mozzarella, repeat.',
            'Top with remaining mozzarella and Parmesan.',
            'Bake for 45 minutes, covered, then uncover for the last 10 minutes.',
            'Let stand for 10 minutes before serving.'
        ],
        nutrition: {
            calories: '650 kcal',
            protein: '35g',
            carbohydrates: '60g',
            fat: '30g',
            fiber: '5g',
            sodium: '800mg',
        },
        tips: [
            'Ensure the sauce is slightly runny to hydrate the noodles.',
            'Use fresh basil in the layers for maximum flavor.',
            'For extra richness, add a layer of béchamel sauce.'
        ]
    },
    {
        mealImg: "image/meal-3.webp",
        ratingAverage: 4.2,
        ratingQuantity: "98 reviews",
        prepTimeDisplay: "5 min",
        cookTimeDisplay: "15 min",
        servingsDisplay: "1 person",
        difficultyBadge: "Easy",
        categoryBadge: "Vegan",
        recipeName: "Spicy Peanut Noodles",
        recipeDescription: "Quick, flavorful vegan dish with peanut butter, chili, and fresh vegetables.",
        timeWarning: false,
        ingredients: [
            '2 oz rice noodles',
            '2 tbsp peanut butter',
            '1 tbsp soy sauce',
            '1 tsp chili garlic sauce',
            '1/2 tsp sesame oil',
            'Lime juice',
            'Shredded carrots',
            'Chopped scallions'
        ],
        instructions: [
            'Cook rice noodles according to package directions, typically 5 minutes.',
            'In a small bowl, whisk together peanut butter, soy sauce, chili sauce, sesame oil, and lime juice.',
            'Add warm water, 1 tablespoon at a time, until the sauce reaches desired consistency.',
            'Drain the noodles and immediately toss with the peanut sauce.',
            'Serve immediately, garnished with shredded carrots and scallions.'
        ],
        nutrition: {
            calories: '410 kcal',
            protein: '14g',
            carbohydrates: '50g',
            fat: '18g',
            fiber: '6g',
            sodium: '620mg',
        },
        tips: [
            'Use creamy peanut butter for a smoother sauce.',
            'Adjust chili garlic sauce for desired heat level.',
            'Add firm tofu for more protein.'
        ]
    },
    {
        mealImg: "image/meal-4.jpeg",
        ratingAverage: 4.4,
        ratingQuantity: "185 reviews",
        prepTimeDisplay: "10 min",
        cookTimeDisplay: "20 min",
        servingsDisplay: "4 people",
        difficultyBadge: "Easy",
        categoryBadge: "American",
        recipeName: "Gourmet Mushroom Swiss Burgers",
        recipeDescription: "Juicy beef patties topped with sautéed mushrooms and melted Swiss cheese.",
        timeWarning: false,
        ingredients: [
            '1.5 lb ground beef (80/20)',
            '4 Swiss cheese slices',
            '8 oz button mushrooms, sliced',
            '1/2 onion, finely chopped',
            '4 burger buns',
            'Worcestershire sauce',
            'Salt and pepper',
            'Butter'
        ],
        instructions: [
            'Form ground beef into four patties. Season heavily with salt, pepper, and a dash of Worcestershire sauce.',
            'Sauté sliced mushrooms and chopped onion in butter until softened and golden brown.',
            'Grill or pan-fry the patties for 4-5 minutes per side (or until desired doneness).',
            'During the last minute of cooking, top each patty with a slice of Swiss cheese and cover to melt.',
            'Place the cheese-covered patties on toasted buns.',
            'Top with a generous spoon of the sautéed mushrooms and onions.'
        ],
        nutrition: {
            calories: '710 kcal',
            protein: '45g',
            carbohydrates: '30g',
            fat: '45g',
            fiber: '3g',
            sodium: '910mg',
        },
        tips: [
            'Do not overwork the meat when forming the patties to keep them tender.',
            'Make a small thumbprint in the center of the patty to prevent it from bulging while cooking.',
            'Toast the buns for a better texture.'
        ]
    },
    {
        mealImg: "image/meal-5.jpg",
        ratingAverage: 4.7,
        ratingQuantity: "288 reviews",
        prepTimeDisplay: "15 min",
        cookTimeDisplay: "10 min",
        servingsDisplay: "4 people",
        difficultyBadge: "Easy",
        categoryBadge: "Mexican",
        recipeName: "Chipotle Honey Fish Tacos",
        recipeDescription: "Crispy fish with a smoky, sweet chipotle glaze and fresh cabbage slaw.",
        timeWarning: false,
        ingredients: [
            '1 lb white fish fillets (cod or tilapia)',
            '8 small corn tortillas',
            '1/4 cup honey',
            '1 tbsp chipotle powder',
            '1 tsp lime juice',
            'Shredded cabbage for slaw',
            'Cilantro and red onion, chopped',
            'Plain yogurt or sour cream (for dressing)'
        ],
        instructions: [
            'Preheat oven to 400°F (200°C). Mix honey, chipotle powder, and lime juice for the glaze.',
            'Coat the fish fillets with half of the glaze.',
            'Bake the fish for 10 minutes or until cooked through and flaky.',
            'In a bowl, mix shredded cabbage, cilantro, and red onion for the slaw.',
            'Warm the corn tortillas on a dry pan.',
            'Flake the cooked fish into chunks.',
            'Assemble the tacos: tortilla, slaw, fish, drizzle with remaining honey glaze, and a spoonful of yogurt/sour cream.'
        ],
        nutrition: {
            calories: '390 kcal',
            protein: '30g',
            carbohydrates: '40g',
            fat: '12g',
            fiber: '5g',
            sodium: '480mg',
        },
        tips: [
            'Marinating the fish for 15 minutes enhances flavor.',
            'Use a non-stick pan to warm the tortillas without oil.',
            'A squeeze of fresh lime juice on the finished taco adds brightness.'
        ]
    }
]

var lastRandomNumber = generateUniqueRandomNumber(0, meals.length-1);

function generateUniqueRandomNumber(min , max) {
    var newRandomNumber;
    do {
        newRandomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        
    } while (newRandomNumber === lastRandomNumber);
    
    lastRandomNumber = newRandomNumber;
    
    return newRandomNumber;
}


var cardImg = document.querySelector('.card-img img')

var ratingAverage = document.getElementById('rating-average')
var ratingQuantity = document.getElementById('rating-quantity')

var prepTimeDisplay = document.getElementById('prep-time-display')
var cookTimeDisplay = document.getElementById('cook-time-display')
var servingsDisplay = document.getElementById('servings-display')

var difficultyBadge = document.getElementById('difficulty-badge')
var categoryBadge = document.getElementById('category-badge')

var recipeName = document.getElementById('recipe-name')
var recipeDescription = document.getElementById('recipe-description')

var timeWarning = document.getElementById('time-warning')

var ingredients = document.getElementById('ingredients-list')

var instructions = document.getElementById('instructions-list')

var calories = document.getElementById('calories-value')
var protein = document.getElementById('protein-value')
var carbohydrates = document.getElementById('carbohydrates-value')
var fat = document.getElementById('fat-value')
var fiber = document.getElementById('fiber-value')
var sodium = document.getElementById('sodium-value')

var tips = document.getElementById('tips')

function randomMeal(meal){
    cardImg.src = `${meals[meal].mealImg}`;

    ratingAverage.innerHTML = meals[meal].ratingAverage;
    ratingQuantity.innerHTML = meals[meal].ratingQuantity;

    prepTimeDisplay.innerHTML = meals[meal].prepTimeDisplay;
    cookTimeDisplay.innerHTML = meals[meal].cookTimeDisplay;
    servingsDisplay.innerHTML = meals[meal].servingsDisplay;

    difficultyBadge.innerHTML = meals[meal].difficultyBadge;
    categoryBadge.innerHTML = meals[meal].categoryBadge;

    recipeName.innerHTML = meals[meal].recipeName;
    recipeDescription.innerHTML = meals[meal].recipeDescription;

    meals[meal].timeWarning == false ? timeWarning.classList.add('d-none'):timeWarning.classList.remove('d-none');

    ingredients.innerHTML = ` `;
    for (var i = 0; i < meals[meal].ingredients.length; i++) {
        ingredients.innerHTML += `
        
        <li class="d-flex align-items-start">
            <div
                class="rounded-circle d-flex align-items-center justify-content-center text-white fw-bold mt-0.5 me-3 flex-shrink-0">
                ${i+1}
            </div>
            <span class="text-gray-700">${meals[meal].ingredients[i]}</span>
        </li>
        ` 
    }

    instructions.innerHTML = ` `;
    for (var i = 0; i < meals[meal].instructions.length; i++) {
        instructions.innerHTML += `
        
        <div class="Instructions-content  d-flex align-items-start">
            <div
                class="num d-flex align-items-center justify-content-center text-white fw-bold me-3 flex-shrink-0">
                ${i+1}
            </div>
            <div class="tx flex-1 pt-2">
                <p>${meals[meal].instructions[i]}</p>
            </div>
        </div>
        ` 
    }

    calories.innerHTML = meals[meal].nutrition.calories;
    protein.innerHTML = meals[meal].nutrition.protein;
    carbohydrates.innerHTML = meals[meal].nutrition.carbohydrates;
    fat.innerHTML = meals[meal].nutrition.fat;
    fiber.innerHTML = meals[meal].nutrition.fiber;
    sodium.innerHTML = meals[meal].nutrition.sodium;

    tips.innerHTML = ` `;
    for (var i = 0; i < meals[meal].tips.length; i++) {
        tips.innerHTML += `
            <div class="Chef-content d-flex align-items-start">
                <i class="fa-solid fa-check-circle me-3 mt-1"></i>
                <p>
                    ${meals[meal].tips[i]}
                </p>
            </div>
        `    
    }
}

randomMeal(lastRandomNumber)


var tryAnotherBtn = document.querySelector('#try-another-btn')
tryAnotherBtn.addEventListener("click",()=>{
    console.log(lastRandomNumber);
    lastRandomNumber = generateUniqueRandomNumber(0, meals.length-1);
    randomMeal(lastRandomNumber)

})