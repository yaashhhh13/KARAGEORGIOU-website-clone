document.querySelector("#page1 img").addEventListener("mousemove",function(dets){
    document.querySelector("#marrow").style.top = dets.y + "px";
    document.querySelector("#marrow").style.left = dets.x + "px";
    // console.log("hey")
})
gsap.to("#page1>h1",{
    top: "35%",
    filter: "blur(0px)",
    duration: .5
})
gsap.to("#page1>img",{
    top: "10%",
    duration: .7,
    delay: 1
})
gsap.to("#page1>h1",{
    color: "white",
    duration: .002 ,
    delay: 1        
})
gsap.from("#page1>h1",{
    scrollTrigger:{
        trigger: "#page1>h1",
        // scroller: "body",
        // markers: true,
        start: "top 40%",
        end: "bottom 10%",
        scrub: 3,
    },
    top: "50%",
    duration: 1
})
gsap.to("#page2>h1",{
    scrollTrigger:{
        trigger: "#page2>h1",
        // scroller: "body",
        // markers: true,
        start: "top 85%",
        end: "bottom 10%",
        scrub: 3,
    },
    // top: "8%",
    y:"-150px",
    duration: .5
})
gsap.to("#p2img2",{
    scrollTrigger:{
        trigger: "#p2img2",
        // markers: true,
        start: "top 100%",
        end: "bottom 10%",
        scrub: 3,
    },
    top: "5%"
})
gsap.to("#p2img1",{
    scrollTrigger:{
        trigger: "#p2img1",
        // markers: true,
        start: "top 130%",
        end: "bottom 10%",
        scrub: 3,
    },
    top: "15%"
})
gsap.to("#p2img3",{
    scrollTrigger:{
        trigger: "#p2img3",
        // markers: true,
        start: "top 120%",
        end: "bottom 10%",
        scrub: 3,
    },
    top: "15%"
})
gsap.to("#p2img4",{
    scrollTrigger:{
        trigger: "#p2img4",
        // markers: true,
        start: "top 140%",
        end: "bottom 10%",
        scrub: 3,
    },
    top: "25%"
})
gsap.to("#page2>p",{
    scrollTrigger:{
        trigger: "#page2>p",
        // markers: true,
        start: "top 140%",
        end: "bottom 10%",
        scrub: 3,
    },
    top: "55%"
})
gsap.to("#page2>button",{
    scrollTrigger:{
        trigger: "#page2>button",
        // markers: true,
        start: "top 160%",
        end: "bottom 10%",
        scrub: 3,
    },
    top: "65%"
})
gsap.to("#page2>h2",{
    scrollTrigger:{
        trigger: "#page2>h2",
        // markers: true,
        start: "top 180%",
        end: "bottom 10%",
        scrub: 3,
    },
    top: "80%"
})
var click = 0
document.querySelector("#p3i2").addEventListener("click",function(){
    if(click == 0){
        gsap.to("#item",{
            x:"-70%"
        }),
        click = 1
    }
    else if(click == 1){
        gsap.to("#item",{
            x:"-160%"
        })
        click = 0
    }
    document.querySelector("#items #item:nth-child(5)").style.right= "140px"
})
var click2 = 2
document.querySelector("#p3i1").addEventListener("click",function(){
    if(click2 == 2){
        gsap.to("#item",{
            x:"10%"
        })
    }
    document.querySelector("#items #item:nth-child(5)").style.right= "0px"
})
gsap.to("#page4>img",{
    scrollTrigger:{
        trigger: "#page4>img",
        // markers: true,
        start: "top 240%",
        end: "bottom 10%",
        scrub: 3,
    },
    y: "-450px"
})
gsap.to("#page5>h1",{
    scrollTrigger:{
        trigger: "#page5>h1",
        // markers: true,
        start: "top 270%",
        end: "bottom 10%",
        scrub: 3
    },
    top: "-100px"
})

gsap.to("#p5img1",{
    scrollTrigger:{
        trigger: "#p5img1",
        // markers: true,
        start: "top 280%",
        end: "bottom 10%",
        scrub: 3
    },
    top: "-100px"
})
gsap.to("#p5img2",{
    scrollTrigger:{
        trigger: "#p5img2",
        // markers: true,
        start: "top 290%",
        end: "bottom 10%",
        scrub: 3
    },
    // top: "-12%"
    y: "-150px"
})

gsap.to("#p5img3",{
    scrollTrigger:{
        trigger: "#p5img3",
        // markers: true,
        start: "top 240%",
        end: "bottom 10%",
        scrub: 3
    },
    top: "28%"
})

gsap.to("#page5>p",{
    scrollTrigger:{
        trigger: "#page5>p",
        // markers: true,
        start: "top 260%",
        end: "bottom 10%",
        scrub: 3
    },
    top: "45%"
})

gsap.to("#page5>button",{
    scrollTrigger:{
        trigger: "#page5>button",
        // markers: true,
        start: "top 280%",
        end: "bottom 10%",
        scrub: 3
    },
    top: "70%"
})

gsap.to("#page6>img",{
    scrollTrigger:{
        trigger: "#page6>img",
        // markers: true,
        start: "top 200%",
        end: "bottom 10%",
        scrub: 3
    },
    // top: "-30%"
    y: "-220px"
})
gsap.to("#page6>p",{
    scrollTrigger:{
        trigger: "#page6>p",
        // markers: true,
        start: "top 200%",
        end: "bottom 10%",
        scrub: 3
    },
    // top: "-30%"
    y: "-130px"
})

