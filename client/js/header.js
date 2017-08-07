/**
 * Created by Anirudha on 07/08/17.
 */

function mainBannerScroll(scroll) {
    $('.elm1').css({
        'transform' : 'translate(0px, -'+ scroll/2 +'%)',
        'transform' : 'rotate(' + scroll/2 +'deg)'
    });
}

//function itemsParallax(scroll) {
//    var $photoDiv = $('.item-pics');
//    var threshold = $photoDiv.offset().top - $(window).height();
//    if (scroll > threshold ) {
//        $('.item-pics figure').each(function(i) {
//            setTimeout(function() {
//                $('.item-pics figure').eq(i).addClass('is-showing');
//            }, 50 * (i + 1))
//        })
//    }
//}

//function windowParallax(scroll) {
//    var $target = $(".par-window");
//    var offset = $target.offset().top;
//    var threshold =  offset - $(window).height()
//    var opacity = (scroll - offset + 500) / (scroll/4)
//
//    if (scroll > threshold) {
//        console.log("ya")
//        $target.css({
//            'background-position':'center '+ (scroll/5 - offset) +'px'
//        })
//        $('.tint').css({
//            'opacity': opacity
//        })
//    }
//}


$(document).ready(function() {
    $(window).scroll(function() {
        var wScroll = $(this).scrollTop();
        // console.log(wScroll);
        mainBannerScroll(wScroll);
        //itemsParallax(wScroll);
        //windowParallax(wScroll);
    });
});

