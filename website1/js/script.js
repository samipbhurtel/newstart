$(document).ready(function(){
    $('button').on({
        mouseenter:function(){
            $(".leftside img").slideDown("slow");
            },
            mouseleave:function(){
            $(".leftside img").slideUp("slow");
            }

    // $("button").click(function(){
    //     $("h1 #span1").fadeIn();
    //     $("h1 #span2").fadeIn("slow");
    //     $("h1 #span3").fadeIn(3000);

        });
    });