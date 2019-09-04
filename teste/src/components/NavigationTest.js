import React, { Component } from 'react'
import NavHibrid from './NavHibrid'


export default class NavigationTest extends Component {
    

    constructor(props) {
        super(props)
        this.toggleState = false
        this.searchState = false
        this.openMobileMenu = this.openMobileMenu.bind(this)
        this.openSearch = this.openSearch.bind(this)
    }

    //MOBILE MENU


    openMobileMenu() {

        if (this.toggleState == false) {

            document.querySelector('nav').classList.remove('flex-child', 'nav__wrap', 'd-none', 'd-lg-block')
            document.querySelector('nav ul').classList.remove('nav__menu')
            document.querySelector('nav ul').classList.add('sidenav__menu')
            document.querySelector('nav ul').setAttribute('role','menubar')

            let navStatus1 = document.querySelectorAll('nav ul li')
            for (let a = 0; a < navStatus1.length; a++) {
                navStatus1[a].classList.remove('nav__dropdown','active')
            }

            let navStatus2 = document.querySelectorAll('nav ul li a')
            for (let a = 0; a < navStatus2.length; a++) {
                navStatus2[a].classList.add('sidenav__menu-link')
            }


            let navStatus3 = document.getElementsByClassName('sidenav__menu-toggle')
            for (let a = 0; a < navStatus3.length; a++) {
                navStatus3[a].style.display = 'block'
            }
            
            let navStatus4 = document.querySelectorAll('nav ul li ul')
            for (let a = 0; a < navStatus4.length; a++) {
                navStatus4[a].classList.remove('nav__dropdown-menu')
            }

            let navStatus5 = document.querySelectorAll('nav ul li ul')
            for (let a = 0; a < navStatus5.length; a++) {
                navStatus5[a].classList.add('sidenav__menu-dropdown')
            }

            let navStatus6 = document.querySelectorAll('nav ul li ul li a')
            for (let a = 0; a < navStatus6.length; a++) {
                navStatus6[a].classList.add('sidenav__menu-link')
            }

            document.querySelector('.nav-icon-toggle').classList.add('nav-icon-toggle--is-open')
            document.querySelector('.sidenav').classList.add('sidenav--is-open')
            document.querySelector('.main-container').classList.add('main-container--is-pushed')
            document.querySelector('.nav__holder').classList.add('nav__holder--is-pushed')
            document.querySelector('.content-overlay').classList.add('content-overlay--is-visible')
            document.querySelector('html').classList.add('oh')
            this.toggleState = true

        } else {

            document.querySelector('.nav-icon-toggle').classList.remove('nav-icon-toggle--is-open')
            document.querySelector('.sidenav').classList.remove('sidenav--is-open')
            document.querySelector('.main-container').classList.remove('main-container--is-pushed')
            document.querySelector('.nav__holder').classList.remove('nav__holder--is-pushed')
            document.querySelector('.content-overlay').classList.remove('content-overlay--is-visible')
            document.querySelector('html').classList.remove('oh')
            

            document.querySelector('nav').classList.add('flex-child', 'nav__wrap', 'd-none', 'd-lg-block')
            document.querySelector('nav ul').classList.add('nav__menu')
            document.querySelector('nav ul').classList.remove('sidenav__menu')
            document.querySelector('nav ul').removeAttribute('role')


            let navStatus1 = document.querySelectorAll('nav ul li')
            for (let a = 0; a < navStatus1.length; a++) {
                navStatus1[a].classList.add('nav__dropdown','active')
            }


            let navStatus2 = document.querySelectorAll('nav ul li a')
            for (let a = 0; a < navStatus2.length; a++) {
                navStatus2[a].classList.remove('sidenav__menu-link')
            }


            let navStatus3 = document.getElementsByClassName('sidenav__menu-toggle')
            for (let a = 0; a < navStatus3.length; a++) {
                navStatus3[a].style.display = 'none'
            }
            
            let navStatus4 = document.querySelectorAll('nav ul li ul')
            for (let a = 0; a < navStatus4.length; a++) {
                navStatus4[a].classList.add('nav__dropdown-menu')
            }

            let navStatus5 = document.querySelectorAll('nav ul li ul')
            for (let a = 0; a < navStatus5.length; a++) {
                navStatus5[a].classList.remove('sidenav__menu-dropdown')
            }

            let navStatus6 = document.querySelectorAll('nav ul li ul li a')
            for (let a = 0; a < navStatus6.length; a++) {
                navStatus6[a].classList.remove('sidenav__menu-link')
            }

            this.toggleState = false

        }
            
    }



