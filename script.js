window.addEventListener("load", () => {
  let tlSection1 = gsap.timeline({ defaults: { duration: 2, ease: "expo" } });
  tlSection1
    .from("h1", { y: 20, opacity: 0 })
    .from("img", { opacity: 0, scale: 0.8 }, 0);
});
