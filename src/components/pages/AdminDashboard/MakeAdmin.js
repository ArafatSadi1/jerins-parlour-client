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
    fetch(`https://obscure-beyond-94214.herokuapp.com/user/admin/${email}`, {
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
        console.log(data)
        if (data.modifiedCount > 0) {
          toast.success("admin added");
          reset();
        } else {
          toast.error("admin added failed");
        }
      });
  };

  return (
    <div className="m-8 bg-base-100 p-4">
      <form
        className="flex flex-row items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="lg:w-2/5 w-4/5">
          <label class="label">
            <span class="label-text font-semibold">Enter Email</span>
          </label>
          <input
            type="email"
            placeholder="Enter Existing User Email"
            class="input input-bordered w-full text-lg"
            {...register("email", {
              required: {
                value: true,
                message: "Email is Required",
              },
            })}
          />
        </div>

        <input
          type="submit"
          value="Submit"
          className="btn btn-secondary mt-9"
        />
      </form>
      <label className="label">
        {errors.email?.type === "required" && (
          <span className="label-text-alt text-red-500">
            {errors.email.message}
          </span>
        )}
      </label>
    </div>
  );
};

export default MakeAdmin;
