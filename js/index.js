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
//seach点击显示隐藏
$('.seachInput').focus(function () {
    $(this).css('border','1px solid #00b38a');
    $('.pos-guss').show();
    
})
$('.guss-wrapper li').click(function () {
    $('.seachInput').val($(this).html());
    $(this).css('border','1px solid #e8e8e8');
    $('.pos-guss').hide();
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
            // console.log(this);
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