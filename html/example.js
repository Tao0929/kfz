
$(function(){	
	// 导航左侧栏js效果 start
	$(".category_list").hover(function(){
		var index=$(this).index(".category_list");
		if (!($(this).hasClass(".menu_hover"))) {
			$($(".category_hide")[index]).css("display","block").siblings().css("display","none");			
		}else{	
		}
		$(this).addClass(".menu_hover").siblings().removeClass(".menu_hover");
		$($(".category_hide")[index]).fadeIn().siblings().fadeOut();
	},function(){
		
	})
	$(".pullDown").mouseleave(function(){
		$(".category_hide").fadeOut();
		$(".category_list").removeClass(".menu_hover");

	})
	// 导航左侧栏js效果  end
	
})

