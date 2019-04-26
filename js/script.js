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

// OPEN SEARCH NAV HEADER

document.querySelector('#OpenSearch').onclick = function() {
    document.querySelector('#search').classList.toggle('searchWrapIsOpen')
}