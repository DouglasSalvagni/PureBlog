import React, { Component } from 'react'
import $ from "jquery"
import Flickity from 'react-flickity-component'
import './../assets/js/sliderScripts'


export default class HeroSlider extends Component {
   

    initFlickity() {

        // 1st carousel, main
        $('#flickity-hero').flickity({
          cellAlign: 'left',
          contain: true,
          pageDots: false,
          prevNextButtons: false,
          draggable: false
        });
    
        // 2nd carousel, navigation
        $('#flickity-thumbs').flickity({
          cellAlign: 'left',
          asNavFor: '#flickity-hero',
          contain: true,
          pageDots: false,
          prevNextButtons: false,
          // draggable: false
        });
    
        // Posts carousel
        $('.carousel-posts').flickity({
          cellAlign: 'left',
          pageDots: false,
          wrapAround: true,
        });
    }
    
    componentDidMount() {
        this.initFlickity()
    }

    render() {
        

        return(
            <div>
                <section className="hero">
                    <div id="flickity-hero" className="carousel-main">        

                        <div className="carousel-cell hero__slide">
                        <article className="hero__slide-entry entry">
                            <div className="hero__slide-thumb-bg-holder" style={{backgroundImage:"url(img/blog/hero_slider/featured_img_1.jpg)"}}>
                            <div className="bottom-gradient"></div>
                            </div>
                            
                            <div className="hero__slide-thumb-text-holder">
                            <div className="container">
                                <a href="categories.html" className="entry__meta-category entry__meta-category--label">Startups</a>   
                                <h2 className="entry__title--lg entry__title--white">
                                <a href="single-post.html">Technology's impact on marketing</a>
                                </h2>
                            </div>
                            </div>
                        </article>          
                        </div>

                        <div className="carousel-cell hero__slide">
                        <article className="hero__slide-entry entry">
                            <div className="hero__slide-thumb-bg-holder" style={{backgroundImage: "url(img/blog/hero_slider/featured_img_2.jpg)"}}>
                            <div className="bottom-gradient"></div>
                            </div>
                            
                            <div className="hero__slide-thumb-text-holder">
                            <div className="container">
                                <a href="categories.html" className="entry__meta-category entry__meta-category--label">Startups</a>   
                                <h2 className="entry__title--lg entry__title--white">
                                <a href="single-post.html">the Age of Artificial Intelligence</a>
                                </h2>
                            </div>
                            </div>
                        </article>          
                        </div>

                        <div className="carousel-cell hero__slide">
                        <article className="hero__slide-entry entry">
                            <div className="hero__slide-thumb-bg-holder" style={{backgroundImage: "url(img/blog/hero_slider/featured_img_3.jpg)"}}>
                            <div className="bottom-gradient"></div>
                            </div>
                            
                            <div className="hero__slide-thumb-text-holder">
                            <div className="container">
                                <a href="categories.html" className="entry__meta-category entry__meta-category--label">Startups</a>   
                                <h2 className="entry__title--lg entry__title--white">
                                <a href="single-post.html">The Most Powerful Thing You Can Do Is Be Yourself</a>
                                </h2>
                            </div>
                            </div>
                        </article>          
                        </div>

                        <div className="carousel-cell hero__slide">
                        <article className="hero__slide-entry entry">
                            <div className="hero__slide-thumb-bg-holder" style={{backgroundImage: "url(img/blog/hero_slider/featured_img_4.jpg)"}}>
                            <div className="bottom-gradient"></div>
                            </div>
                            
                            <div className="hero__slide-thumb-text-holder">
                            <div className="container">
                                <a href="categories.html" className="entry__meta-category entry__meta-category--label">Startups</a>   
                                <h2 className="entry__title--lg entry__title--white">
                                <a href="single-post.html">The Most Powerful Thing You Can Do Is Be Yourself</a>
                                </h2>
                            </div>
                            </div>
                        </article>          
                        </div>
                        
                    </div> 
                    {/* <!-- end flickity --> */}

                    {/* <!-- Slider thumbs --> */}
                    <div className="carousel-thumbs-holder">
                        <div className="container">
                        <div id="flickity-thumbs" className="carousel-thumbs">
                            <div className="carousel-cell">
                            <div className="carousel-thumbs__item">
                                <div className="carousel-thumbs__img-holder">
                                <img src="img/blog/hero_slider/slider_thumb_1.jpg" alt="" />
                                </div>
                                <h2 className="carousel-thumbs__title">
                                The Most Powerful Thing You Can Do Is Be Yourself
                                </h2>
                            </div>
                            </div>
                            <div className="carousel-cell">
                            <div className="carousel-thumbs__item">
                                <div className="carousel-thumbs__img-holder">
                                <img src="img/blog/hero_slider/slider_thumb_2.jpg" alt="" />
                                </div>
                                <h2 className="carousel-thumbs__title">
                                The Most Powerful Thing You Can Do Is Be Yourself
                                </h2>
                            </div>
                            </div>
                            <div className="carousel-cell">
                            <div className="carousel-thumbs__item">
                                <div className="carousel-thumbs__img-holder">
                                <img src="img/blog/hero_slider/slider_thumb_3.jpg" alt="" />
                                </div>
                                <h2 className="carousel-thumbs__title">
                                The Most Powerful Thing You Can Do Is Be Yourself
                                </h2>
                            </div>
                            </div>
                            <div className="carousel-cell">
                            <div className="carousel-thumbs__item">
                                <div className="carousel-thumbs__img-holder">
                                <img src="img/blog/hero_slider/slider_thumb_4.jpg" alt="" />
                                </div>
                                <h2 className="carousel-thumbs__title">
                                The Most Powerful Thing You Can Do Is Be Yourself
                                </h2>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
            </div>
        );

    }
    
}