const header1 = document.getElementById('header1')
const nav_menu = document.getElementById('nav-menu')
const menu = document.getElementById('menu')


header1.style.display = 'none'

window.onscroll = function() {
    const currentScrollPosition = window.pageYOffset;

    if (currentScrollPosition > 0) {
        header1.style.display = 'block'
    } 
    else {
        header1.style.display = 'none'
        menu.style.height = 0
        currentHeight = 0
        nav_menu.style.width = '3vw'
        nav_menu.innerHTML = '<path d="M385 128.33333333333331 55 128.33333333333331" fill="none" stroke="#cc005f" stroke-linecap="round" stroke-linejoin="round" stroke-width="40"></path><path d="M385 220 55 220" fill="none" stroke="#cc005f" stroke-linecap="round" stroke-linejoin="round" stroke-width="40"></path><path d="M385 311.66666666666663 55 311.66666666666663" fill="none" stroke="#cc005f" stroke-linecap="round" stroke-linejoin="round" stroke-width="40"></path>'
    }
}


let open = 0
let currentHeight = 0
function open_menu(){
    open++
    if(open === 1){
        setTimeout(() => {
            nav_menu.style.width = '2.5vw'
            animate()
            function animate() {
                currentHeight++
                menu.style.height = currentHeight + 'vw';
          
                if (currentHeight <= 20) {
                  animate()
                }
            } 
            nav_menu.innerHTML = '<path stroke="#cc005f" stroke-linecap="round" stroke-linejoin="round" d="m18.333333333333332 220 403.3333333333333 0" stroke-width="40"></path>'
        }, 200)
        setTimeout(() => {        
              nav_menu.style.width = '2vw'
            nav_menu.innerHTML = '<path d="m430.8333333333333 9.166666666666666 -421.66666666666663 421.66666666666663" fill="none" stroke="#cc005f" stroke-linecap="round" stroke-linejoin="round" stroke-width="40"></path><path d="M430.8333333333333 430.8333333333333 9.166666666666666 9.166666666666666" fill="none" stroke="#cc005f" stroke-linecap="round" stroke-linejoin="round" stroke-width="40"></path>'
        }, 400)
    }

    else{
        setTimeout(() => {
            animate()
            function animate() {
                currentHeight--
                menu.style.height = currentHeight + 'vw';
          
                if (currentHeight >= 0) {
                  animate()
                }
            }
            nav_menu.style.width = '2.5vw'
            nav_menu.innerHTML = '<path stroke="#cc005f" stroke-linecap="round" stroke-linejoin="round" d="m18.333333333333332 220 403.3333333333333 0" stroke-width="40"></path>'
        }, 200)
        setTimeout(() => {
            nav_menu.style.width = '3vw'
            nav_menu.innerHTML = '<path d="M385 128.33333333333331 55 128.33333333333331" fill="none" stroke="#cc005f" stroke-linecap="round" stroke-linejoin="round" stroke-width="40"></path><path d="M385 220 55 220" fill="none" stroke="#cc005f" stroke-linecap="round" stroke-linejoin="round" stroke-width="40"></path><path d="M385 311.66666666666663 55 311.66666666666663" fill="none" stroke="#cc005f" stroke-linecap="round" stroke-linejoin="round" stroke-width="40"></path>'
        }, 400)

        open = 0
    }
}

function nav(content){
    const targetElement = document.getElementById(`${content}`)
    targetElement.scrollIntoView({ behavior: "smooth" });
}