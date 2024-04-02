
//Navigation menu

var menuToggle = document.getElementById("menuToggle");

var menuBar = gsap.timeline();

menuBar.to('.bar-1', 0.5,{
  attr:{d: "M1,2 L9,8"},
  x:1,
  ease: Power2.easeInOut
}, 'start')

menuBar.to('.bar-2', 0.5,{
  attr:{d: "M1,8 L9,2"},
  x:1,
  ease: Power2.easeInOut
}, 'start')

menuBar.reverse();

var tl = gsap.timeline({ paused: true});

tl.to('.fullpage-menu', {
	duration:0,
	display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
	ease: "power4.out",
});

tl.from('.menu-bg span', {
	duration:2,
	x:"100%",
	stagger: 0.1,
	ease: "power3.out",
},"<");

tl.from('.main-menu li a', {
	duration:1.5,
	y:"100%",
	stagger: 0.2,
	ease: 'Expo.easeInOut'
} , "-=1");


tl.reverse();

menuToggle.addEventListener('click', function(){
	menuBar.reversed(!menuBar.reversed());
	tl.reversed(!tl.reversed());
});