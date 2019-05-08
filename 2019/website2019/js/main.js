;(function () {
	
	'use strict';



	// iPad and iPod detection	
	var isiPad = function(){
		return (navigator.platform.indexOf("iPad") != -1);
	};

	var isiPhone = function(){
	    return (
			(navigator.platform.indexOf("<i></i>Phone") != -1) || 
			(navigator.platform.indexOf("iPod") != -1)
	    );
	};

	var fullHeight = function() {
		if ( !isiPad() && !isiPhone() ) {
			$('.js-fullheight').css('height', $(window).height());
			$(window).resize(function(){
				$('.js-fullheight').css('height', $(window).height());
			})
		}
	};

	var sliderMain = function() {
		
	  	$('#fh5co-home .flexslider').flexslider({
			animation: "fade",
			slideshowSpeed: 5000
	  	});

	  	$('#fh5co-home .flexslider .slides > li').css('height', $(window).height());	
	  	$(window).resize(function(){
	  		$('#fh5co-home .flexslider .slides > li').css('height', $(window).height());	
	  	});

	  	$('.js-fh5co-next').on('click', function(event){

	  		event.preventDefault();
	  		$('html, body').animate({
				scrollTop: $(this).closest('#fh5co-home').next().offset().top
			}, 800, 'easeOutExpo');
	  		
	  	});

	};

	var sliderTestimony = function() {

		$('#fh5co-testimony .flexslider').flexslider({
			animation: "slide",
			slideshowSpeed: 5000,
			directionNav: false,
			controlNav: true,
			smoothHeight: true,
			reverse: true
	  	});

	}

	var offcanvasMenu = function() {

		$('body').prepend('<div id="fh5co-offcanvas" />');
		$('#fh5co-offcanvas').append($('#fh5co-main-nav').clone());

		setTimeout(function(){
			$('#fh5co-offcanvas').prepend('<a href="#" class="js-fh5co-offcanvas-close fh5co-offcanvas-close" />');
			$('#fh5co-offcanvas #fh5co-main-nav').attr('id', '');
		}, 200);
		
	};

	var mainMenuSticky = function() {
		
		var sticky = $('.js-sticky');

		sticky.css('height', sticky.height());
		$(window).resize(function(){
			sticky.css('height', sticky.height());
		});

		var $section = $('.fh5co-main-nav');
		
		$section.waypoint(function(direction) {
		  	
		  	if (direction === 'down') {

			    	$section.css({
			    		'position' : 'fixed',
			    		'top' : 0,
			    		'width' : '100%',
			    		'z-index' : 99999
			    	}).addClass('fh5co-shadow');;

			}

		}, {
	  		offset: '0px'
		});

		$('.js-sticky').waypoint(function(direction) {
		  	if (direction === 'up') {
		    	$section.attr('style', '').removeClass('fh5co-shadow');
		  	}
		}, {
		  	offset: function() { return -$(this.element).height() + 69; }
		});

	};

	// Click outside of offcanvass
	var mobileMenuOutsideClick = function() {

		$(document).click(function (e) {
	    var container = $("#fh5co-offcanvas, .js-fh5co-nav-toggle, .js-fh5co-offcanvas-close");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	    	if ( $('body').hasClass('offcanvas-visible') ) {

	    		$('body').removeClass('fh5co-overflow offcanvas-visible');

	    		$('.js-fh5co-nav-toggle').removeClass('active');
	    	}
	    }
		});

		$('body').on('click', '.js-fh5co-offcanvas-close', function(event){
			
			if ( $('body').hasClass('offcanvas-visible') ) {
	    		$('body').removeClass('fh5co-overflow offcanvas-visible');
	    		$('.js-fh5co-nav-toggle').removeClass('active');
	    	}

	    	event.preventDefault();

		});

	};
	
	// Parallax
	var parallax = function() {

		$(window).stellar();

	};


	// Redirect page 
	var redirectPage = function(url) {
		
		window.location = url;

	}

	var pageTransition = function() {

		$("body").css("display", "none");
		
		
		$("body").fadeIn(2000);
		
		$("a.transition").click(function(event){
		  	event.preventDefault();
		  	var linkLocation = this.href;

		  	$("body").fadeOut(2000, redirectPage);      
		  	
		  	redirectPage(linkLocation);
		});
			
	};


	// Burger Menu
	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){

			var $this = $(this);

			$('body').toggleClass('fh5co-overflow offcanvas-visible');
			$this.toggleClass('active');
			event.preventDefault();

		});

	};

	var scrolledWindow = function() {

		$(window).scroll(function(){

			var header = $('#fh5co-header'),
				scrlTop = $(this).scrollTop();

			if ( scrlTop > 500 && scrlTop <= 2000 ) {
				header.addClass('navbar-fixed-top fh5co-animated slideInDown');
			} else if ( scrlTop <= 500) {
				if ( header.hasClass('navbar-fixed-top') ) {
					header.addClass('navbar-fixed-top fh5co-animated slideOutUp');
					setTimeout(function(){
						header.removeClass('navbar-fixed-top fh5co-animated slideInDown slideOutUp');
					}, 100 );
				}
			} 

		   $('#fh5co-home .flexslider .fh5co-overlay').css({
				'opacity' : (.5)+(scrlTop/2000)
		   });

		   if ( $('body').hasClass('offcanvas-visible') ) {
		   	$('body').removeClass('offcanvas-visible');
		   	$('.js-fh5co-nav-toggle').removeClass('active');
		   }
		 
		});

		$(window).resize(function() {
			if ( $('body').hasClass('offcanvas-visible') ) {
		   	$('body').removeClass('offcanvas-visible');
		   	$('.js-fh5co-nav-toggle').removeClass('active');
		   }
		});
		
	};


	var goToTop = function() {

		$('.js-gotop').on('click', function(event){
			
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500);
			
			return false;
		});
	
	};


	// Page Nav
	var clickMenu = function() {
		var topVal = ( $(window).width() < 769 ) ? 0 : 58;

		$(window).resize(function(){
			topVal = ( $(window).width() < 769 ) ? 0 : 58;		
		});

		if ( $(this).attr('href') != "#") {
			$('#fh5co-main-nav a:not([class="external"]), #fh5co-offcanvas a:not([class="external"])').click(function(event){
				var section = $(this).data('nav-section');


				if ( $('div[data-section="' + section + '"]').length ) {

					$('html, body').animate({
			        	scrollTop: $('div[data-section="' + section + '"]').offset().top - topVal
			    	}, 500);	
			    	
			   }
			   event.preventDefault();

			});
		}

		


	};

	// Reflect scrolling in navigation
	var navActive = function(section) {
		
		$('#fh5co-main-nav li, #fh5co-offcanvas li').removeClass('active');
		$('#fh5co-main-nav, #fh5co-offcanvas').find('a[data-nav-section="'+section+'"]').closest('li').addClass('active');
		
	};

	var navigationSection = function() {

		var $section = $('div[data-section]');
		
		$section.waypoint(function(direction) {
		  	if (direction === 'down') {
		    	navActive($(this.element).data('section'));
		  	}

		}, {
	  		offset: '150px'
		});

		$section.waypoint(function(direction) {
		  	if (direction === 'up') {
		    	navActive($(this.element).data('section'));
		  	}
		}, {
		  	offset: function() { return -$(this.element).height() + 155; }
		});

	};



	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){
					
					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							el.addClass('fadeInUp animated');
							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '85%' } );


	};


	// Document on load.
	$(function(){

		pageTransition();
		fullHeight();
		sliderMain();
		sliderTestimony();
		offcanvasMenu();
		mainMenuSticky();
		mobileMenuOutsideClick();
		parallax();
		burgerMenu();
		scrolledWindow();
		clickMenu();
		navigationSection();
		goToTop();
		


		// Animations
		contentWayPoint();
		
		

	});


}());