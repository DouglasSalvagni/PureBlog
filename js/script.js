// OPEN MOBILE MENU ---

document.querySelector('#openMobileMenu').onclick = ()=> {
    document.querySelector('.mobileSidebar').classList.toggle('mobileSidebar--open')
    document.querySelector('.contentOverlay').classList.toggle('contentOverlay--isVisible')
    document.querySelector('.searchWrap').classList.toggle('searchWrap--open')
    document.querySelector('main').classList.toggle('open')
    document.querySelector('footer').classList.toggle('open')
    document.querySelector('html').classList.toggle('hidden')
}

// CLOSE MOBILE MENU ---

// clicking contentOverlay

document.querySelector('.contentOverlay').onclick = () => {
    document.querySelector('.mobileSidebar').classList.toggle('mobileSidebar--open')
    document.querySelector('.contentOverlay').classList.toggle('contentOverlay--isVisible')
    document.querySelector('.searchWrap').classList.toggle('searchWrap--open')
    document.querySelector('main').classList.toggle('open')
    document.querySelector('footer').classList.toggle('open')
    document.querySelector('html').classList.toggle('hidden')
}

// changing screen resolution

setInterval(()=>{
    if (window.innerWidth >= 728) {
        document.querySelector('.mobileSidebar').classList.remove('mobileSidebar--open')
        document.querySelector('.contentOverlay').classList.remove('contentOverlay--isVisible')
        document.querySelector('.searchWrap').classList.remove('searchWrap--open')
        document.querySelector('main').classList.remove('open')
        document.querySelector('footer').classList.remove('open')
        document.querySelector('html').classList.remove('hidden')
    }
}, 100)

// ACCORDION MOBILE MENU ---

var accordion = document.querySelectorAll('.accordion')

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function() {
        this.classList.toggle('rotate')
        let parent = this.parentElement
        let panel = this.parentElement.nextElementSibling
        parent.classList.toggle('parent')
        panel.classList.toggle('panel-is-open')
    })
}


// OPEN SEARCH NAV HEADER

document.querySelector('#openSearch').onmouseenter = function() {
    document.querySelector('#search').classList.add('searchNavWrapIsOpen')
}

document.getElementById('search').onmouseleave = function() {
    document.querySelector('#search').classList.remove('searchNavWrapIsOpen')
}

document.querySelector('#openSearch').onclick = function() {
    document.querySelector('#search').classList.toggle('searchNavWrapIsOpen')
}


// INSERT ARROW 

var submenu = document.querySelectorAll('nav ul li ul li')
for (var i = 0; i < submenu.length; i++) {
    var target = submenu[i]
    if (target.lastElementChild.localName === 'ul') {
        target.classList.add('arrow')
    }
}
