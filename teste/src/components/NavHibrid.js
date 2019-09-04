import React, { Component } from 'react'

export default class NavHibrid extends Component {
    
    constructor(props) {
        super(props)
        this.displayState = false
        this.openDropDownMenu = this.openDropDownMenu.bind(this)
        this.openDropDownMenuI = this.openDropDownMenuI.bind(this)
    }

    openDropDownMenu(event) {
        let dropDownTarget = event.target
        dropDownTarget.parentElement.classList.toggle('sidenav__menu--is-open')
        dropDownTarget.nextElementSibling.classList.toggle('show')

        if (dropDownTarget.nextElementSibling.style['max-height']) {
            dropDownTarget.nextElementSibling.style['max-height'] = null
        } else {
            dropDownTarget.nextElementSibling.style['max-height'] = dropDownTarget.nextElementSibling.scrollHeight + 'px'
        }
        console.log(dropDownTarget.nextElementSibling.scrollHeight)
    }

    openDropDownMenuI(event) {
        let dropDownTarget = event.target
        dropDownTarget.parentElement.parentElement.classList.toggle('sidenav__menu--is-open')
        dropDownTarget.parentElement.nextElementSibling.classList.toggle('show')

        if (dropDownTarget.parentElement.nextElementSibling.style['max-height']) {
            dropDownTarget.parentElement.nextElementSibling.style['max-height'] = null
        } else {
            dropDownTarget.parentElement.nextElementSibling.style['max-height'] = dropDownTarget.parentElement.nextElementSibling.scrollHeight + 'px'
        }
        console.log(dropDownTarget.parentElement.nextElementSibling.scrollHeight)
    }
    
    render() {

        return(
            <React.Fragment>
                <nav className="flex-child nav__wrap d-none d-lg-block">              
                    <ul className="nav__menu">

                        <li className="nav__dropdown active">
                            <a href="index.html">Home</a>
                            <button onClick={this.openDropDownMenu} style={{display: "none"}} className="sidenav__menu-toggle" aria-haspopup="true" aria-label="Open dropdown"><i onClick={this.openDropDownMenuI} className="ui-arrow-down"></i></button>
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

                        <li className="nav__dropdown active">
                            <a href="index.html">Home</a>
                            <button onClick={this.openDropDownMenu} style={{display: "none"}} className="sidenav__menu-toggle" aria-haspopup="true" aria-label="Open dropdown"><i onClick={this.openDropDownMenuI} className="ui-arrow-down"></i></button>
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

                        <li>
                            <a href="#" class="sidenav__menu-link">Purchase</a>
                        </li>

                    </ul>
                </nav>  
            </React.Fragment>
        );

    }
    
}