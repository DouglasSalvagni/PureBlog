
var Flickity = require('flickity');
require('flickity-imagesloaded');
require('flickity-fullscreen');

// now use imagesLoaded and fullscreen
var flkty = new Flickity( '.carousel', {
    imagesLoaded: true,
    fullscreen: true,
});

var $ = require('jquery');
var jQueryBridget = require('jquery-bridget');
var Flickity = require('flickity');

// make Flickity a jQuery plugin
Flickity.setJQuery( $ );
jQueryBridget( 'flickity', Flickity, $ );

