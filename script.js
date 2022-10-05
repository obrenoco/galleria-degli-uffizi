gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
  let tlSection1 = gsap.timeline({ defaults: { duration: 2, ease: "expo" } });
  tlSection1
    .from("h1", { y: 20, opacity: 0 })
    .from(
      "img",
      {
        opacity: 0,
        scale: 0.8,
      },
      0
    )
    .fromTo(
      "#section-1",
      { scale: 1 },
      {
        scale: 1.1,
        opacity: 0,
        scrollTrigger: {
          trigger: "#section-1",
          start: "15% 10%",
          markers: true,
          end: "bottom -100%",
          scrub: 1.5,
        },
      }
    )
    .fromTo(
      "img",
      { scale: 1 },
      {
        scale: 1.2,
        opacity: 0,
        scrollTrigger: {
          trigger: "#section-1",
          markers: true,
          start: "15% 10%",
          end: "bottom -100%",
          scrub: 1.5,
        },
      }
    );
});
