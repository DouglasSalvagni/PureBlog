import React, { Component } from 'react'
import './Preloader.css'

export default class Preloader extends Component {

    
    hidePreloader() {
        setTimeout(() => {
            document.querySelector('.loader-mask').classList.remove('loader-mask')
            document.querySelector('.loader').classList.remove('loader')
        }, 500);
    }
    
    componentDidMount() {
        this.hidePreloader()
    }

    render() {

        return(
            <div>
                <div className='loader-mask'>
                    <div className='loader'>
                        <div></div>
                    </div>
                </div>
            </div>
        );

    }
    
}