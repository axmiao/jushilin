$(function(){new Swiper(".ban-swiper-container",{speed:1e3,autoplay:5e3,prevButton:".swiper-button-prev",nextButton:".swiper-button-next",pagination:".swiper-pagination",paginationClickable:!0,autoplayDisableOnInteraction:!1,loop:!0}),new Swiper(".team-swiper-container",{prevButton:".swiper-button-prev",nextButton:".swiper-button-next",loop:!1,autoplay:0,speed:1e3});var e=!1;$(".menudown").on("click",function(){return 0==e?($(".menu-open").addClass("hiden"),$(".menu-close").removeClass("hiden"),$(".down").removeClass("down").addClass("up"),$(".menu-ph").show().removeClass("menuhide").addClass("menushow"),void(e=!0)):($(".menu-open").removeClass("hiden"),$(".menu-close").addClass("hiden"),$(".up").removeClass("up").addClass("down"),$(".menu-ph").removeClass("menushow").addClass("menuhide"),setTimeout(function(){$(".menu-ph").hide()},300),void(e=!1))}),$(".choice .sele").on("click",function(){$(this).addClass("cur").siblings(".sele").removeClass("cur")}),$(".sendbtn").on("click",function(){$(".mask-all,.alert-write").show()}),$(".over").on("click",function(){""!==$("#words").val()?($(".alert-write").hide(),$(".alert-pay").show(),$("#words").val("")):alert("求福内容不能为空")}),$(".close-pay").on("click",function(){$(".alert-pay,.mask-all").hide()}),$(".close-write").on("click",function(){$(".alert-write,.mask-all").hide()}),$dataLuck=[{word:"三生三世，十里桃花"},{word:"愿一世长安，晓梦不烬"},{word:"愿得一心人，白首不相离"},{word:"愿人生只如初见，补事秋风悲画扇"},{word:"时光不老，我们不散"},{word:"若爱只是过往，从此不见不念"}],$(".box-list li").on("click",function(){var e=$(this).index();$(".triange").animate({left:240*e+20+"px"});for(var n=0;n<$dataLuck.length;n++)$(".card li").eq(n).find(".info").text($dataLuck[n].word)})});