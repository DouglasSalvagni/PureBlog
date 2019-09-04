/* Mobile Navigation
  -------------------------------------------------------*/
  var $sidenav = $('#sidenav'),
      $mainContainer = $('#main-container'),
      $navIconToggle = $('#nav-icon-toggle'),
      $navHolder = $('.nav__holder'),
      $contentOverlay = $('.content-overlay'),
      $htmlContainer = $('html');


  $navIconToggle.on('click', function(e) {
    e.stopPropagation();
    $(this).toggleClass('nav-icon-toggle--is-open');
    $sidenav.toggleClass('sidenav--is-open');   
    $mainContainer.toggleClass('main-container--is-pushed');
    $navHolder.toggleClass('nav__holder--is-pushed');
    $contentOverlay.toggleClass('content-overlay--is-visible');
    $htmlContainer.toggleClass('oh');
  });

  function resetNav() {
    $navIconToggle.removeClass('nav-icon-toggle--is-open');
    $sidenav.removeClass('sidenav--is-open');
    $mainContainer.removeClass('main-container--is-pushed');
    $navHolder.removeClass('nav__holder--is-pushed');
    $contentOverlay.removeClass('content-overlay--is-visible');
    $htmlContainer.removeClass('oh');
  }

  function hideSidenav() {
    if( minWidth(992) ) {
      resetNav();
    }
  }

  $contentOverlay.on('click', function() {    
    resetNav();
  });

  var $dropdownTrigger = $('.nav__dropdown-trigger'),
      $navDropdownMenu = $('.nav__dropdown-menu'),
      $navDropdown = $('.nav__dropdown');


  if ( $('html').hasClass('mobile') ) {

    $('body').on('click',function() {
      $navDropdownMenu.addClass('hide-dropdown');
    });

    $navDropdown.on('click', '> a', function(e) {
      e.preventDefault();
    });

    $navDropdown.on('click',function(e) {
      e.stopPropagation();
      $navDropdownMenu.removeClass('hide-dropdown');
    });
  }
