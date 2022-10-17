gsap.registerPlugin(ScrollTrigger);

function openMenu() {
  const tl = gsap.timeline();
  tl.to("#menu", { x: 0, duration: 0.7, ease: "expo" });
}

function closeMenu() {
  const tl = gsap.timeline();
  tl.to("#menu", { x: "-100%", duration: 0.7, ease: "expo" });
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
          toggleActions: "play reverse restart reverse",
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
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#collectionBanner",
      start: "top 60%",
      end: "bottom 20%",
      toggleActions: "play reverse restart reverse",
    },
  });

  tl.fromTo("#collectionBanner", { opacity: 0 }, { opacity: 1 });
}

function collectionCarrousel() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#collectionCarrousel",
      start: "top 60%",
      end: "bottom 20%",
      toggleActions: "play reverse restart reverse",
    },
  });

  tl.fromTo("#collectionCarrousel", { opacity: 0 }, { opacity: 1 });
}

function textSlider() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#textSlider #text1",
      start: "top 105%",
      end: "bottom -20%",
      scrub: 1.5,
    },
  });

  tl.fromTo("#textSlider #text1", { x: "-30%" }, { x: "0" }).fromTo(
    "#textSlider #text2",
    { x: "0" },
    { x: "-30%" },
    0
  );
}

function artText() {
  gsap.timeline({
    scrollTrigger: {
      trigger: "#artText",
      start: "center 60%",
      end: "bottom 20%",
      toggleActions: "play reverse restart reverse",
      pin: true,
    },
  });
}

window.addEventListener("load", () => {
  setTimeout(() => {
    intro();
  }, 1000);
});

const masterTl = gsap.timeline();
masterTl
  .add(main)
  .add(collectionBanner)
  .add(collectionCarrousel)
  .add(textSlider)
  .add(artText);
