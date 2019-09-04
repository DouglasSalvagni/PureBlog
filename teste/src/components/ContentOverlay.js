import React, { Component } from 'react'
import Navigation from './Navigation'

export default class Main extends Component {


    constructor(props){
        super(props)
        this.hideInTouch = this.hideInTouch.bind(this)
    }

    hideInTouch(props) {

        document.querySelector('.nav-icon-toggle').classList.remove('nav-icon-toggle--is-open')
        document.querySelector('.sidenav').classList.remove('sidenav--is-open')
        document.querySelector('.main-container').classList.remove('main-container--is-pushed')
        document.querySelector('.nav__holder').classList.remove('nav__holder--is-pushed')
        document.querySelector('.content-overlay').classList.remove('content-overlay--is-visible')
        document.querySelector('html').classList.remove('oh')

    }

    render() {
        return(
            <React.Fragment>
                <div onClick={this.hideInTouch} className="content-overlay" id="content-overlay"></div>
            </React.Fragment>
        );

    }
    
}