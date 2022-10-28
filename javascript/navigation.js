let hiddenNavigation = document.querySelector('.hidden-nav')
let burger = document.querySelector('.burger-menu')
let xMenu = document.querySelector('.x-menu')

burger.addEventListener('click', (event) => {
    hiddenNavigation.classList.add('hidden-navScriptOpen')
    hiddenNavigation.classList.remove('hidden-navScriptClose')
    burger.style.display = "none"
    xMenu.style.display = "inline-block"
})
xMenu.addEventListener('click', (event) => {
    hiddenNavigation.classList.add('hidden-navScriptClose')
    hiddenNavigation.classList.remove('hidden-navScriptOpen')
    
    burger.style.display = "inline-block"
    xMenu.style.display = "none"
})