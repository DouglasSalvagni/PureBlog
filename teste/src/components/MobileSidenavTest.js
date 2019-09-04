import React, { Component } from 'react'
import NavHibrid from './NavHibrid'

export default class MobileSidenavTest extends Component {
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

                    <NavHibrid />

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