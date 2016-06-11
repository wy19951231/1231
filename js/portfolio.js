//PORTFOLIO
	$('#portfolio li').hover(function(){
		$(this).children('img').stop().animate({
			width: 305,
			height: 193,
			marginLeft: -10,
			marginTop: -7
		});//在li上面设置hover事件是因为如果事件在img上设置事件
		//则会导致划入img，mask显示，显示之后就划入mask，则事件
		//结束，隐藏mask，再划入img，造成一种反复过程
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
	}).on('click',function(){
		console.log($(this).data('src'));//取img
	});

	$('#portfolio li').click(function(){
		var iWidth = this.getAttribute('data-width')>=600?600:this.getAttribute('data-width');
		var iHeight = this.getAttribute('data-height')*((this.getAttribute('data-width'))/iWidth);
		$mask = $('<div class="mask"></div>').appendTo(document.body);
		$close = $('<div class="cl"></div>').css({
			width:13,
			height:13,
			left:($(window).width() - iWidth)/2,
			top:($(window).height() - iHeight)/2
		}).appendTo(document.body);
		$div = $('<div class="lightbox-img"><div class="loading">loading</div></div>').css({
			width:iWidth,
			height:this.getAttribute('data-height'),
			left:($(window).width() - iWidth)/2,
			top:($(window).height() - iHeight)/2
		}).appendTo(document.body);
		var oImg = new Image();
		oImg.onload = function(){
			$div.children('.loading').hide();
			this.width = iWidth;
			$div.append(oImg);
		};
		oImg.src = this.getAttribute('data-src');
		$(".mask").click(function(){
			$mask.hide();
			$div.hide();
			$close.hide();
		});
		$(".cl").click(function(){
			$mask.hide();
			$div.hide();
			$close.hide();
		})
	});

