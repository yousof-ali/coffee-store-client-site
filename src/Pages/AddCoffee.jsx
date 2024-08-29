import React from "react";
import Button from "../Component/Button";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const supplier = form.supplier.value;
    const category = form.category.value;
    const chef = form.chef.value;
    const taste = form.taste.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const newCoffee = { name, supplier, category, chef, taste, details, photo };
    console.log(newCoffee);

    fetch("http://localhost:5000/newcoffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })

      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.insertedId) {
          Swal.fire({
            title: "Added!!",
            text: `${name} add done`,
            icon: "success"
          });
          form.reset();
        }
        else{
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        }
      });   
  };

  // https://i.ibb.co/8YbTmr8/3.webp
  // https://i.ibb.co/k3j5PT1/1.jpg
  // https://i.ibb.co/3FbHkDr/4.jpg
  // https://i.ibb.co/bRWfmpG/2.webp

  return (
    <div className="my-6 px-2">
      <div className="max-w-[1600px] mx-auto">
        <Link to={"/"}>
          <Button>
            <FaArrowLeft />
            Back to Home
          </Button>
        </Link>
      </div>
      <div className="max-w-[1000px] rounded-md border my-4 py-8 mx-auto px-2 bg-[#F4F3F0]">
        <h2 className="text-center text-2xl font-bold">Add New Coffee</h2>
        <p className="w-3/4 text-center mx-auto my-2">
          It is a long established fact that a reader will be distraceted.
        </p>

        <form onSubmit={handleAddCoffee}>
          <div className="md:flex justify-between gap-8 px-2 md:px-4">
            <div className="flex-1">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter coffee name"
                  className="ronded p-2 outline-2 outline-[#E3B577]"
                  name="name"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Supplier</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter coffee supplier"
                  className="ronded p-2 outline-2 outline-[#E3B577]"
                  name="supplier"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter coffee category"
                  className="ronded p-2 outline-2 outline-[#E3B577]"
                  name="category"
                  required
                />
              </div>
            </div>
            <div className="flex-1">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Chef</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter coffee chef"
                  className="ronded p-2 outline-2 outline-[#E3B577]"
                  name="chef"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Taste</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter coffee taste"
                  className="ronded p-2 outline-2 outline-[#E3B577]"
                  name="taste"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Details</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter coffee details"
                  className="ronded p-2 outline-2 outline-[#E3B577]"
                  name="details"
                  required
                />
              </div>
            </div>
          </div>
          <div className="form-control px-2">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="url"
              placeholder="Enter photo URL"
              className="ronded p-2 outline-2 outline-[#E3B577]"
              name="photo"
              required
            />
          </div>
          <div className="flex items-center justify-center mt-6">
            <input
              value={"Add"}
              type="submit"
              className="p-2 bg-[#E3B577] text-white border-2 border-[#a3773e] hover:bg-[#dc8007] rounded-md"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
