import { TLaptop } from "@/types";
import Image from "next/image";

const AllLaptopDetails = ({ laptop }: { laptop: TLaptop }) => {
  const {
    name,
    image,
    brand,
    configuration,
    price,
    product_rating,
    description,
  } = laptop;
  return (
    <div className="my-8">
      <div className="md:flex gap-4 my-8">
        <Image src={image} width={400} height={80} alt="image" />
        <div>
          <h1 className="text-red-500">{brand}</h1>
          <h1 className="text-green-500">{name}</h1>
          <p className="text-green-500">{configuration}</p>
          <p>Product Rating : {product_rating}</p>
          <p className="text-orange-500">${price}</p>
        </div>
      </div>

      <p> Description</p>
      <p>{description}</p>
    </div>
  );
};

export default AllLaptopDetails;
