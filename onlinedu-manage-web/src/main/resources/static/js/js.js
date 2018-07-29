$(function(){
        //1.楼梯什么时候显示，800px scroll--->scrollTop
        $(window).on('scroll',function(){
            var $scroll=$(this).scrollTop();
            if($scroll>=940){
                $('.posi').show();
            }else{
                $('.posi').hide();
            }
        });
        $('.shopjieshao li').each(function(i) {
			console.log(i)
			$(this).click(function() {
				$('.shopjieshao li a').css('color', '#666666');
				$(this).css('background', ' #e4393c').siblings().css('background', '#f7f7f7');
				$(this).find('a').css('color', 'white')
				$('.xuanxiangka .actives').eq(i).css('display', 'block').siblings().css('display', 'none');
			})
		})
        $('.shopjieshaos li').each(function(i) {
			console.log(i)
			$(this).click(function() {
				$('.shopjieshaos li a').css('color', '#666666');
				$(this).css('background', ' #e4393c').siblings().css('background', '#f7f7f7');
				$(this).find('a').css('color', 'white')
				$('.xuanxiangka .actives').eq(i).css('display', 'block').siblings().css('display', 'none');
			})
		})
        $(".crumb .crumb-item-one").mouseover(function() {
			$(this).children(".crumb-item-two").css({
				"display": "block"
			})
			$(this).css({
				"border-bottom": "none",
				"height": "30px"
			})
		}).mouseout(function() {
			$(this).children(".crumb-item-two").css({
				"display": "none"
			})
			$(this).css({
				"border": "solid 1px #737373",
				"height": "22px"
			})
		})
		//top右下拉
		$(".contact").mouseover(function() {
			$(this).css({
				"height": "30px"
			})
		}).mouseout(function() {
			$(this).css({
				"height": "22px"
			})
		});


    function switchSkuId() {
        var checkDivs = $(".redborder div");
        console.log("len:"+checkDivs.length)
        var valueIds="";
        for (var i = 0; i < checkDivs.length; i++) {
        	/*取得选择的对象 length()>0 |*/
            var saleAttrValueDiv = checkDivs.eq(i);
            if(i>0){
                valueIds= valueIds+"|";
            }
            /*attr("value") : 获取属性为value的数据 {"77|78","76|79","76|78","77|79"}*/
            valueIds=valueIds+saleAttrValueDiv.attr("value");
            console.log(valueIds)
        }
        /*取得后台生成的数据{"77|78":"16","76|79":"18","76|78":"17","77|79":"19"}*/
        var valuesSku = $("#valuesSku").attr("value");
        console.log("valuesSku:"+valuesSku);
        /*将字符串转换成json对象*/
        var valuesSkuJson=JSON.parse(valuesSku);
        /*通过选择属性的key "77|78"  valuesSkuJson["77|78" ] skuId=16 等到选择完属性之后的shuId*/
        var skuId= valuesSkuJson[valueIds];
        /*页面正在显示的skuId*/
        var skuIdSelf=$("#skuId").val();
        if(skuId){
            if(skuId==skuIdSelf){
                $("#cartBtn").attr("class","box-btns-two");
            }else{
                window.location.href="/"+skuId+".html";
            }
        }else{
            $("#cartBtn").attr("class","box-btns-two-off");
        }
    }

		$(".box-attr dd").click(function() {
			$(this).css({
				"border": "solid 1px red"
			}).siblings("dd").css({
				"border": "solid 1px #ccc"
			})
		})

       //红边框
		$(".box-attr-2 dd").click(function() {
			$(this).addClass("redborder").siblings("dd").removeClass("redborder");
            switchSkuId();
		})
		//加减
		$("#jia").click(function() {
			var n = $(this).parent().parent().prev("input").val()
			var num = parseInt(n) + 1
			if(num == 0) {
				return;
			}
			$(this).parent().parent().prev("input").val(num)
		})

		$("#jian").click(function() {
			var n = $(this).parent().parent().prev("input").val()
			var num = parseInt(n) - 1
			if(num == 0) {
				return;
			}
			$(this).parent().parent().prev("input").val(num)
		})

		//左右滚动
		$("#left").click(function() {
			$(".box-lh-one ul").stop().animate({
				"left": "-297px"
			})
			$(this).css({
				"color": "#000"
			})
			$("#right").css({
				"color": "#ccc"
			})
		})
		$("#right").click(function() {
			$(".box-lh-one ul").stop().animate({
				"left": 0
			})
			$(this).css({
				"color": "#000"
			})
			$("#left").css({
				"color": "#ccc"
			})
		})

		//换图片
		$(".box-lh-one li").mouseover(function() {
			$(this).css({
				"padding": "0",
				"border": "solid 1px red"

			}).siblings().css({
				"padding": "1px",
				"border": "none"
			})

		})

		//地区出现
		$(".box-stock-li").mouseover(function() {
			$(".box-stock-two").css({
				"display": "block"
			})
			$(this).css({
				"border": "solid 1px #ccc",
				"border-bottom": "none",
				"padding": "0",
				"padding-bottom": "1px"
			})
		}).mouseout(function() {
			$(".box-stock-two").css({
				"display": "none"
			})
			$(this).css({
				"border": "none",
				"padding": "1px"
			})
		})

		//切换地区
		$(".box-stock-div").click(function() {
			var num = $(this).index()
			$(".box-stock-con").eq(num).css({
				"display": "block"
			}).siblings().css({
				"display": "none"
			})
			$(".box-stock-div").eq(num).css({
				"border": "solid 1px red",
				"border-bottom": "solid 2px #fff"
			}).siblings().css({
				"border": "1px solid #ddd",
				"border-bottom": "none"
			})
			$(".box-stock-fot").css({
				"border-top": "solid 1px red"
			})
		})

		//上升 下升
		$(function() {
			var toggle = true;
			$(".box-stock-two-img").click(function() {
				if(toggle) {
					$(".box-stock-dd").css({
						"display": "none"
					})
					$(this).css({
						"transform": "rotate(180deg)"
					})
					toggle = false;
				} else {
					$(".box-stock-dd").css({
						"display": "block"
					})
					$(this).css({
						"transform": "rotate(0)"
					})
					toggle = true;
				}

			})
		})

		function Zoom(imgbox, hoverbox, l, t, x, y, h_w, h_h, showbox) {
			var moveX = x - l - (h_w / 2);
			//鼠标区域距离
			var moveY = y - t - (h_h / 2);
			//鼠标区域距离
			if(moveX < 0) {
				moveX = 0
			}
			if(moveY < 0) {
				moveY = 0
			}
			if(moveX > imgbox.width() - h_w) {
				moveX = imgbox.width() - h_w
			}
			if(moveY > imgbox.height() - h_h) {
				moveY = imgbox.height() - h_h
			}
			//判断鼠标使其不跑出图片框
			var zoomX = showbox.width() / imgbox.width()
			//求图片比例
			var zoomY = showbox.height() / imgbox.height()

			showbox.css({
				left: -(moveX * zoomX),
				top: -(moveY * zoomY)
			})
			hoverbox.css({
				left: moveX,
				top: moveY
			})
			//确定位置

		}

		function Zoomhover(imgbox, hoverbox, showbox) {
			var l = imgbox.offset().left;
			var t = imgbox.offset().top;
			var w = hoverbox.width();
			var h = hoverbox.height();
			var time;
			$(".probox img,.hoverbox").mouseover(function(e) {
				var x = e.pageX;
				var y = e.pageY;
				$(".hoverbox,.showbox").show();
				hoverbox.css("opacity", "0.3")
				time = setTimeout(function() {
					Zoom(imgbox, hoverbox, l, t, x, y, w, h, showbox)
				}, 1)
			}).mousemove(function(e) {
				var x = e.pageX;
				var y = e.pageY;
				time = setTimeout(function() {
					Zoom(imgbox, hoverbox, l, t, x, y, w, h, showbox)
				}, 1)
			}).mouseout(function() {
				showbox.parent().hide()
				hoverbox.hide();
			})
		}
		$(function() {
			Zoomhover($(".probox img"), $(".hoverbox"), $(".showbox img"));
			$(".box-lh-one ul li").hover(function() {
				$('.img1').attr("src", $(this).find('img').attr('src'));
			})
		})
		//我的京东显示隐藏
$(".zjxs").mouseover(function () {
	$(".header_wdjd").css("display","block");
}).mouseout(function(){
	$(".header_wdjd").css("display","none");
	
})

//手机京东显示隐藏
$(".sjxs").hover(function () {
	$(".header_sjjd").toggle();
})

//关注京东显示隐藏
$(".gzxs").hover(function () {
	$(".header_gzjd").toggle();
})

//关注京东显示隐藏
$(".khxs").hover(function () {
	$(".header_khfw").toggle();
})

//网站导航显示隐藏
$(".wzxs").hover(function () {
	$(".header_wzdh").toggle();
})

$(".header_ul_left>.glyphicon-map-marker").mouseover(function(){
	$(this).children("#beijing").show();
}).mouseout(function(){
	$(this).children("#beijing").hide();
})
$(".header_ul_right>.jingdong").mouseover(function(){
	$(this).children(".jingdong_ol").show();
}).mouseout(function(){
	$(this).children(".jingdong_ol").hide();
})
$(".header_ul_right>.fuwu").mouseover(function(){
	$(this).children(".fuwu_ol").show();
}).mouseout(function(){
	$(this).children(".fuwu_ol").hide();
})
$(".header_ul_right>.daohang").mouseover(function(){
	$(this).children(".daohang_ol").show();
}).mouseout(function(){
	$(this).children(".daohang_ol").hide();
})

$('.nav_top_three').mouseover(function(){
	$('.gouwuchexiaguo').css('display','block')
}).mouseout(function(){
	$('.gouwuchexiaguo').css('display','none')
})

 $('.aaa').on('click',function(){
            $('html,body').animate({//$('html,body')兼容问题body属于chrome
                scrollTop:0
            })
        });
    })


