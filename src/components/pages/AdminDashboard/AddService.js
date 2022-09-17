import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading";

const AddService = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const imageStorageKey = "242a7e72e9896985441314dfce198365";
  const onSubmit = async (data) => {
    setLoading(true);
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        const imageUrl = result.data.url;
        const service = {
          picture: imageUrl,
          name: data.title,
          about: data.description,
          price: data.price,
        };
        fetch("https://jerins-parlour.onrender.com/services", {
          method: "POST",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          body: JSON.stringify(service),
        })
          .then((res) => res.json())
          .then((added) => {
            if (added.insertedId) {
              toast.success("service added");
              reset();
            } else {
              toast.error("service added failed");
            }
          });
        setLoading(false);
      });
  };

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="m-8">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="p-4 bg-base-100 grid grid-cols-1 lg:grid-cols-2">
          <div>
            <label class="label">
              <span class="label-text font-semibold">Service Title</span>
            </label>
            <input
              type="text"
              placeholder="Enter Title"
              class="input input-bordered w-full max-w-xs"
              {...register("title", {
                required: {
                  value: true,
                  message: "Title is Required",
                },
              })}
            />
            <label className="label">
              {errors.title?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.title.message}
                </span>
              )}
            </label>
          </div>

          <div>
            <label class="label">
              <span class="label-text font-semibold">Price</span>
            </label>
            <input
              type="number"
              placeholder="$Price"
              class="input input-bordered w-full max-w-xs"
              {...register("price", {
                required: {
                  value: true,
                  message: "Price is Required",
                },
              })}
            />
            <label className="label">
              {errors.price?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.price.message}
                </span>
              )}
            </label>
          </div>

          <div>
            <label class="label">
              <span class="label-text font-semibold">Description</span>
            </label>
            <textarea
              class="textarea textarea-bordered w-full max-w-xs"
              placeholder="Enter Description"
              {...register("description", {
                required: {
                  value: true,
                  message: "Description is Required",
                },
              })}
            ></textarea>
            <label className="label">
              {errors.description?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.description.message}
                </span>
              )}
            </label>
          </div>

          <div>
            <label class="label">
              <span class="label-text font-semibold">Image</span>
            </label>
            <input
              type="file"
              class="input pl-0 w-full max-w-xs"
              {...register("image", {
                required: {
                  value: true,
                  message: "Image is Required",
                },
              })}
            />
            <label className="label">
              {errors.image?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.image.message}
                </span>
              )}
            </label>
          </div>
        </div>
        <input
          type="submit"
          value="Submit"
          className="btn btn-secondary block ml-auto mt-2"
        />
      </form>
    </div>
  );
};

export default AddService;
