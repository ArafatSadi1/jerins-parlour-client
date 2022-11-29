import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const MakeAdmin = () => {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    const email = data.email;
    fetch(`https://jerins-parlour.onrender.com/user/admin/${email}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          navigate("/login");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("admin added");
          reset();
        } else {
          toast.error("admin added failed");
        }
      });
  };

  return (
    <div className="m-8 bg-base-100 rounded p-4">
      <h2 className="text-4xl font-semibold text-center py-4">Make an Admin</h2>
      <form
        className="mt-4 flex justify-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="lg:w-2/5 w-4/5">
          <label className="label">
            <span className="text-lg font-semibold">Enter Email</span>
          </label>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Enter an existing user email"
              className="input input-bordered w-full text-lg focus:outline-none rounded-l rounded-r-none"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is Required",
                },
              })}
            />
            <input
              type="submit"
              value="Submit"
              className="py-[10px] px-4 bg-secondary rounded-r text-lg text-white hover:bg-[#d400a2] duration-300"
            />
          </div>
          <label className="label">
            {errors.email?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.email.message}
              </span>
            )}
          </label>
        </div>
      </form>
    </div>
  );
};

export default MakeAdmin;
