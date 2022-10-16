gsap.registerPlugin(ScrollTrigger);

function openMenu() {
  console.log("ABRE MENU");
}

function closeMenu() {
  console.log("FECHA MENU");
}

function intro() {
  const tl = gsap.timeline();
  tl.to("#splashScreen", { x: "-100vw", duration: 0.7, ease: "expo" })
    .to("#splashScreen", { display: "none" })
    .fromTo("main", { opacity: 0 }, { opacity: 1 });
}

function main() {
  const tl = gsap.timeline({ defaults: { duration: 2, ease: "expo" } });
  tl.from("h1", { y: 20, opacity: 0 })
    .from(
      "#section-main img",
      {
        scale: 0.8,
      },
      0
    )
    .fromTo(
      "#section-main",
      { scale: 1 },
      {
        scale: 1.1,
        scrollTrigger: {
          trigger: "#section-main",
          start: "15% 10%",
          end: "bottom -100%",
          scrub: 1.5,
        },
      }
    )
    .fromTo(
      "#section-main img",
      { scale: 1 },
      {
        scale: 1.2,
        y: 50,
        scrollTrigger: {
          trigger: "#section-main",
          start: "20% 20%",
          end: "bottom -100%",
          scrub: 1.5,
        },
      }
    );
}

function collectionBanner() {
  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#collectionBanner",
      start: "top 60%",
      end: "bottom top",
    },
  });

  tl2.fromTo("#collectionBanner", { opacity: 0 }, { opacity: 1 });
}

window.addEventListener("load", () => {
  setTimeout(() => {
    intro();
  }, 1000);
});

const masterTl = gsap.timeline();
masterTl.add(main).add(collectionBanner);
