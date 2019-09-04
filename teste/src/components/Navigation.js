import React, { Component } from 'react'


export default class Navigation extends Component {
    

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
                            <nav className="flex-child nav__wrap d-none d-lg-block">              
                                <ul className="nav__menu">

                                    <li className="nav__dropdown active">
                                        <a href="index.html">Home</a>
                                        <ul className="nav__dropdown-menu">
                                            <li>
                                                <a href="index.html">Home Demo 1</a>
                                            </li>
                                            <li>
                                                <a href="index-2.html">Home Demo 2</a>
                                            </li>
                                            <li>
                                                <a href="index-3.html">Home Demo 3</a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav__dropdown">
                                        <a href="categories.html">Posts</a>
                                        <ul className="nav__dropdown-menu">
                                            <li><a href="single-post.html">Gallery Post</a></li>
                                            <li><a href="single-post.html">Video Post</a></li>
                                            <li><a href="single-post.html">Audio Post</a></li>
                                            <li><a href="single-post.html">Quote Post</a></li>
                                        </ul>
                                    </li>

                                    <li className="nav__dropdown">
                                        <a href="catalog.html">Pages</a>
                                        <ul className="nav__dropdown-menu">
                                            <li><a href="categories.html">Categories</a></li>
                                            <li><a href="about.html">About</a></li>                    
                                            <li><a href="contact.html">Contact</a></li>
                                            <li><a href="404.html">404</a></li>
                                        </ul>
                                    </li>

                                    <li className="nav__dropdown">
                                        <a href="catalog.html">Features</a>
                                        <ul className="nav__dropdown-menu">
                                            <li><a href="lazyload.html">Lazy Load</a></li>
                                            <li><a href="shortcodes.html">Shortcodes</a></li>
                                        </ul>
                                    </li>

                                    <li>
                                        <a href="#">Purchase</a>
                                    </li>
                                </ul>

                                {/* </ul> <!-- end menu --> */}
                            </nav> 
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