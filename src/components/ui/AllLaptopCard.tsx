"use client";

import { TLaptop } from "@/types";
import Image from "next/image";
import Link from "next/link";

const AllLaptopCard = ({ laptop }: { laptop: TLaptop }) => {
  const { name, image, brand, configuration, price, product_rating, _id } =
    laptop;
  const handleAddToCart = (laptop: TLaptop) => {
    fetch("http://localhost:5000/carts/", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(laptop),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
      <Image src={image} width={400} height={80} alt="image" />
      <h1 className="text-red-500">{brand}</h1>
      <h1 className="text-green-500">{name}</h1>
      <p className="text-green-500">{configuration}</p>
      <p>Product Rating : {product_rating}</p>
      <p className="text-orange-500">${price}</p>
      <Link href={`/laptops/${_id}`}>
        <button className="btn btn-outline btn-accent mx-2">
          View Details
        </button>
      </Link>
      <Link href={`/carts/${_id}`}>
        <button
          onClick={() => handleAddToCart(laptop)}
          className="btn btn-outline btn-accent"
        >
          Add to Cart{" "}
        </button>
      </Link>
    </div>
  );
};

export default AllLaptopCard;
