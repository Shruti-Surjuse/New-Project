var swiper = new Swiper(".mySwiper", {
    effect: "cube",
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });

function fullscreen(){
    var tl=gsap.timeline();

    tl.to(".fs .cube",{
      width:"50%",
      height:"50%",
      ease:Expo.easeInOut,
      stagger:.1,
      duration:1, 
      delay:.2,
    })

    .to(".fs .cube",{
      width:"1px",
      height:"100%",
       ease:Expo.easeInOut,
       opacity:0.9,
       duration:.8,  
   })


   .to(".fs .cube",{
    width:"100%",
    height:"100%",
     ease:Expo.easeInOut,
     opacity:0.5,
     duration:5,
     delay:.4,  
 })


  
    .to(".fs .cube",{
        width:"100%",
        height:"100%",
        opacity:0.5,
        ease:Expo.easeInOut,
duration:2,
onComplete: function(){
    document.querySelector(".fs").style.display="none";
}
    })

}


  

gsap.from(".arrow-1",{
 y:-100,
 duration:2,
 delay:11.4,
opacity:0,
ease:Expo.easeInOut
})



gsap.from(".arrow",{
    y:100,
    stagger: .1,
 duration:2,
 delay:11.4,
opacity:0,
ease:Expo.easeInOut
})

gsap.from(".imggg-1",{
  x:100,
  stagger: .1,
duration:3,
delay:6,
opacity:1,
ease:Expo.easeInOut
})

gsap.from(".imggg",{
  x:-100,
  stagger: .1,
duration:3,
delay:6,
opacity:1,
ease:Expo.easeInOut
})

gsap.from("#outer",{
 duration:1.3,
 delay:5.8,
 stagger: .1,
opacity:0,
ease:Expo.easeInOut
})

// gsap.from(".ot",{
//   duration:2,
//   delay:5.8,
//   stagger: .1,
//  opacity:0,
//  ease:Expo.easeInOut
//  })

gsap.from("#naz",{
    y:100,
 duration:4,
 delay:9,
 stagger: .3,
opacity:0,
ease:Expo.easeInOut
})

gsap.from(".nav ",{
    y:-160,
 duration:1,
 delay:13,
opacity:0,
ease:Expo.easeInOut
})

gsap.to(".cube img", {
  stagger: 1,
  opacity:0,
  duration: .8 * 3,
  ease: Expo.easeInOut
})

gsap.from(".slogan ",{
    y:-160,
 duration:2,
 stagger: .1,
 delay:10.5,
opacity:0,
ease:Expo.easeInOut
})






fullscreen();
