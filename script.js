gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();
const firstLoad = () => {
  tl.to("#splashScreen", { x: "-100vw", duration: 2, ease: "expo" })
    .to("#splashScreen", { display: "none" })
    .fromTo("main", { opacity: 0 }, { opacity: 1 });
};

window.addEventListener("load", () => {
  setTimeout(() => {
    firstLoad();
  }, 2000);
});

function openMenu() {
  console.log("ABRE MENU");
}

function closeMenu() {
  console.log("FECHA MENU");
}

// window.addEventListener("load", () => {
//   let tlSection1 = gsap.timeline({ defaults: { duration: 2, ease: "expo" } });
//   tlSection1
//     .from("h1", { y: 20, opacity: 0 })
//     .from(
//       "#section-main img",
//       {
//         scale: 0.8,
//       },
//       0
//     )
//     .fromTo(
//       "#section-main",
//       { scale: 1 },
//       {
//         scale: 1.1,
//         scrollTrigger: {
//           trigger: "#section-main",
//           start: "15% 10%",
//           end: "bottom -100%",
//           scrub: 1.5,
//         },
//       }
//     )
//     .fromTo(
//       "img",
//       { scale: 1 },
//       {
//         scale: 1.8,
//         y: 50,
//         scrollTrigger: {
//           trigger: "#section-main",
//           start: "20% 20%",
//           end: "bottom -100%",
//           scrub: 1.5,
//         },
//       }
//     );
// });
