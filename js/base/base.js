$(document).ready(function(){

    (function(d, w, c) {
        var s = d.createElement('script');
        w[c] = w[c] || function() {
            (w[c].z = w[c].z || []).push(arguments);
        };
        s.async = true;
        s.src = 'https://static.ahc.ink/hecong.js';
        if (d.head) d.head.appendChild(s);
    })(document, window, '_AIHECONG');
    _AIHECONG('ini',{ channelId : '7xSu2W',button : false });

    $("#consult").on("click",function () {
        _AIHECONG('showChat');
    })

    $("#contact1").on("click",function () {
        _AIHECONG('showChat');
    })

    $('.back-top', '.advisory-list').click(function(){
        $("body,html").animate({scrollTop: 0}, 800);
    })

    var _hmt = _hmt || [];
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?c22885830d4f5f8f868c2bfbf97e5035";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);

    var downEl=$(".baishu .header .navbar .container .navbar-collapse .navbar-nav li .header-dropdown");
    if(window.innerWidth<=768){
        downEl.on("click",function () {
            if(downEl.hasClass('mopen')){
                downEl.removeClass("mopen");
            }else{
                downEl.addClass("mopen");
            }
        })
    }else{
        downEl[0].onmouseover=function () {
            downEl.addClass("open");
        };
        downEl[0].onmouseout=function () {
            downEl.removeClass("open");
        };
    }
    var wTop=$(document).scrollTop();
    if(10<=wTop){
        $('.baishu .header .navbar').css('box-shadow', '0 0.125rem 0.5rem 0 rgba(0,0,0,.06)');
    }else{
        $('.baishu .header .navbar').css('box-shadow','none');
    }
    $(window).bind('scroll',function(){//开始监听滚动条
        var wTop=$(document).scrollTop();
        if(10<=wTop){
            $('.baishu .header .navbar').css('box-shadow', '0 0.125rem 0.5rem 0 rgba(0,0,0,.06)');
        }else{
            $('.baishu .header .navbar').css('box-shadow','none');
        }
    });
    var iframeEl=$('<iframe frameBorder="no" scrolling="no" noResize="no" width="100%" height="100%" src="https://openai.weixin.qq.com/webapp/OG9etcNKtP2z5PkqItdN7FSu279rWC?robotName=百数·售前">').clone(true);
    $(".baishu .advisory-box").on("click",function () {
        if($(".baishu .advisory-content").hasClass("active")){
            $(".baishu .advisory-content").removeClass("active");
            $("#iframeBox").empty();
        }else{
            setTimeout(function () {
                $("#iframeBox").append(iframeEl);
            },1000)
            $(".baishu .advisory-content").addClass("active");
        }
    })
    $(".baishu .advisory-content .bs-icon-iconxiaohaoguanbi").on("click",function () {
        $(".baishu .advisory-content").removeClass("active");
        $("#iframeBox").empty();
    });
    var div = document.getElementById('advisory-box');
    var startX = 0; // 获取手指初始坐标
    var startY = 0;
    var x = 0; // 获得盒子原来的位置
    var y = 0;
    // 手指触摸
    div.addEventListener('touchstart', function(e) {
        // 获取手指初始坐标
        startX = e.targetTouches[0].pageX;
        startY = e.targetTouches[0].pageY;
        x = this.offsetLeft;
        y = this.offsetTop;
        this.style.boxShadow = '0 0.125rem 0.875rem 0 rgba(2,101,255,0.4)';
    });
    // 手指离开
    div.addEventListener('touchend', function(e) {
        this.style.boxShadow = '';
    });

    // 手指按住移动
    div.addEventListener('touchmove', function(e) {
        // 计算手指的移动距离：手指移动之后的坐标减去手指初始的坐标
        var moveX = e.targetTouches[0].pageX - startX;
        var moveY = e.targetTouches[0].pageY - startY;
        // 移动盒子 盒子原来的位置 + 手指移动的距离
        this.style.left = x + moveX + 'px';
        this.style.top = y + moveY + 'px';
        e.preventDefault(); // 阻止屏幕滚动的默认行为
    });

    $('html .baishu .header .navbar .container .navbar-header .navbar-toggle').on('click',function () {
        if($('html').hasClass('isHidden')){
            $('html').removeClass('isHidden')
        }else{
            $('html').addClass('isHidden')
        }
    })
    setTimeout(function () {
        $('#maodian')[0].scrollIntoView(false);
    },200)
});