//Horizontal scroll

gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".panel");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container4",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),

     // base vertical scrolling on how wide the container is so it feels more natural.
    end: () => "+=" + document.querySelector(".container4").offsetWidth
  }
});

