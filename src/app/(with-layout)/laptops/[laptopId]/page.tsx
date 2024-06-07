import AllLaptopDetails from "@/components/ui/AllLaptopDetails";
import React from "react";
export interface TLaptopId {
  params: {
    laptopId: string;
  };
}
const AllLaptopDetailsPage = async ({ params }: TLaptopId) => {
  const res = await fetch(`http://localhost:5000/laptops/${params.laptopId}`);
  const laptop = await res.json();
  return (
    <div>
      <AllLaptopDetails laptop={laptop} />
    </div>
  );
};

export default AllLaptopDetailsPage;
