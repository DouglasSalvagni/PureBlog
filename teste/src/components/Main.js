import React, { Component } from 'react'
//import HeroSlider from './HeroSlider'
import Carousel from './Carousel'

export default class Main extends Component {


    render() {
        return(
            <div>
                <main className="main-container" id="main-container">

                    {/* <HeroSlider /> */}
                    <Carousel />
                
                </main>
            </div>
        );

    }
    
}