let themeToggleButton = document.querySelector('#theme-toggle-button')
let htmlTag = document.querySelector('html')

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('a[role ="menuitem"]');
const heroSection = document.querySelector('a[href="#hero-section"]');

let scrollToTop =  document.querySelector('#scroll-to-top')

let mobileMenuBtn =  document.querySelector('.mobile-menu-btn')
let mobileMenu =  document.querySelector('.nav-links')

let settingsToggle =  document.querySelector('#settings-toggle')
let settingsSidebar =  document.querySelector('#settings-sidebar')
let closeSettings =  document.querySelector('#close-settings')

let colorDots = document.querySelectorAll('#theme-colors-grid button');
let fontOption = document.querySelectorAll('.font-option')
let body = document.querySelector('body')
let resetSettingsBtn = document.querySelector('#reset-settings')
let currentFont 
defaultSettings()


let portfolioFilter  = document.querySelectorAll('.portfolio-filter');
let portfolioItem  = document.querySelectorAll('.portfolio-item');


let testimonialsCarousel = document.querySelector('#testimonials-carousel')
let nextTestimonialBtn = document.querySelector('#next-testimonial')
let prevTestimonialBtn = document.querySelector('#prev-testimonial')
let carouselIndicator = document.querySelectorAll('.carousel-indicator')
let currentCarouselIndex = 0


themeToggleButton.addEventListener('click' , ()=>{
    htmlTag.classList.toggle('dark')
})

function scrollSpyHandler(){
    let currentSectionId = "";
    for(let i = 0 ; i < sections.length ; i++){
        const sectionTop = sections[i].offsetTop;
        const sectionHeight = sections[i].offsetHeight;
        if (window.scrollY >= (sectionTop - 100)) {
            currentSectionId = sections[i].getAttribute('id');
        }
        if(window.scrollY >= 400){
            scrollToTop.classList.remove('opacity-0' , 'invisible')
        }else{
            scrollToTop.classList.add('opacity-0' , 'invisible')
        }
    }
    
    for(let i = 0 ; i < navLinks.length ; i++){
        navLinks[i].classList.remove('active')
        if(navLinks[i].getAttribute('href').includes(currentSectionId)){
            navLinks[i].classList.add('active')
        }
    }
}

window.addEventListener('scroll' , scrollSpyHandler)

for(let i = 0 ; i < navLinks.length ; i++){
    navLinks[i].addEventListener('click' , ()=>{
        window.removeEventListener('scroll' , scrollSpyHandler)
        
        for(let j = 0 ; j < navLinks.length ; j++){
            navLinks[j].classList.remove('active')
        }
        navLinks[i].classList.add('active')
        
    })
    window.addEventListener('scrollend', () => {
        if(window.scrollY >= 400){
            scrollToTop.classList.remove('opacity-0' , 'invisible')
        }else{
            scrollToTop.classList.add('opacity-0' , 'invisible')
        }
        window.addEventListener('scroll', scrollSpyHandler);
    });
    
}

scrollToTop.addEventListener('click' , ()=>{
    heroSection.click()
})

mobileMenuBtn.addEventListener('click' , ()=>{
    mobileMenu.classList.toggle('active')
})

document.addEventListener('click' , (e)=>{
    if(settingsToggle.contains(e.target)){
        settingsToggle.style.right = '20rem'
        settingsSidebar.classList.remove('translate-x-full')
    }else if(!settingsSidebar.contains(e.target)||closeSettings.contains(e.target)){
        settingsToggle.style.right = '0rem'
        settingsSidebar.classList.add('translate-x-full')
    }else if(resetSettingsBtn.contains(e.target)){
        settingsToggle.style.right = '0rem'
        settingsSidebar.classList.add('translate-x-full')
    }
})

for(let i = 0 ; i < fontOption.length ; i++){
    fontOption[i].addEventListener('click' , (e)=>{
        body.classList.remove(currentFont)
        
        currentFont = `font-${fontOption[i].getAttribute('data-font')}`
        body.classList.add(currentFont)
        
        if(fontOption[i].contains(e.target)){
            clearSettings()
            fontOption[i].classList.add('active' ,'bg-slate-50' , 'dark:bg-slate-800','border-primary')
            fontOption[i].classList.remove('border-slate-200' , 'dark:border-slate-700')
        }
        
    })
}

for(let i = 0 ; i < colorDots.length ; i++){
    colorDots[i].addEventListener('click' , ()=>{
        clearColorSettings()
        colorDots[i].classList.add('ring-2' ,'ring-primary' , 'ring-offset-2','ring-offset-white' ,'dark:ring-offset-slate-900')
        document.documentElement.style.setProperty('--color-primary', colorDots[i].getAttribute('data-primary'));
        document.documentElement.style.setProperty('--color-secondary', colorDots[i].getAttribute('data-secondary'));
        document.documentElement.style.setProperty('--color-accent', colorDots[i].getAttribute('data-accent'));
    })
}



resetSettingsBtn.addEventListener('click', ()=>{
    body.classList.remove(currentFont)
    clearSettings()
    defaultSettings()
})

