/*
$j(window).bind('scroll', function() {
    scrollAction();

    if($j(window).outerWidth() < 1260){
        var viewScrollLeft = $j(window).scrollLeft();
        $j("#cfmClHeader").css({left:-viewScrollLeft});
        $j("#all-menus").css({left:-viewScrollLeft});
    }else{
        $j("#all-menus").css({left:0});
    }
});
*/

var keys = {32: 1, 33: 1, 34: 1, 35: 1, 36: 1, 37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault)
        e.preventDefault();
    e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

function disableScroll() {
    if (window.addEventListener) // older FF
        window.addEventListener('DOMMouseScroll', preventDefault, false);
    window.onwheel = preventDefault; // modern standard
    window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
    window.ontouchmove = preventDefault; // mobile
    document.onkeydown = preventDefaultForScrollKeys;
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null;
    window.onwheel = null;
    window.ontouchmove = null;
    document.onkeydown = null;
}


var set1 = $('.section01').offset().top;
var set2 = $('.section02').offset().top;
var set3 = $('.section03').offset().top;
var set4 = $('.section04').offset().top;
var set5 = $('.section05').offset().top;
var set6 = $('.section06').offset().top;
var set7 = $('.section07').offset().top;

// $html.animate({scrollTop: set6}, 600);

var num = 100;
var $win = $(window);
var $html = $('html, body');

var scrollFun = function (target) {
    $(window).one('scroll', function () {
        $html.animate({scrollTop: target}, 500);
    });
};

$win.on('scroll', function () {
    if (set1 <= $win.scrollTop() && $win.scrollTop() <= set1 + num) {
        console.log("go" + "set2");
        scrollFun(set2);
    } else if (set2 <= $win.scrollTop() && $win.scrollTop() <= set2 + num) {
        console.log("go" + "set3");
        scrollFun(set3);
    } else if (set3 <= $win.scrollTop() && $win.scrollTop() <= set3 + num) {
        console.log("go" + "set4");
        scrollFun(set4);
    } else if (set4 <= $win.scrollTop() && $win.scrollTop() <= set4 + num) {
        console.log("go" + "set5");
        scrollFun(set5);
    } else if (set5 <= $win.scrollTop() && $win.scrollTop() <= set5 + num) {
        console.log("go" + "set6");
        scrollFun(set6);
    } else if (set6 <= $win.scrollTop() && $win.scrollTop() <= set6 + num) {
        console.log("go" + "set7");
        scrollFun(set7);
    } else if (set7 <= $win.scrollTop() && $win.scrollTop() <= set7 + num) {
        // scrollFun(set2);
    }
});

