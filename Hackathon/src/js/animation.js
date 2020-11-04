import gsap from 'gsap';

const flightPath = {
    curviness:1.25,
    autorotate:true,
    values:[{x:100,y:-20}, {x:200,y:-50}]
};

const tween = new gsap.timeline();


tween.add(
    TweenLite.to(".teste",1,{
        bezier: flightPath,
        ease: Power1.easeInOut
    })
);

export default tween;

