//Horizontal scroll

gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".panel");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),

     // base vertical scrolling on how wide the container is so it feels more natural.
    end: () => "+=" + document.querySelector(".container").offsetWidth
  }
});



//LAYOUT


// gsap.set(".menu", {y: '10vw'})


gsap.set("#CircleWhite", {x:'22vw', y:'10vw', scale: 4.2 })

gsap.set("#Tri1", { rotation: 270, scaleX: 3.2, scaleY: 0.8, x:'80vw', y:'20vw' })
gsap.set("#Tri2", { rotation: 120, scaleX: 2, scaleY: 1, x:'70vw', y:'17vw' })
gsap.set("#Tri5", { rotation: 200, scaleX: 0.7, scaleY: 0.5, x:'64vw', y:'12vw' })
gsap.set("#Tri3", { rotation: 345, scaleX: 3, scaleY: 1.5, x:'45vw', y:'31vw' })
gsap.set("#Tri4", { rotation: 45, scaleX: 5, scaleY: 2.5, x:'40vw', y:'13vw' })

gsap.set("#Rect1", { rotation: 350, scaleX: 3.5, scaleY: 0.5, x:'38vw', y:'3vw' })
gsap.set("#Rect2", { rotation: 0, scaleX: 0.8, scaleY: 0.2, x: -25, y: -12 })
gsap.set("#Rect3", { rotation: 45, scaleX: 2.5, scaleY: 0.5, x:'16vw', y:'17vw' })
gsap.set("#Rect4", { scaleX: 1, scaleY: 0.5, x: 25, y: -100 })
gsap.set("#Rect5", { scaleX: 1, scaleY: 0.5, x: 45, y: 40 })

gsap.set("#Orquesta", { rotation: 270, x: -65, y: -220})
gsap.set("#Filarmonica", { x: 250})
gsap.set("#Merchandising", { rotation: 90, x: -15, y:-100, scaleY: 0.3125, scaleX: 1.25 })
gsap.set("#Conciertos", { rotation: 0, x: 35, y:100, scaleY: 2, scaleX: 0.285 })
gsap.set("#Nosotros", {  x: 20, y:-40, scaleY: 0.4, scaleX: 0.2, rotation: 360, })
gsap.set("#Amigos", {  x: -20, y:-60, scaleY: 0.66, scaleX: 0.33, })



gsap.from ("#play, .playtriangle" , {
  duration: 1, 
  y: 10, 
  opacity:0,
  stagger: 0.2,
  delay: 1,
  
});

gsap.from ("#Orquesta" , {
  duration: 1, 
  x: 10, 
  opacity:0,
  delay: 0,
  
});

gsap.from ("#Filarmonica" , {
  duration: 1, 
  y: 20, 
  opacity:0,
  delay: 0.2,
  
});




//INTRO ANIMATION

var thisTrack = document.getElementById('music');

var timeline = gsap.timeline({paused: true});

timeline.to ("#play, .playtriangle" , {duration: 0.5, opacity:0, y: -10, stagger: 0.2,});
timeline.to("#Tri4", {  duration: 0.2, x:'27vw', y:'3vw', ease: "elastic.inOut(2,1)", yoyo: true, repeat: 1}, 0.65);
timeline.to("#Tri1", { duration: 0.2, y:'30vw', ease: "elastic.inOut(2,1)", yoyo: true, repeat: 1}, "+=0.6");
timeline.to("#Rect3", { duration: 0.2, x:'12vw', y:'12vw', ease: "elastic.inOut(2,1)", yoyo: true, repeat: 1,}, "<");
timeline.to("#CircleWhite", { duration: 0.4, scale: 5.5, ease: "elastic.inOut(1.75,0.3)", yoyo: true, repeat: 1}, "+=0.6");
timeline.to("#hamburger", { duration: 0.4, scale: 1.5, ease: "elastic.inOut(1.75,0.3)", yoyo: true, repeat: 1}, "-=0.7>");
timeline.to("#Rect1", { duration: 0.2, x:'46vw', y:'2vw', ease: "elastic.inOut(2,1)", yoyo: true, repeat: 1}, "-=0.2" );
timeline.to("#Tri3", { duration: 0.2,  x:'38vw', y:'33vw', ease: "elastic.inOut(2,1)", yoyo: true, repeat: 1 }, "<")
timeline.to ("#play, .playtriangle" , {duration: 0.5, opacity:1, y: 0, stagger: 0.2,}, "+=0.5");

















// MUSIC PLAYER



// document.querySelector("#play").onclick = () => timeline.reverse();

thisTrack.onplay = function() {
 
	
};

function playAudio(){
  
  thisTrack.play();
  // timeline.play();
  timeline.restart();
}