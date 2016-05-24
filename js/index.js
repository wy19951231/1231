function aclose(){
    document.getElementById("topbanner").style.display="none";
}

function showpic(li){
    var pic=li.getElementsByTagName("ul")[0];
    pic.style.display="block";
}
function hidepic(li){
    var pic=li.getElementsByTagName("ul")[0];
    pic.style.display="none";
}

$(function(){
    $(".diary-year").addClass("close");
    $(".diary-year").last().removeClass("close");
    $(".diary-main .diary-year .diary-list").each(function (e, target) {
        var $target=  $(target),
            $ul = $target.find("ul");
        $target.height($ul.outerHeight()), $ul.css("position", "absolute");
    });

    $(".diary-main .diary-year>.years>a").click(function (e) {
        e.preventDefault();
        $(this).parents(".diary-year").toggleClass("close")
    });
})

/*window.onload = function()
    {
        var tag = document.getElementById("#aboutme").children();
        var content=document.getElementById("tagContent").children();
        content[0].style.display = "block";
        tag[0].className="current";
        var len= tag.length;
        for(var i=0; i<len; i++)
        {
            tag[i].index=i;
            tag[i].onclick = function()
            {
                for(var n=0; n<len; n++)
                {
                    tag[n].className="";
                    content[n].style.display="none";
                }
                tag[this.index].className = "current";
                content[this.index].style.display = "block";
            }
        }
    }
$(function(){
    $(".lifecon1 .life-pic").mouseenter(function(){
        n=$(this).index();
        $(".lifecon1 .life-pic li").eq(n-1).slideDown(100);
    })
    $(".lifecon1 .life-pic").mouseleave(function(){
        n=$(this).index();
        $(".lifecon1 .life-pic li").eq(n-1).slideUp(100);
    })
    $(".lifecon2 .life-pic").mouseenter(function(){
        n=$(this).index();
        $(".lifecon2 .life-pic li").eq(n-1).slideDown(100);
    })
    $(".lifecon2 .life-pic").mouseleave(function(){
        n=$(this).index();
        $(".lifecon2 .life-pic li").eq(n-1).slideUp(100);
    })
    $(".lifecon3 .life-pic").mouseenter(function(){
        n=$(this).index();
        $(".lifecon3 .life-pic li").eq(n-1).slideDown(100);
    })
    $(".lifecon3 .life-pic").mouseleave(function(){
        n=$(this).index();
        $(".lifecon3 .life-pic li").eq(n-1).slideUp(100);
    })
    $(".lifecon4 .life-pic").mouseenter(function(){
        n=$(this).index();
        $(".lifecon4 .life-pic li").eq(n-1).slideDown(100);
    })
    $(".lifecon4 .life-pic").mouseleave(function(){
        n=$(this).index();
        $(".lifecon4 .life-pic li").eq(n-1).slideUp(100);
    })
    $(".lifecon5 .life-pic").mouseenter(function(){
        n=$(this).index();
        $(".lifecon5 .life-pic li").eq(n-1).slideDown(100);
    })
    $(".lifecon5 .life-pic").mouseleave(function(){
        n=$(this).index();
        $(".lifecon5 .life-pic li").eq(n-1).slideUp(100);
    })
})*/

$(function(){
    $(window).scroll(function() {
        if($(window).scrollTop() >= 100){
            $('#totop').fadeIn(300);
        }else{
            $('#totop').fadeOut(300);
        }
    });
    $('#totop').click(function(){
        $('html,body').animate({scrollTop: '0px'}, 1000);
    });
});