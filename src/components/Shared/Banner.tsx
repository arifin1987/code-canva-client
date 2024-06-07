"use client";

import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from "../../assets/image/img1.jpg";

const Banner = () => {
  return (
    <Carousel>
      <div>
        <Image src={img1} width={700} height={350} alt="laptop image" />
      </div>
      <div>
        <Image src={img1} width={700} height={350} alt="laptop image" />
      </div>
      <div>
        <Image src={img1} width={700} height={350} alt="laptop image" />
      </div>
    </Carousel>
  );
};

export default Banner;
