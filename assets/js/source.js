$(document).ready(function(){

    $(".owl-carousel").owlCarousel({
        dotsContainer: ".carousel-buttons",
        loop: true,
        margin: 10,
        // navText: ["",">"],
        autoplay: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            }
        }
    })


//     var heroController = new ScrollMagic.Controller()
//
//     var heroScene = new ScrollMagic.Scene({
//         triggerElement: ".hero__content-js",
//         // duration: "100",
//         triggerHook: 0.3
//     })
//
//         // .setPin(".hero__content-js")
//         .setTween(gsap.fromTo(".hero__content-j, {top:0}, {top:100}"))
//         .addIndicators({
//             name: "pin hero"
//         })
//         .addTo(heroController)


    // var sampleController = new ScrollMagic.Controller();
    //
    // var tlSample = gsap.timeline();
    // tlSample.fromTo(".samples", {autoAlpha:0, y:-125}, {autoAlpha:1, y:0, duration: 0.5})
    // tlSample.fromTo(".samples", { autoAlpha:1}, {autoAlpha:0})
    //
    //
    //
    // var sampleScene = new ScrollMagic.Scene({
    //     triggerElement: ".samples",
    //     duration: "350",
    //     triggerHook:0.7
    // })
    //
    //     .setTween(tlSample)
    //     .setPin(".samples")
    //     .addIndicators({
    //         name: "sample"
    //     })
    //     .addTo(sampleController)
//
});



