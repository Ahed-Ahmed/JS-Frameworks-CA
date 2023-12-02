import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Autoplay } from "swiper";
import firstimg from "../assets/slide-first.jpg";
import secondimg from "../assets/slide-second.jpg";
import thirdimg from "../assets/slide-third.jpg";
import forthimg from "../assets/slide-fourth.jpg";

SwiperCore.use([Autoplay]);

const Slider = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.start();
    }
  }, []);

  const handleMouseEnter = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.start();
    }
  };

  return (
    <StyledSwiper
      ref={swiperRef}
      slidesPerView={1}
      spaceBetween={0}
      pagination={{ dynamicBullets: true }}
      autoplay={{ delay: 3000 }}
    >
      <SwiperSlide>
        <SlideContent
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Image src={firstimg} alt="Slider First Image " />
        </SlideContent>
      </SwiperSlide>
      <SwiperSlide>
        <SlideContent
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Image src={secondimg} alt="Slider Second Image " />
        </SlideContent>
      </SwiperSlide>
      <SwiperSlide>
        <SlideContent
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Image src={thirdimg} alt="Slider Third Image " />
        </SlideContent>
      </SwiperSlide>
      <SwiperSlide>
        <SlideContent
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Image src={forthimg} alt="Slider Fourth Image " />
        </SlideContent>
      </SwiperSlide>
      {/* Add more slides as needed */}
    </StyledSwiper>
  );
};

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 80vh;
  margin-bottom: 60px;

  @media (max-width: 912px) {
    width: 100%;
    height: 50vh;
    margin-bottom: -100px;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 50vh;
    margin-bottom: -30px;
  }
  @media (max-width: 550px) {
    width: 100%;
    height: 38vh;
    margin-bottom: 14px;
  }
`;

const SlideContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-position: bottom;
`;

export default Slider;
