import React, { Component } from 'react'

export default class MobileSidenav extends Component {
    render() {
        return(
            <div>    
                <header className="sidenav" id="sidenav">
                    <div className="sidenav__search-mobile">
                        <form method="get" className="sidenav__search-mobile-form">
                            <input type="search" className="sidenav__search-mobile-input" placeholder="Search..." aria-label="Search input" />
                            <button type="submit" className="sidenav__search-mobile-submit" aria-label="Submit search">
                            <i className="ui-search"></i>
                            </button>
                        </form>
                    </div>

                    <nav>
                        <ul className="sidenav__menu" role="menubar">
                            <li>
                            <a href="index.html" className="sidenav__menu-link">Home</a>
                            <button className="sidenav__menu-toggle" aria-haspopup="true" aria-label="Open dropdown"><i className="ui-arrow-down"></i></button>
                                <ul className="sidenav__menu-dropdown">
                                    <li><a href="index.html" className="sidenav__menu-link">Home Demo 1</a></li>
                                    <li><a href="index-2.html" className="sidenav__menu-link">Home Demo 2</a></li>
                                    <li><a href="index-3.html" className="sidenav__menu-link">Home Demo 3</a></li>
                                </ul>
                            </li>
                        
                            <li>
                            <a href="#" className="sidenav__menu-link">Posts</a>
                            <button className="sidenav__menu-toggle" aria-haspopup="true" aria-label="Open dropdown"><i className="ui-arrow-down"></i></button>
                            <ul className="sidenav__menu-dropdown">
                                <li><a href="single-post.html" className="sidenav__menu-link">Gallery Post</a></li>
                                <li><a href="single-post.html" className="sidenav__menu-link">Video Post</a></li>
                                <li><a href="single-post.html" className="sidenav__menu-link">Audio Post</a></li>
                                <li><a href="single-post.html" className="sidenav__menu-link">Quote Post</a></li>
                            </ul>
                            </li>

                            <li>
                            <a href="#" className="sidenav__menu-link">Pages</a>
                            <button className="sidenav__menu-toggle" aria-haspopup="true" aria-label="Open dropdown"><i className="ui-arrow-down"></i></button>
                            <ul className="sidenav__menu-dropdown">
                                <li><a href="about.html" className="sidenav__menu-link">About</a></li>
                                <li><a href="contact.html" className="sidenav__menu-link">Contact</a></li>
                                <li><a href="404.html" className="sidenav__menu-link">404</a></li>
                            </ul>
                            </li>
                            
                            <li>
                            <a href="#" className="sidenav__menu-link">Features</a>
                            <button className="sidenav__menu-toggle" aria-haspopup="true" aria-label="Open dropdown"><i className="ui-arrow-down"></i></button>
                            <ul className="sidenav__menu-dropdown">
                                <li><a href="lazyload.html" className="sidenav__menu-link">Lazyload</a></li>
                                <li><a href="shortcodes.html" className="sidenav__menu-link">Shortcodes</a></li>
                            </ul>
                            </li>

                            <li>
                            <a href="#" className="sidenav__menu-link">Purchase</a>
                            </li>
                        </ul>
                    </nav>

                    <div className="socials sidenav__socials "> 
                    <a className="social-facebook" href="#" target="_blank" aria-label="facebook">
                        <i className="ui-facebook"></i>
                    </a>
                    <a className="social-twitter" href="#" target="_blank" aria-label="twitter">
                        <i className="ui-twitter"></i>
                    </a>
                    <a className="social-youtube" href="#" target="_blank" aria-label="youtube">
                        <i className="ui-youtube"></i>
                    </a>
                    </div>
                </header>
            </div>
        );
    }
}