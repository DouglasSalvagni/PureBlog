// OPEN MOBILE MENU

document.querySelector('#openMobileMenu').onclick = function() {
    document.querySelector('.mobileSidebar').classList.toggle('mobileSidebar--open')
    document.querySelector('.contentOverlay').classList.toggle('contentOverlay--isVisible')
    document.querySelector('main').classList.toggle('open')
    document.querySelector('footer').classList.toggle('open')
    document.querySelector('html').classList.toggle('hidden')
}

//  OPEN SEARCH NAV HEADER

document.querySelector('#OpenSearch').onclick = function() {
    document.querySelector('#search').classList.toggle('searchWrapIsOpen')
}

// TOGGLE IN MIN-WIDTH 728PX


