gsap.from(".navigation", { duration: 1, y: "-100%" });
gsap.from(".redfrog", { duration: 1, y: "-100%", x: "100%" });
gsap.from(".smokefrog", { duration: 1, y: "100%", x: "100%" });
gsap.from(".rocketfrog", { duration: 1, y: "-100%", x: "-100%" });
gsap.from(".bluefrog", { duration: 1, y: "100%", x: "-100%" });
gsap.from(".bigfrog", { duration: 0.5, y: "100%" });

// timeline.to(".bigfrog",3,{y:-600}).to(".introFrog",{y:-400},"-=3").fromto(".introBg",{ y: -50 }, { y: 0, duration: 10 }, "-=10");

let controller1 = new ScrollMagic.Controller();
let timeline1 = new TimelineMax();

timeline1
  .to(".bigfrog", 10, { y: -300 })
  .to(".introFrog", 10, { y: -200 }, "-=10")
  .fromTo(".introBg", { y: -50 }, { y: 0, duration: 10 }, "-=10")
  .to(".content", 8, { top: "0%" }, "-=10")
  
let scene1 = new ScrollMagic.Scene({
  triggerElement: "section",
  duration: "300%",
  triggerHook: 0,
})
  .setTween(timeline1)
  .setPin("section")
  .addTo(controller1);
