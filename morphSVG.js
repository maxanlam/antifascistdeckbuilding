gsap.registerPlugin(ScrollTrigger);

gsap.fromTo("#letters",
    { strokeWidth: 12.078 },      
    {
        strokeWidth: 0,           
        ease: "none",
        scrollTrigger: {
            scroller: "#content",
            start: 0,
            end: 100,
            scrub: true
        }
    }
);