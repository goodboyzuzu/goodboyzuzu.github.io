gsap.from(".navigation", { duration: 1, y: "-100%" });
gsap.from(".redfrog", { duration: 1, y: "-100%", x: "100%" });
gsap.from(".smokefrog", { duration: 1, y: "100%", x: "100%" });
gsap.from(".rocketfrog", { duration: 1, y: "-100%", x: "-100%" });
gsap.from(".bluefrog", { duration: 1, y: "100%", x: "-100%" });
gsap.from(".bigfrog", { duration: 0.5, y: "100%" });

// timeline.to(".bigfrog",3,{y:-600}).to(".introFrog",{y:-400},"-=3").fromto(".introBg",{ y: -50 }, { y: 0, duration: 10 }, "-=10");

let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
  .to(".bigfrog", 10, { y: -300 })
  .to(".introFrog", 10, { y: -200 }, "-=10")
  .fromTo(".introBg", { y: -50 }, { y: 0, duration: 10 }, "-=10")
  .fromTo(".content-images", { opacity: 0 }, { opacity: 1, duration: 3 })
  .to(".content", 10, { top: "-40" }, "-=10")
  .fromTo(".text", { opacity: 0 }, { opacity: 1, duration: 3 })
  .fromTo(".introFrog", { opacity: 1 }, { opacity: 0, duration: 3 },"-=10")
  .fromTo(".bigfrog", { opacity: 1 }, { opacity: 0, duration: 3 },"-=10")
  .fromTo(".navigation", { opacity: 1 }, { opacity: 0, duration: 3 },"-=10");

let scene = new ScrollMagic.Scene({
  triggerElement: "section",
  duration: "300%",
  triggerHook: 0,
})
  .setTween(timeline)
  .setPin("section")
  .addTo(controller);
