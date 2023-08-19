"use client";

import React from "react";
const { useEffect, useRef } = React;

// Dependencies
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";

// Components
import Footer from "./Footer";

// Layout Component
import { useIsomorphicLayoutEffect } from "./LayoutEffect";

const Layout = ({ children }) => {
  // Register Gsap Plugins
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

  // ScrollSmoother Refs
  const $wrapper = useRef();
  const $content = useRef();

  useIsomorphicLayoutEffect(() => {
    if (ScrollTrigger.isTouch !== 1) {
      let smoother = ScrollSmoother.create({
        wrapper: $wrapper.current,
        content: $content.current,
        smooth: 1.7,
        effects: false,
        smoothTouch: 0,
        preventDefault: true,
        normalizeScroll: { allowNestedScroll: true },
        ignoreMobileResize: true,
      });

      return () => smoother.kill();
    }
  }, []);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const splitParagraph = SplitText.create(".split-paragraph", {
        type: "words, chars",
        wordsClass: "word",
      });

      splitParagraph.words.forEach((word) => {
        gsap.fromTo(
          word,
          {
            transformOrigin: "0% 50%",
            rotate: 2,
          },
          {
            ease: "none",
            rotate: 0,
            scrollTrigger: {
              trigger: word,
              start: "-50% 80%",
              end: "bottom 55%",
              scrub: true,
            },
          }
        );

        gsap.fromTo(
          word,
          {
            "will-change": "opacity",
            opacity: 0.1,
          },
          {
            ease: "none",
            opacity: 1,
            stagger: 0.05,
            scrollTrigger: {
              trigger: word,
              start: "-50% 80%",
              end: "bottom 55%",
              scrub: true,
            },
          }
        );
      });

      gsap.to(".fade-in", {
        opacity: 1,
        translateY: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".fade-in",
          start: "-50% 80%",
          end: "10% 80%",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={$wrapper}>
      <div ref={$content}>
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
