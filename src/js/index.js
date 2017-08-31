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

	//team;
	var teamSwiper = new Swiper('.team-swiper-container',{
		prevButton:'.swiper-button-prev',
		nextButton:'.swiper-button-next',
		loop:false,
		autoplay:0,
		speed:1000,
	}) 

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

	// 单选框选中事件；
	$('.choice .sele').on('click',function(){
		$(this).addClass('cur').siblings('.sele').removeClass('cur');
	});

	// 求福弹框；
	$('.sendbtn').on('click',function(){
		$('.mask-all,.alert-write').show();
	})
	$('.over').on('click',function(){
		if($('#words').val() !== ''){
			$('.alert-write').hide();
			$('.alert-pay').show();
			$('#words').val('');
		}else{
			alert('求福内容不能为空');
		}
	});
	$('.close-pay').on('click',function(){
		$('.alert-pay,.mask-all').hide();
	});
	$('.close-write').on('click',function(){
		$(".alert-write,.mask-all").hide();
	})

	$dataLuck = [{
		'word':'三生三世，十里桃花'
	},{
		'word':'愿一世长安，晓梦不烬'
	},{
		'word':'愿得一心人，白首不相离'
	},{
		'word':'愿人生只如初见，补事秋风悲画扇'
	},{
		'word':'时光不老，我们不散'
	},{
		'word':'若爱只是过往，从此不见不念'
	}]

	$('.box-list li').on('click',function(){
		var x = $(this).index();
		$(".triange").animate({left:( x * 240 + 20)+'px'})
		for( var i = 0; i < $dataLuck.length; i++ ){
			$(".card li").eq(i).find('.info').text($dataLuck[i].word);
		}
	})


})	