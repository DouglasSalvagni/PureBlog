

$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '199047361',
        limit: 12,
        resolution: 'standard_resolution',
        accessToken: '199047361.1677ed0.e72e93feb9fe474cad639c7f5407440f',
        sortBy: 'most-recent',
        template: '<div class="instagramF"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });


    userFeed.run();

    
    // This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });


});