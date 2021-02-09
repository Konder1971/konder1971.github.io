(function($) {	
	$(document).ready(function() {

	    var currScroll = 0;
		var isMobile = false; 
		var isTablet = false; 
		var isDesktop = false; 
		
		if($(window).width() < 738){
			isMobile = true;
			isTablet = false;
			isDesktop = false;
		}else if($(window).width() >= 738 && $(window).width() <= 1170){
			isMobile = false;
			isTablet = true;
			isDesktop = false;
		}else{
			isMobile = false;
			isTablet = false;
			isDesktop = true;
		}
		
		/*var isMobile = {
			Android: function() {
				return navigator.userAgent.match(/Android/i);
			},
			BlackBerry: function() {
				return navigator.userAgent.match(/BlackBerry/i);
			},
			iOS: function() {
				return navigator.userAgent.match(/iPhone|iPad|iPod/i);
			},
			Opera: function() {
				return navigator.userAgent.match(/Opera Mini/i);
			},
			Windows: function() {
				return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
			},
			any: function() {
				return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
			}
		};*/
		 
		// navigations start
		$('.nav-toggle').click(function(){
			$('.navigations').toggleClass('active');
		});

		$('nav li a').click(function(){
			$('li a.act').removeClass('act');
			$(this).addClass('act');
			$('.navigations').toggleClass('active');
		});
		
		$('.bct').click(function(){
			$('body,html').animate({
				scrollTop: 0
		    }, 1800);
			return false;
		});
		

		// intro animanion scroll start
		var logoTimer;
		var logoVisible = false;
		if($(this).scrollTop() >= 50) {
			$('.ic-down').addClass('ic-downscroll');
			$('.intro').addClass('introScrol');	
			$('.topBlock .logo').css('opacity', 1);
			logoVisible	= true;	
			if($(window).width() <= 767){
				$('.getStarted').hide();
			}
		}else{
			$('.topBlock .logo').css('opacity', 0);
			logoVisible	= false;
			if($(window).width() > 750){
				$('.getStarted').show();
			}
		}		
		// intro animanion scroll stop
		
		
		$(window).scroll(function() {
			currScroll = $(window).scrollTop();	
			
			//intro animation
			if($(this).scrollTop() >= 50) {
				$('.ic-down').addClass('ic-downscroll');
				$('.intro').addClass('introScrol');	
				if($(window).width() <= 749){
					$('.getStarted').hide();
				}				
				if(!logoVisible){
					logoTimer = setTimeout(function(){
						$('.topBlock .logo').css('opacity', 1);
					}, 500);
					logoVisible	= true;				
				}
			}
			if ($(this).scrollTop() < 50) {
				$('.getStarted').show();
				clearTimeout(logoTimer);
				$('.ic-down').removeClass('ic-downscroll');
				$('.intro').removeClass('introScrol');
				$('.topBlock .logo').css('opacity', 0);
				logoVisible	= false;
			}
			
			//blocks scroll							
			if(currScroll >= $('#bx4').offset().top + $('.topBlock').height()+$('.boxHeader').height()){
					movingTip = true;
					$('.boxHeader').stop().animate({top: -180}, 500);
			}else{
					movingTip = true;
					$('.boxHeader').stop().animate({top: 0}, 500);
			}
				
			if(currScroll >= $('#bx0').offset().top- $('.boxHeader').height()-$('.topBlock').height()){
				$('.commonHeader').addClass('box-fixed');
				$('.mainBox').css('padding-top', $('.boxHeader').height());
			}else{
				$('.commonHeader').removeClass('box-fixed');
				$('.mainBox').css('padding-top', 0);
			}

			if(currScroll > $('#bx3').offset().top - $('.topBlock').height()){
				$('#footer').css('visibility', 'visible');
			}else{
				$('#footer').css('visibility', 'hidden');
			}
			
			// scroll for footerTop start
			if(isTablet || isMobile){
				if($(window).scrollTop()>=$('#contentBoxes').height()*1+$('#intro').height()*1+$('.commonHeader ').height()*1-$('.topBlock').height()){
					$('.mainBox').css('padding-bottom', 0);
					$('body').addClass('footerTop');
					$('#footer').addClass('noFixed');
					if(isTablet){
						$('#footer').css('top', 20);
					}else{
						$('#footer').css('padding-top', 20);
					}										
				}else{
					$('.mainBox').css('padding-bottom', $(window).height());			
					$('body').removeClass('footerTop');
					$('#footer').removeClass('noFixed');
					if(isTablet){
						$('#footer').css('top', 100);
						$('#footer').css('min-height', $(window).height()-100);
				    }else{
						$('#footer').css('padding-top', 80);
						$('#footer').css('min-height', $(window).height());
					}		
				}
			}else{
				if($(window).scrollTop()+$(window).height()>=$(document).height()){
					$('body').addClass('footerTop');
				}else{
					$('body').removeClass('footerTop');
				}
				$('.mainBox').css('padding-bottom', $(window).height());				
			}
		});
		
		//navigation
		$('.bx').each(function(){
			$(this).click(function(){
				var href = $(this).attr('href');
				if(href === '#'){					
					$('body,html').animate({
						scrollTop: $('body').height()*1 + $('.topBlock').height()
					}, 800, function(){
						$('body,html').animate({
							scrollTop: $('body').height()*2
						}, 800);		
					});					
				}else{
					scrollToDiv($(href),$('.topBlock').height()*1+$('.boxHeader').height()*1);
				}
				
				return false;
			});			
		});
		$('.ic-down').find('a').click(function(){
			$('#footer').css('visibility', 'hidden');
			if($('body').hasClass('footerTop')){				
				$('body,html').animate({
					scrollTop: 0
				}, 1800);
			}else{
				var sect = '#bx0';
				currScroll++;
				if(currScroll >= $('#bx0').offset().top - $('.topBlock').height() - $('.boxHeader').height()  && currScroll < $('#bx1').offset().top - $('.topBlock').height()*1-$('.boxHeader').height()*1){
					sect = '#bx1';
					scrollToDiv($(sect),$('.topBlock').height()*1+$('.boxHeader').height()*1);
				}else if(currScroll >= $('#bx1').offset().top - $('.topBlock').height() - $('.boxHeader').height() && currScroll < $('#bx2').offset().top - $('.topBlock').height()*1-$('.boxHeader').height()*1){
					sect = '#bx2';
					scrollToDiv($(sect),$('.topBlock').height()*1+$('.boxHeader').height()*1);
				}else if(currScroll >= $('#bx2').offset().top - $('.topBlock').height() - $('.boxHeader').height() && currScroll < $('#bx3').offset().top - $('.topBlock').height()*1-$('.boxHeader').height()*1){
					sect = '#bx3';
					scrollToDiv($(sect),$('.topBlock').height()*1+$('.boxHeader').height()*1);
				}else if(currScroll >= $('#bx3').offset().top - $('.topBlock').height() - $('.boxHeader').height() && currScroll < $('#bx4').offset().top - $('.topBlock').height()*1-$('.boxHeader').height()*1){ 
					sect = '#bx4';
					scrollToDiv($(sect),$('.topBlock').height()*1+$('.boxHeader').height()*1);
				}else if(currScroll >= $('#bx4').offset().top - $('.topBlock').height()*1-$('.boxHeader').height()*1){
					$('body,html').animate({
						scrollTop: $('body').height()*1+1000*1
					}, 800);
				}else{
					scrollToDiv($(sect),$('.topBlock').height()*1+$('.boxHeader').height()*1);
				}
			}		
			return false;
		});
		
		$('.logo a').click(function(){
			$('body,html').animate({
					scrollTop: 0
			}, 1000);
			return false;
		});
		

		

		// madal start
		$('.modal-open').click(function (event) {
			event.preventDefault();		
			var modal = $(this).attr('href');
			$(modal).addClass('activemodal');
			$('body').attr( 'data-pos', $(window).scrollTop()); // get actual scrollpos
			$('body').addClass('fixedPage');		
			return false;
		});
		$('.madal-close, .backBtn').click(function () {
			$('.boxmodal').removeClass('activemodal');
			$('.boxmodal').css({
				'top': '-100vh'
			}); 
			setTimeout(function(){
				$('.boxmodal').css({
						top: 0,
				});
			}, 400);
			$('body').removeClass('fixedPage');
			$( window ).scrollTop( $('body').attr( 'data-pos' ));
			return false;
		});
		// modal stop	

	});
	
	//auto height
	/*$('.boxContainer').each(function(){
			var container = $(this);			
			var winHeight = $(window).height();		
			var headerHeight = $('.topBlock').height();
			if(container.height() < winHeight-headerHeight){
				container.height(winHeight-headerHeight);
			}		
	});*/	
	/*$(window).resize(function(){
		$('.boxContainer').each(function(){
			var container = $(this);
			var winHeight = $(window).height();
			var headerHeight = $('.topBlock').height();
			if(container.height() < winHeight-headerHeight){
				container.height(winHeight-headerHeight);
			}
		});
	});*/	
	
	$(window).resize(function(){		
		if($(window).width() < 738){
			isMobile = true;
			isTablet = false;
			isDesktop = false;
		}else if($(window).width() >= 738 && $(window).width() <= 1170){
			isMobile = false;
			isTablet = true;
			isDesktop = false;
		}else{
			document.location.reload();
			isMobile = false;
			isTablet = false;
			isDesktop = true;
		}
		
		if($(window).width() <= 749){
			$('.getStarted').hide();
		}
	});
	
})( jQuery );

function scrollToDiv(element,navheight){
    var offset = element.offset();
    var offsetTop = offset.top;
    var totalScroll = offsetTop-navheight;
    $('body,html').animate({
        scrollTop: totalScroll
    }, 800);
}


