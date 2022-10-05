let tlSection1 = gsap.timeline({ defaults: { duration: 0.8 } });
tlSection1.from("h1", { y: 10, opacity: 0 }).from("img", { opacity: 0 }, 0);
