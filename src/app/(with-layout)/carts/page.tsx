"use client";

import CartCard from "@/components/ui/CartCard";
import { TLaptop } from "@/types";
import { useEffect, useState } from "react";

const CartsPage = () => {
  const [carts, setCart] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/carts")
      .then((res) => res.json())
      .then((data) => setCart(data));
  }, []);
  return (
    <div>
      <div className="md:grid grid-cols-3 gap-6">
        {carts.map((cart: TLaptop) => (
          <CartCard key={cart._id} cart={cart} />
        ))}
      </div>
    </div>
  );
};

export default CartsPage;