    hideInResolution() {

        setInterval(() => {

            if (window.innerWidth > 992) {
    
                document.querySelector('.nav-icon-toggle').classList.remove('nav-icon-toggle--is-open')
                document.querySelector('.sidenav').classList.remove('sidenav--is-open')
                document.querySelector('.main-container').classList.remove('main-container--is-pushed')
                document.querySelector('.nav__holder').classList.remove('nav__holder--is-pushed')
                document.querySelector('.content-overlay').classList.remove('content-overlay--is-visible')
                document.querySelector('html').classList.remove('oh')
                

                document.querySelector('nav').classList.add('flex-child', 'nav__wrap', 'd-none', 'd-lg-block')
                document.querySelector('nav ul').classList.add('nav__menu')
                document.querySelector('nav ul').classList.remove('sidenav__menu')
                document.querySelector('nav ul').removeAttribute('role')


                let navStatus1 = document.querySelectorAll('nav ul li')
                for (let a = 0; a < navStatus1.length; a++) {
                    navStatus1[a].classList.add('nav__dropdown','active')
                }


                let navStatus2 = document.querySelectorAll('nav ul li a')
                for (let a = 0; a < navStatus2.length; a++) {
                    navStatus2[a].classList.remove('sidenav__menu-link')
                }


                let navStatus3 = document.getElementsByClassName('sidenav__menu-toggle')
                for (let a = 0; a < navStatus3.length; a++) {
                    navStatus3[a].style.display = 'none'
                }
                
                let navStatus4 = document.querySelectorAll('nav ul li ul')
                for (let a = 0; a < navStatus4.length; a++) {
                    navStatus4[a].classList.add('nav__dropdown-menu')
                }

                let navStatus5 = document.querySelectorAll('nav ul li ul')
                for (let a = 0; a < navStatus5.length; a++) {
                    navStatus5[a].classList.remove('sidenav__menu-dropdown')
                }

                let navStatus6 = document.querySelectorAll('nav ul li ul li a')
                for (let a = 0; a < navStatus6.length; a++) {
                    navStatus6[a].classList.remove('sidenav__menu-link')
                }

                this.toggleState = false
    
            }

        }, 50)
    }


    componentDidMount() {
       this.hideInResolution()
    }


    // ---END --- MOBILE MENU

    //SEARCH TRIGGER

    openSearch() {


        if (this.searchState == false) {
            document.querySelector('.nav__search-trigger-icon').classList.remove('ui-search')
            document.querySelector('.nav__search-trigger-icon').classList.add('ui-close')
            document.getElementById('nav__search-box').style.display = 'block'
            setTimeout(() => {
                document.getElementById('nav__search-box').style.opacity = 1
            }, 50)
            this.searchState = true
        } else {
            document.querySelector('.nav__search-trigger-icon').classList.remove('ui-close')
            document.querySelector('.nav__search-trigger-icon').classList.add('ui-search')
            setTimeout(() => {
                document.getElementById('nav__search-box').style.opacity = 0
                setTimeout(() => {
                    document.getElementById('nav__search-box').style.display = 'none'
                }, 50)
            }, 50)
            
            this.searchState = false
        }

    }

    //---END--SEARCH TRIGGER

    render() {

        return(
            <React.Fragment>
                <header className="nav">

                    <div className="nav__holder nav--sticky">
                        <div className="container relative">

                            <div className="flex-parent">

                            {/* <!-- Mobile Menu Button --> */}
                            <button onClick={this.openMobileMenu} className="nav-icon-toggle" id="nav-icon-toggle" aria-label="Open mobile menu">
                                <span className="nav-icon-toggle__box">
                                    <span className="nav-icon-toggle__inner"></span>
                                </span>
                            </button> 
                            {/* <!-- end mobile menu button --> */}

                            {/* <!-- Logo --> */}
                            <a href="index.html" className="logo">
                                <img className="logo__img" src="img/logo_light.png" srcset="img/logo_light.png 1x, img/logo_light@2x.png 2x" alt="logo" />
                            </a>

                            {/* <!-- Nav-wrap --> */}
                            <NavHibrid /> 
                            {/* <!-- end nav-wrap --> */}

                            {/* <!-- Nav Right --> */}
                            <div className="nav__right nav--align-right d-none d-lg-flex">

                                {/* <!-- Socials --> */}
                                <div className="nav__right-item socials socials--nobase nav__socials "> 
                                <a className="social-facebook" href="#" target="_blank">
                                    <i className="ui-facebook"></i>
                                </a>
                                <a className="social-twitter" href="#" target="_blank">
                                    <i className="ui-twitter"></i>
                                </a>
                                <a className="social-youtube" href="#" target="_blank">
                                    <i className="ui-youtube"></i>
                                </a>
                                </div>

                                <div className="nav__right-item">
                                <a href="" className="nav__subscribe" data-toggle="modal" data-target="#subscribe-modal">Subscribe</a>
                                </div>

                                {/* <!-- Search --> */}
                                <div className="nav__right-item nav__search">
                                <a href="#" onClick={this.openSearch} className="nav__search-trigger" id="nav__search-trigger">
                                    <i className="ui-search nav__search-trigger-icon"></i>
                                </a>
                                <div className="nav__search-box" id="nav__search-box">
                                    <form className="nav__search-form">
                                        <input type="text" placeholder="Search an article" className="nav__search-input" />
                                        <button type="submit" className="nav__search-button btn btn-md btn-color btn-button">
                                            <i className="ui-search nav__search-icon"></i>
                                        </button>
                                    </form>
                                </div>
                                
                                </div>

                            </div> 
                            {/* <!-- end nav right -->   */}
                        
                            </div> 
                            {/* <!-- end flex-parent --> */}
                        </div> 
                        {/* <!-- end container --> */}
                    </div>
                </header> 
                {/* <!-- end navigation --> */}
            </React.Fragment>
        );
    }
}