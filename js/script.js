// OPEN MOBILE MENU

document.querySelector('#openMobileMenu').onclick = function() {
    document.querySelector('nav').classList.toggle('mobileSideBarIsOpen')
}

//  OPEN SEARCH NAV HEADER

document.querySelector('#OpenSearch').onclick = function() {
    document.querySelector('#search').classList.toggle('searchWrapIsOpen')
}