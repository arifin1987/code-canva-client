import { TLaptop } from "@/types";
import TopCategoryCard from "../ui/TopCategoryCard";

const TopCategory = ({ laptops }: { laptops: TLaptop[] }) => {
  const topcategory = laptops.filter((item) => item.top_category === true);
  return (
    <div className="my-8">
      <h1 className="text-center text-2xl my-4">Top Category</h1>
      <div className="md:grid grid-cols-4 gap-4">
        {topcategory.map((laptop) => (
          <TopCategoryCard key={laptop._id} laptop={laptop} />
        ))}
      </div>
    </div>
  );
};

export default TopCategory;
