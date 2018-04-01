function backtopDisplay() {
    let $backtop = $('.backtop');
    let $WinH = $(window).height();
    let $curTop = $(this).scrollTop();
    if ($curTop - $WinH >= -400) {
        $backtop.show();
    } else {
        $backtop.hide();
    }
}

//切换城市 显示/隐藏

$('.suggest em').click(function () {
    $('.cboxOver').show();
    $('.colorBox').show();
});
$('.cboxOver').click(function () {
    $(this).hide();
    $('.colorBox').hide();
});
$('.cboxClose').click(function () {
    $('.cboxOver').hide();
    $('.colorBox').hide();
});

//切换城市
$('.changeCityBox li a').click(function () {
    let data = $(this).html();
    $(this).html($('.checkTips a').html());
    $('.checkTips a').html(data);
    $('.suggest strong').html(data);
    $('.cboxOver').hide();
    $('.colorBox').hide();
})

//seach点击显示隐藏
$(document).click(function (e) {
    if (e.target == $('.seachInput')[0]) {
        $('.seachInput').css('border', '1px solid #00b38a');
        $('.pos-guss').show();
    } else {
        if (e.target.parentElement === $('.guss-wrapper ul')[0]) {
            $('.seachInput').val($(e.target).html());
        }
        $('.seachInput').css('border', '1px solid #e8e8e8');
        $('.pos-guss').hide();
    }
})

//swiper 轮播图
let mySwiper = new Swiper('.swiper-container', {
    // direction: 'vertical',
    loop: true,
    autoplay: true,
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    on: {
        click: function () {
            this.autoplay.start();
        }
    },
    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

})

//job 点击切换
$('.job_tab').children('li').click(function () {
    let index = $(this).index();
    $(this).addClass('current').siblings().removeClass('current').parent().next().children('ul').eq(index).addClass('disp').siblings().removeClass('disp');
})

//友情链接展开/收起
$('.exp').click(function () {
    if ($(this).text() === '收起') {
        $(this).html('展开<i></i>');
        $('.linkbox').addClass('show');
    } else {
        $(this).html('收起<i class="i-up"></i>');
        $('.linkbox').removeClass('show');
    }
})

//backtop 加载
$(window).load(() => {
    backtopDisplay();
})

$(window).scroll(() => {
    backtopDisplay();
})

$('.backtop').click(() => {
    $('html,body').animate({
        scrollTop: 0
    }, 1000);
})