// OPEN MOBILE MENU ---

document.querySelector('#openMobileMenu').onclick = ()=> {
    document.querySelector('.mobileSidebar').classList.toggle('mobileSidebar--open')
    document.querySelector('.contentOverlay').classList.toggle('contentOverlay--isVisible')
    document.querySelector('main').classList.toggle('open')
    document.querySelector('footer').classList.toggle('open')
    document.querySelector('html').classList.toggle('hidden')
}

// CLOSE MOBILE MENU ---

// clicking contentOverlay

document.querySelector('.contentOverlay').onclick = () => {
    document.querySelector('.mobileSidebar').classList.toggle('mobileSidebar--open')
    document.querySelector('.contentOverlay').classList.toggle('contentOverlay--isVisible')
    document.querySelector('main').classList.toggle('open')
    document.querySelector('footer').classList.toggle('open')
    document.querySelector('html').classList.toggle('hidden')
}

// changing screen resolution

setInterval(()=>{
    if (window.innerWidth >= 728) {
        document.querySelector('.mobileSidebar').classList.remove('mobileSidebar--open')
        document.querySelector('.contentOverlay').classList.remove('contentOverlay--isVisible')
        document.querySelector('main').classList.remove('open')
        document.querySelector('footer').classList.remove('open')
        document.querySelector('html').classList.remove('hidden')
    }
}, 100)

//MOBILE MENU ---

var accordion = document.querySelectorAll('.accordion')
console.log(accordion)

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function() {
        this.classList.toggle('rotate')
        let panel = this.parentElement.nextElementSibling
        panel.classList.toggle('panel-is-open')
        console.log(this.parentElement.nextElementSibling)
    })
}


// OPEN SEARCH NAV HEADER




