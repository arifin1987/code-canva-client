import { TLaptop } from "@/types";
import Image from "next/image";

const CartCard = ({ cart }: { cart: TLaptop }) => {
  const { image, name, brand, price, configuration } = cart;
  return (
    <div>
      <Image src={image} width={600} height={400} alt="image" />
      <h1>{name}</h1>
      <p>{configuration}</p>
      <p>${price}</p>
    </div>
  );
};

export default CartCard;
