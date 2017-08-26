$(function(){
	// banner ;
	var bannerSwiper = new Swiper('.ban-swiper-container',{
		speed:1000,
		autoplay:5000,
		prevButton:'.swiper-button-prev',
		nextButton:'.swiper-button-next',
		pagination:'.swiper-pagination',
		paginationClickable:true,
		autoplayDisableOnInteraction:false,	
		loop:true,
	});

	// 移动端menu弹出效果；
	var isMenuDown = false;
	$('.menudown').on('click',function(){
		if(isMenuDown == false){
			$('.menu-open').addClass('hiden');
			$('.menu-close').removeClass('hiden');
			$('.down').removeClass('down').addClass('up');
			$(".menu-ph").show().removeClass('menuhide').addClass('menushow');
			isMenuDown = true;
			return;
		}else{
			$('.menu-open').removeClass('hiden');
			$('.menu-close').addClass('hiden');
			$('.up').removeClass('up').addClass('down');
			$('.menu-ph').removeClass('menushow').addClass('menuhide');
			setTimeout(function(){
				$('.menu-ph').hide();
			},300);
			isMenuDown = false;
			return;
		}
	})
})