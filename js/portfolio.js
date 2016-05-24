//PORTFOLIO
	$('#portfolio li').hover(function(){
		$(this).children('img').stop().animate({
			width: 305,
			height: 193,
			marginLeft: -10,
			marginTop: -7
		});
		$(this).children('.mask').stop().show().animate({
			opacity: 0.84
		});
	}, function(){
		$(this).children('img').stop().animate({
			width: 285,
			height: 180,
			marginLeft: 0,
			marginTop: 0
		});
		$(this).children('.mask').stop().animate({
			opacity: 0
		});
	});

	window.onload=function(){
		//var oBtn1 = document.getElementById('portfolio');
		//var oBtn = oBtn1.getElementsByTagName('li');
		$('#portfolio li').click(function(){
			var sHeight = document.documentElement.scrollHeight;//获取页面高度
			var sWidth = document.documentElement.scrollWidth;

			var wHeight = document.documentElement.clientHeight;//获取可视区域的高度
			//如果页面是一个竖向的页面，可视区域的宽度和页面的宽度是一样的
			//alert(wHeight);
			// var oPort = document.getElementById('#portfolio');
			// var oPic = oPort.getElementsByTagName('li');

			var oMask1 = document.createElement('div');//创建节点
				oMask1.id = "mask1";
				oMask1.style.height = sHeight+"px";
				oMask1.style.width = sWidth+"px";
				document.body.appendChild(oMask1);//插入节点

			var oMask2 = document.createElement('div');
				oMask2.id="mask2";
				oMask2.innerHTML = "<div class='pic'><div id='close'></div></div>";
				document.body.appendChild(oMask2);
			// var	oPic = oMask2.getElementsByClassName('pic');
			// 	oPic[0].style.backgroundImage = "url(images/port-pic.jpg)";

			//怎样插入图片
			var dHeight = oMask2.offsetHeight;//获取弹层的高度
			var dWidth = oMask2.offsetWidth;
				oMask2.style.height = (wHeight-dHeight)/2+"px";
				oMask2.style.left = (sWidth-dWidth)/3*2+"px";
			var oClose = document.getElementById("close");
				oMask1.onclick = oClose.onclick = function(){
					document.body.removeChild(oMask1);
					document.body.removeChild(oMask2);
				}
		});
	}

	/*$('#portfolio').click(function(){
		$(this).children('.wrap').animate({
			opacity: 1
		})
	});*/

	/*$('#portfolio li').on('click', function(){
		lb.open({
			src: $(this).data('src'),
			width: $(this).data('width'),
			height: $(this).data('height')
		});
	});

	$('#btn').on('click', function(){
		$(this).animate({
			backgroundColor: 'rgb(0,0,255)'
		});
	});*/