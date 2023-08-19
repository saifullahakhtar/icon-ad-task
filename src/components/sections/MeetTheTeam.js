"use client";

import React from "react";
import Image from "next/image";
const { useRef, useState } = React;

// Dependencies
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const MeetTheTeam = () => {
  return (
    <section className="meet-the-team">
      <h3 className="team-heading">Meet the team</h3>
      <Swiper
        slidesPerView={2}
        centeredSlides={false}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          860: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src={"/assets/img/team-1.png"}
            width={373}
            height={454}
            alt="Team Image"
          />
          <h5 className="person-name">Alexander Zhestkov</h5>
          <p className="text-tagline">Design Director</p>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/assets/img/team-2.png"}
            width={373}
            height={454}
            alt="Team Image"
          />
          <h5 className="person-name">Alexander Zhestkov</h5>
          <p className="text-tagline">Design Director</p>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/assets/img/team-3.png"}
            width={373}
            height={454}
            alt="Team Image"
          />
          <h5 className="person-name">Alexander Zhestkov</h5>
          <p className="text-tagline">Design Director</p>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/assets/img/team-1.png"}
            width={373}
            height={454}
            alt="Team Image"
          />
          <h5 className="person-name">Alexander Zhestkov</h5>
          <p className="text-tagline">Design Director</p>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/assets/img/team-2.png"}
            width={373}
            height={454}
            alt="Team Image"
          />
          <h5 className="person-name">Alexander Zhestkov</h5>
          <p className="text-tagline">Design Director</p>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default MeetTheTeam;
