"use client";

import React from "react";
const { useEffect, useRef } = React;

// Dependencies
import { gsap } from "gsap";

const OurCompany = () => {
  const company = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(company.current, {
        x: "-60%",
        duration: 2,
        scrollTrigger: {
          trigger: company.current,
          start: "top 94%",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="our-company">
      <h3 className="company-heading" ref={company}>
        Our Company
      </h3>
    </section>
  );
};

export default OurCompany;
