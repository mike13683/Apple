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


    var heroController = new ScrollMagic.Controller()

    var heroScene = new ScrollMagic.Scene({
        triggerElement: ".hero__content img",
        duration: "80%",
        triggerHook: 0.3
    })

        .setPin(".hero__content")
        // .setTween(gsap.fromTo(".hero__content-j, {top:0}, {top:100}"))

        .addTo(heroController)



    var controller = new ScrollMagic.Controller()

    var scene = new ScrollMagic.Scene({
        triggerElement: ".hero",
        triggerHook: "0.5",
        offset: "540"
    })

        .setTween(gsap.to(".hero__content-colour-change p, h1", {color:"#343A40"}))

        .addTo(controller)


    var sampleController = new ScrollMagic.Controller();

    var tlSample = gsap.timeline();
    // tlSample.fromTo(".samples", {autoAlpha:0, y:-50}, {autoAlpha:1, y:0 , duration:5})
    // tlSample.fromTo(".samples", { autoAlpha:1}, {autoAlpha:0, duration:1})



    var sampleScene = new ScrollMagic.Scene({
        triggerElement: ".foo",
        // duration: "60%",
        // triggerHook:0.7
    })

        .setClassToggle(".foo", ".foo-fade")
        // .setTween(tlSample)
        // .setPin(".samples")

        .addTo(sampleController)

});



