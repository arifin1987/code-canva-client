"use client";

import { TLaptop } from "@/types";
import Image from "next/image";

const TopCategoryCard = ({ laptop }: { laptop: TLaptop }) => {
  const { image, name, configuration, price } = laptop;
  return (
    <div>
      <Image src={image} width={600} height={400} alt="image" />
      <h1>{name}</h1>
      <p>{configuration}</p>
      <p>${price}</p>
    </div>
  );
};

export default TopCategoryCard;
