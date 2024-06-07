import Banner from "@/components/Shared/Banner";
import TopCategory from "@/components/TopCategory/TopCategory";

import React from "react";

const HomePage = async () => {
  const res = await fetch("http://localhost:5000/laptops/");
  const laptops = await res.json();

  return (
    <div>
      <Banner />
      <TopCategory laptops={laptops} />
    </div>
  );
};

export default HomePage;
