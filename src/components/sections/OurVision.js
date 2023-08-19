"use client";

import React from "react";
import Image from "next/image";
const { useEffect, useRef } = React;

// Dependencies
import { gsap } from "gsap";

const OurVision = () => {
  const visionContainer = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".v-image", {
        y: "-55%",
        duration: 3,
        scrollTrigger: {
          trigger: visionContainer.current,
          pin: true,
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="our-vision" ref={visionContainer}>
      <div className="vision-text-wrap">
        <h2 className="vision-heading">Our Vision</h2>
      </div>
      <div className="col-span-2 v-image">
        <Image
          src={"/assets/img/vision-1.png"}
          width={420}
          height={518}
          alt="Vision Image"
          className="mt-24"
        />
        <Image
          src={"/assets/img/vision-2.png"}
          width={312}
          height={385}
          alt="Vision Image"
          className="mt-96 ml-auto"
        />
      </div>
      <div className="col-span-2 v-image z-20">
        <p className="vision-text-box">
          To help brands maximize and optimize their MENA reach, especially in
          key markets like Saudi Arabia and Egypt
        </p>
      </div>
      <div className="col-span-2 v-image">
        <Image
          src={"/assets/img/vision-2.png"}
          width={312}
          height={385}
          alt="Vision Image"
          className="mt-64 ml-auto mr-28"
        />
      </div>
    </section>
  );
};

export default OurVision;
