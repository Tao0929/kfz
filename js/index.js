window.onload = function(){
	$("#pj-lunbo4").Carousel({
		'play':'true', //是否循环播放
		'prevButton':'#prev', //左按钮
		'nextButton':'#next',  //右按钮
		'play':'true' ,   //循环播放
		'WidthMax':'false', //全屏 
		'auto':'true', //自动播放
		'AnTimer':'800',  //动画定时器,默认为0.8s
		'playTimer':'5000', //物体运动定时器
		'WidthMax':'false',    //全屏模式
		'fade':'true',     //淡出淡出
		'eventClick':'false'  //为true的时候,插件下面的状态栏变为click触发，默认为鼠标移入触发
	});

	let arr = ["书单：环境日专题","纪念：纳博科夫","拍卖：宣南书局墨迹专场","活动：读书日特惠专场","书单：名家“吃货”","书单：作家传记","书单：私影书屋","书单：阿贵旧书斋"];
	let arr1 = ["banner1.jpg","banner2.jpg","banner3.jpg","banner4.jpg","banner5.jpg","banner6.jpg","banner7.jpg","banner8.jpg"];
	let aDoms = document.getElementsByClassName("pj-Carousel-color");
	let divDoms = document.getElementsByClassName("pj-Carousel-item");

	for(let i=0;i<aDoms.length;i++){
		aDoms[i].innerHTML = `<a class="sd_list" href="">${arr[i]}</a>`;
	}
	for(let i=0;i<divDoms.length;i++){
		divDoms[i].innerHTML = `<a href=""><img style="width:100%;height: 100%;" src="../img/${arr1[i]}" alt=""></a>`;
	}
}

// 侧边栏
// $("ul>li").not(":eq(0)")
// .not(":eq(0)")
// .not(":eq(0)")
// .not(":eq(0)")
$(function(){	

	// 导航左侧栏js效果 start

	let list1 = $(".category_ul_1>.category_list>.category_box");
	let list2 = $(".category_ul_2>.db_category_list");
	let list3 = $(".category_ul_3>.category_list>.category_box");
	let arr = [list1,list3];
	for(let i=0;i<arr.length;i++){
		for(let j=0;j<arr[i].length;j++){
			arr[i][j].onmouseover = function(){
				this.parentNode.nextElementSibling.style.display = "block";
				this.style.backgroundColor = "#fff";
				this.style.borderColor = "#8c222c";
			}

			arr[i][j].onmouseout = function(){
				this.parentNode.nextElementSibling.style.display = "none";
				this.style.backgroundColor = "";
				this.style.borderColor = "";
			}

		}
	}
	for(let i=0;i<list2.length;i++){
		list2[i].onmouseover = function(){
			this.children[2].style.display = "block";
			this.style.backgroundColor = "#fff";
			this.style.border = "2px solid #8c222c";
			this.style.borderRight = "";
			$(this).children('.category_list').css('border',"none");
			// $(this).children('.category_list').css('border-bottom',"1px solid transparent");
			$(this).children('.category_list').css('border-bottom_color',"transparent");
		}
		list2[i].onmouseout = function(){
			this.children[2].style.display = "none";
			this.style.backgroundColor = "";
			// this.style.borderColor = "";
			this.style.border = "none";
			$(this).children('.category_list').css('border',"1px solid #ddd");
			$(this).children('.category_list').css('border-color',"#ddd");
		}
	}

	let hide_list1 = $(".category_ul_1>.category_hide");
	let hide_list2 = $(".category_ul_2>.category_hide");
	let hide_list3 = $(".category_ul_3>.category_hide");
	let arr1 = [hide_list1,hide_list2,hide_list3];
	for(let i=0;i<arr1.length;i++){
		for(let j=0;j<arr1[i].length;j++){
			arr1[i][j].onmouseover = function(){
				this.style.display = "block";
				this.previousElementSibling.style.backgroundColor = "#FFF";
				this.previousElementSibling.children[0].style.cssText = `border-color:#8c222c;border-right:2px solid #fff;width:159px;`;
				
			}

			arr1[i][j].onmouseout = function(){
				this.previousElementSibling.children[0].style.width = "161px";
				this.previousElementSibling.children[0].style.borderRight = "";
				this.previousElementSibling.children[0].style.borderColor = "transparent";
				this.previousElementSibling.style.backgroundColor = "";
				this.style.display = "none";
			}

		}
	}

}) 

// 首页 书店区域

$(function(){
	$(".nav_list").hover(function(){
		this.children[0].children[0].style.display = "block";
		$(this.children[0].children[0]).addClass("header_line");
	}).mouseleave(function(){
		this.children[0].children[0].style.display = "none";
	})
})


// 底部
 $(document).ready(function() {
     $(".footer_friend_tit a").hover(function() {
         $(".footer_friend_tit a").eq($(this).index()).addClass("now").siblings().removeClass('now');
         $(".foot_box").hide().eq($(this).index()).show();
     });
 });
