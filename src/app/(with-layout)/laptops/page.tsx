import AllLaptopCard from "@/components/ui/AllLaptopCard";
import { TLaptop } from "@/types";

const AllLaptopsPage = async () => {
  const res = await fetch("http://localhost:5000/laptops/");
  const laptops = await res.json();

  return (
    <div>
      <div className="md:grid grid-cols-3 gap-8">
        {laptops.map((laptop: TLaptop) => (
          <AllLaptopCard key={laptop._id} laptop={laptop} />
        ))}
      </div>
    </div>
  );
};

export default AllLaptopsPage;
