"use client";

import { useAddLaptopsMutation } from "@/components/redux/api/api";
import { TLaptop } from "@/types";
import { SubmitHandler, useForm } from "react-hook-form";
import Swal from "sweetalert2";

const CreateLaptopPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TLaptop>();
  const onSubmit: SubmitHandler<TLaptop> = (data) => {
    console.log(data);
    fetch("http://localhost:5000/laptops/", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `created successfully`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });

    reset();
  };
  return (
    <div className="w-[50%] mx-auto ">
      <h1 className="text-red-500 text-2xl my-4">Create Donation</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="">Image:</label>
          <input
            className="w-full rounded-md p-4 border-slate-600 border-2"
            type="text"
            {...register("image", { required: true })}
            placeholder="Image"
          />
          {errors.image && (
            <span className="text-red-600">Image is required</span>
          )}
        </div>
        <div>
          <label className="">Name</label>
          <input
            className="w-full rounded-md p-4 border-slate-600 border-2"
            type="text"
            {...register("name", { required: true })}
            placeholder="Name"
          />
          {errors.name && (
            <span className="text-red-600">Name is required</span>
          )}
        </div>
        <div>
          <label className="">Brand</label>
          <input
            className="w-full rounded-md p-4 border-slate-600 border-2"
            type="text"
            {...register("brand", { required: true })}
            placeholder="Brand"
          />
          {errors.brand && (
            <span className="text-red-600">Brand is required</span>
          )}
        </div>
        <div>
          <label className="">Configuration</label>
          <input
            className="w-full rounded-md p-4 border-slate-600 border-2"
            type="text"
            {...register("configuration", { required: true })}
            placeholder="Amount"
          />
          {errors.configuration && (
            <span className="text-red-600">Configuration is required</span>
          )}
        </div>
        <div>
          <label className="">Price</label>
          <input
            className="w-full rounded-md p-4 border-slate-600 border-2"
            type="number"
            {...register("price", { required: true })}
            placeholder="Price"
          />
          {errors.price && (
            <span className="text-red-600">Price is required</span>
          )}
        </div>
        <button
          className="border-2 p-4 w-full rounded-md bg-blue-500 text-white-500 my-2 text-white"
          type="submit"
        >
          Create Donation
        </button>
      </form>
    </div>
  );
};

export default CreateLaptopPage;
