// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Fade Up Elements
gsap.utils.toArray('.gsap-fade-up').forEach(elem => {
    gsap.from(elem, {
        scrollTrigger: {
            trigger: elem,
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
    });
});

// Staggered Cards
if(document.querySelector('.stagger-grid')) {
    gsap.from(".stagger-grid .card", {
        scrollTrigger: {
            trigger: ".stagger-grid",
            start: "top 75%"
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2
    });
}