function clearSettings(){
    for(let i = 0 ; i < fontOption.length ; i++){
        fontOption[i].classList.remove('active' ,'bg-slate-50' , 'dark:bg-slate-800','border-primary')
        fontOption[i].classList.add('border-slate-200' , 'dark:border-slate-700')
    }
}
function clearColorSettings(){
    // ring-2 ring-primary ring-offset-2 ring-offset-white dark:ring-offset-slate-900
    for(let i = 0 ; i < colorDots.length ; i++){
        colorDots[i].classList.remove('ring-2' ,'ring-primary' , 'ring-offset-2','ring-offset-white' ,'dark:ring-offset-slate-900')
    }
}

function defaultSettings(){
    
    currentFont = 'font-tajawal'
    body.classList.add(currentFont)
    fontOption[1].classList.add('active')
    fontOption[1].classList.add('active' ,'bg-slate-50' , 'dark:bg-slate-800','border-primary')
    fontOption[1].classList.remove('border-slate-200' , 'dark:border-slate-700')
    document.documentElement.style.setProperty('--color-primary', colorDots[0].getAttribute('data-primary'));
    document.documentElement.style.setProperty('--color-secondary', colorDots[0].getAttribute('data-secondary'));
    document.documentElement.style.setProperty('--color-accent', colorDots[0].getAttribute('data-accent'));
    clearColorSettings()
    colorDots[0].classList.add('ring-2' ,'ring-primary' , 'ring-offset-2','ring-offset-white' ,'dark:ring-offset-slate-900')
}


for(let i = 0 ; i < portfolioFilter.length ; i++){
    portfolioFilter[i].addEventListener('click' , (e)=>{
        clearPortfolioFilter()
        displayPortfolioItem(portfolioFilter[i].getAttribute('data-filter'))
        if(portfolioFilter[i].contains(e.target)){
            portfolioFilter[i].setAttribute('class' , 'portfolio-filter px-8 py-3 rounded-xl bg-linear-to-r from-primary to-secondary text-white font-bold transition-all duration-300 hover:shadow-lg hover:shadow-primary/50')
        }
    })
}

function clearPortfolioFilter(){
    for(let i = 0 ; i < portfolioFilter.length ; i++){
        portfolioFilter[i].setAttribute('class' , 'portfolio-filter px-8 py-3 rounded-xl bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold transition-all duration-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700')
    }
}

function displayPortfolioItem(filter){
    for(let i = 0 ; i < portfolioItem.length ; i++){

        portfolioItem[i].style.setProperty('transform' , 'scale(.5)')
        portfolioItem[i].style.setProperty('opacity' , '0')
        portfolioItem[i].classList.remove('relative')
        portfolioItem[i].classList.add('absolute' ,'invisible')

        if(portfolioItem[i].getAttribute('data-category') == filter){

            portfolioItem[i].classList.add('relative')
            portfolioItem[i].classList.remove('absolute' ,'invisible')
            portfolioItem[i].style.setProperty('opacity' , '1')
            portfolioItem[i].style.setProperty('transform' , 'scale(1)')

        }else if(filter == 'all'){
            portfolioItem[i].classList.add('relative')
            portfolioItem[i].classList.remove('absolute' ,'invisible')
            portfolioItem[i].style.setProperty('opacity' , '1')
            portfolioItem[i].style.setProperty('transform' , 'scale(1)')

        }
    }
}


nextTestimonialBtn.addEventListener('click' , ()=>{
    carouselStep(1)
    clearCarouselIndicator()
    displayCarouselIndicator(currentCarouselIndex)
})
prevTestimonialBtn.addEventListener('click' , ()=>{
    carouselStep(-1)
    clearCarouselIndicator()
    displayCarouselIndicator(currentCarouselIndex)

})

function carouselStep(step){
    currentCarouselIndex += step
    if(currentCarouselIndex<0){
        currentCarouselIndex = 3
    }else if(currentCarouselIndex>3){
        currentCarouselIndex = 0
    }
    testimonialsCarousel.style.setProperty('transform' , `translateX(${(100/3)*currentCarouselIndex}%)`)
}

for(let i = 0 ; i < carouselIndicator.length ; i++){
    carouselIndicator[i].addEventListener('click' , (e)=>{

        clearCarouselIndicator()
        currentCarouselIndex = Number(carouselIndicator[i].getAttribute('data-index'))
        testimonialsCarousel.style.setProperty('transform' , `translateX(${(100/3)*currentCarouselIndex}%)`)
        if(carouselIndicator[i].contains(e.target)){
            displayCarouselIndicator(i)
        }
    })
}

function clearCarouselIndicator(){
    for(let i = 0 ; i < carouselIndicator.length ; i++){
        carouselIndicator[i].classList.remove('active' , 'scale-125' , 'bg-accent')
        carouselIndicator[i].classList.add('bg-slate-400', 'dark:bg-slate-600')
    }
}
function displayCarouselIndicator(dot){
    carouselIndicator[dot].classList.add('active' , 'scale-125' ,'bg-accent')
    carouselIndicator[dot].classList.remove('bg-slate-400', 'dark:bg-slate-600')
}