import { TLaptop } from "@/types";
import Image from "next/image";
import Link from "next/link";

const AllLaptopsPage = async () => {
  const res = await fetch("http://localhost:5000/laptops/");
  const laptops = await res.json();
  // const handleDelete = (_id) => {
  //   fetch(`htt$p://localhost:5000/laptops/${_id}`, {
  //     method: "DELETE",
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       if (data.deletedCount > 0) {
  //         alert("deleted successfully");
  //       }
  //     });
  // };
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
                  <td>
                    <Link href={`/dashboard/update-laptops/${laptop._id}`}>
                      <button>Edit </button>
                    </Link>
                  </td>
                  {/* <td>
                    <button onClick={() => handleDelete(laptop._id)}>
                      Delete{" "}
                    </button>
                  </td> */}
                  <td>
                    <Link href="/dashboard/create-laptops">
                      <button>Add </button>
                    </Link>
                  </td>
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
