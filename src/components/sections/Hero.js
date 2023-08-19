import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section>
      <h1 className="page-heading">About Us</h1>
      <div className="hero-image">
        <Image
          src={"/assets/img/hero-image.png"}
          width={1500}
          height={567}
          alt="Hero Image"
          className="w-full"
        />
      </div>
      <div className="about-area">
        <div className="p-wrap">
          <p className="split-paragraph">
            RMS is a <span className="text-primary">media conglomerate</span>{" "}
            <br /> that specializes in{" "}
            <span className="text-primary">sales</span> <br />{" "}
            <span className="text-primary">and marketing solutions</span> within{" "}
            <br /> the advertising industry.
          </p>
        </div>
        <div className="p-wrap-2">
          <div>
            <p className="fade-in">
              We provide cutting-edge advertising opportunities across a variety
              of <br /> platforms throughout the MENA region, leveraging our
              expertise to offer the <br /> latest innovative solutions. Our
              areas of focus encompasses advertising <br /> sales representation
              for prominent satellite TV channels, digital media sales, <br />{" "}
              and social media partnerships, content creation and integration,
              influencer <br /> marketing, and out-of-home media. We have a
              dedicated team of 58 <br /> professionals, and the company
              services its clients through a network of <br /> offices and
              representatives across the MENA region.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
