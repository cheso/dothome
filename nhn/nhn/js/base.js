/**
 * Created by Administrator on 2015-01-07.
 */

$(function(){

    function pScroll(obj){
        if(!obj){
            $.scrollTo({
                top:0, left:0
            }, 500,{easing:"easeInOutQuint"});
        }else{
            var topPos =$(obj).offset().top - 60;
            $.scrollTo({
                top:topPos,
                left:0
            }, 500,{easing:"easeInOutQuint"});
        }
    }

    $("dd a").click( function(){
        var goPage = $(this).attr("href");
        pScroll(goPage);
        return false;
    });

    $(".hidden").on("click",function(e){
        $("#quick_menu").slideToggle();
        e.preventDefault();
    })
});