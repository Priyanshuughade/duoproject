function init(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}

init();


var cursor=document.querySelector("#cursor")
var main = document.querySelector("#main")

document.addEventListener("mousemove",function(dets){
cursor.style.left = dets.x + 20 + "px"
cursor.style.top = dets.y + 20 + "px"
})




gsap.from("#page1 h1,h2",{
    rotate:10,
    y:100,
    opacity:0,
    duration:1,
delay:1,
})

var tl= gsap.timeline({
    scrollTrigger:{
trigger:"#page1 h1",
scroller:"#main",
start:"top 27%",
end:"top 0%",
scrub:3,
    }
})

tl.to("#page1 h1",{
    x:-50,
   
},"anim")
tl.to("#page1 h2",{
    x:50,
   
},"anim")

tl.to("#page1 video",{
   width:"80%",
  
},"anim")

var tl2= gsap.timeline({
  scrollTrigger:{
trigger:"#page1 h1",
scroller:"#main",
start:"top -115%",
end:"top -120%",
scrub:3,
  }
})

tl2.to("#main",{
  backgroundColor:"#fff"
})

var tl3= gsap.timeline({
  scrollTrigger:{
trigger:"#page1 h1",
scroller:"#main",
start:"top -280%",
end:"top -290%",
scrub:2,
  }
})

tl3.from("#page3 #page3-part2 h1",{
  rotate:10,
  y:100,
  opacity:0,

})

var tl4= gsap.timeline({
  scrollTrigger:{
trigger:"#page1 h1",
scroller:"#main",
start:"top -340%",
end:"top -350%",
scrub:2,
  }
})

tl4.to("#main",{
  backgroundColor:" #0F0D0D"
})


var boxes=document.querySelectorAll(".box")
boxes.forEach(function(elem){
elem.addEventListener("mouseenter",function(){
  var att = elem.getAttribute("data-image")
  cursor.style.height="300px"
  cursor.style.width="350px"
  cursor.style.borderRadius="0"
  cursor.style.backgroundImage=`url(${att})`
})
elem.addEventListener("mouseleave",function(){
  var att = elem.getAttribute("data-image")
  cursor.style.height="20px"
  cursor.style.width="20px"
  cursor.style.borderRadius="50%"
  cursor.style.backgroundImage=`none`
})
})


var h4 = document.querySelectorAll("#nav h4")
var purple= document.querySelector("#purple")

h4.forEach(function(elem){
elem.addEventListener("mouseenter",function(){
  purple.style.display="block"
  purple.style.opacity="1"
})
elem.addEventListener("mouseleave",function(){
  purple.style.display="none"
  purple.style.opacity="0"
})
})