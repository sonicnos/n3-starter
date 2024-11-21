import "./style.css";

import { gsap } from "gsap";

import { Flip } from "gsap/Flip";

gsap.registerPlugin(Flip, GSDevTools);

const preloaderBackground = document.querySelector(".preloader__background");
const preloaderText = document.querySelector(".preloader__text span");

const heroTitle = [...document.querySelectorAll(".hero__title span span")];
const heroImageStart = document.querySelector(".hero-image-start");
const heroCaption = document.querySelector("hero__caption");
const heroButton = document.querySelector(".hero__button");

const master = gsap.timeline();

const setInitialStates = () => {
  gsap.set(preloaderText, {
    yPercent: 100,
  });
};

const preloaderAnimation = () => {
  const tl = gsap.timeline({
    defaults: {
      ease: "power2.out",
    },
  });

  tl.to(preloaderText, {
    yPercent: 0,
    delay: 0.3,
  })
    .to(preloaderText, {
      yPercent: -110,
      delay: 1,
    })
    .to(preloaderBackground, {
      yPercent: -100,
      delay: 1.5,
      ease: "power4.inOut",
    });
};

master.add(setInitialStates()).add(preloaderAnimation());
