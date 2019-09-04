import React, { Component } from 'react'

export default class Carousel extends Component {


    render() {
        return(
            <div>
                <div id="carousel-legenda" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">

                        <li className="active" data-target="#carousel-legenda" data-slide-to="0"></li>

                        <li data-target="#carousel-legenda" data-slide-to="1"></li>

                        <li data-target="#carousel-legenda" data-slide-to="2"></li>

                    </ol>

                    <div className="carousel-inner">
                  
                        <div className="carousel-item active">
                            <img src="img/blog/hero_slider/featured_img_1.jpg" className="img-fluid" />
                            <div className="carousel-caption">
                                <div style={{background: "black", padding: "10px;"}}>
                                    <h3>Item 1</h3>
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <img src="img/blog/hero_slider/featured_img_2.jpg" className="img-fluid" />
                            <div className="carousel-caption">
                                <h3>Item 2</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <img src="img/blog/hero_slider/featured_img_3.jpg" className="img-fluid" />
                                <div className="carousel-caption">
                                <h3>Item 3</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                            </div>
                        </div>
                    </div>
                   
                    <a href="#carousel-legenda" className="carousel-control-prev" data-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                    </a>

                    <a href="#carousel-legenda" className="carousel-control-next" data-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </a>

                </div>
            </div>
        );

    }
    
}