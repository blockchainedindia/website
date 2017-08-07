/**
 * Created by Anirudha on 07/08/17.
 */

function mainBannerScroll(scroll) {
    $('.elm1').css({
        'transform' : 'translate(0px, -'+ scroll/2 +'%)',
        'transform' : 'rotate(' + scroll/2 +'deg)'
    });
}

$(document).ready(function() {
    $(window).scroll(function() {
        var wScroll = $(this).scrollTop();
        mainBannerScroll(wScroll);
    });
});
