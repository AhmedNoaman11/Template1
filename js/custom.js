/* start */
$(function () {
    // wow inite method
    new WOW().init();

});


$(function () {
    $('#work').magnificPopup(
        {
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        },
    });

});


$(function () {
    $("#team-members").owlCarousel({
        item: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            // breakpoint from 0 up
            0:

            {
                items: 1,


            },
            // breakpoint from 480 up
            480:

            {
                items: 1,


            },
            // breakpoint from 768 up
            768: {
                items: 2,


            },
            992: {
                items: 3
            }
        }
    });
});

$(function () {
    $("#customers-testimonals").owlCarousel({
        items: 1,
        loop: true,
        center: true,
        autoplay: true,
        autoplayHoverPause: true,
        smartSpeed: 700

    });
});


$(function () 
{
    $('.counter').counterUp({
        delay: 50,
        time: 2000
    });
}
);


$(function ()
 {
    $("#clients-list").owlCarousel(
        {
        items: 6,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive:
        {
            // breakpoint from 0 up
            0:
             
            {
                items: 1,
                
                
            },
            // breakpoint from 480 up
            480:
             
            {
                items: 3,
                
                
            },
            // breakpoint from 768 up
            768: 
            {
                items: 4,
                
                
            },
            992:
            {
                items: 6
            }
        }

    });
});


$(function()
{
    $("a.smoth-scroll").click(function(event)
    {
        event.preventDefault();
        var x =$(this).attr("href");

        $("html,body").animate({
            scrollTop:$(x).offset().top
        },1250)
        
    });
});


$(function()
{
    $(window).scroll(function()
    {
        if($(this).scrollTop()>300)
        {
            $("#back-to-top").fadeIn();
        }
        else
        {
            $("#back-to-top").fadeOut();

        }

    });
});

$(function () {
    $(".navbar-collapse ul li a").on("click touch", function ()
    {
        
        $(".navbar-toggle").click();
    });
});

















