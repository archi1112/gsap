var tl = gsap.timeline();
tl.from("#nav", {
  y: -100,
  duration: 1,
  opacity: 0,
  stagger: 0.5,
});
tl.from(".main h1", {
  y: 500,
  duration: 2,
  delay: 1,
  stagger: 0.2,
});
tl.from("#left-img,#top-right-img,#bottom-left-img,#right-img", {
  opacity: 0,
  duration: 3,
  stagger: 0.2,
});
