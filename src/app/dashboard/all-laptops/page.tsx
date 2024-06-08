import { TLaptop } from "@/types";
import Image from "next/image";

const AllLaptopsPage = async () => {
  const res = await fetch("http://localhost:5000/laptops/");
  const laptops = await res.json();
  return (
    <div>
      <h1 className="text-3xl text-green-600 my-2">All Products</h1>
      <div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full bg-emerald-300">
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Brand</th>
                <th>Configuration</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {laptops.map((laptop: TLaptop) => (
                <tr key={laptop._id}>
                  <td>
                    <Image
                      src={laptop.image}
                      width={150}
                      height={80}
                      alt="image"
                    />
                  </td>
                  <td>{laptop.name}</td>
                  <td className="text-orange-600">{laptop.brand}</td>
                  <td>{laptop.configuration}</td>
                  <td className="text-red-500">${laptop.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllLaptopsPage;
