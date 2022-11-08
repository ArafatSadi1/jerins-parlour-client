import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import google from "../../../Image_Icon/Icon/Group 573.png";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useAuthState,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import useToken from "../../hooks/useToken";
import Loading from "./Loading";

const SignUp = () => {
  const [
    createUserWithEmailAndPassword,
    signupUser,
    signupLoading,
    signupError,
  ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [signInWithGoogle, GUser, GLoading, GError] = useSignInWithGoogle(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const [token] = useToken(GUser || signupUser);

  const [passMatchError, setPassMatchError] = useState("");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();

  if (GLoading || signupLoading || updating) {
    return <Loading></Loading>;
  }

  if (token) {
    navigate("/");
  }
  const onSubmit = async (data) => {
    if (data.password === data.confirmPass) {
      await createUserWithEmailAndPassword(data.email, data.password);
      await updateProfile({ displayName: data.name });
    } else {
      setPassMatchError("Your Password Don't match");
    }
  };
  return (
    <div className="my-12 grid justify-center items-center">
      <div className="w-screen max-w-md bg-base-100 border border-slate-600 rounded p-8">
        <h2 className="text-2xl font-bold mb-8">Create an account</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="form-control">
          <input
            className="input input-bordered"
            placeholder="your Name"
            {...register("name", {
              required: {
                value: true,
                message: "Name is required",
              },
            })}
          />
          <label className="label">
            {errors?.name?.type === "required" && (
              <span className="label-text-alt text-error">
                {errors.name.message}
              </span>
            )}
          </label>

          <input
            className="input input-bordered"
            type="email"
            placeholder="Email"
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
              pattern: {
                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                message: "Provide a Valid Email",
              },
            })}
          />
          <label className="label">
            {errors?.email?.type === "required" && (
              <span className="label-text-alt text-error">
                {errors.email.message}
              </span>
            )}
            {errors?.email?.type === "pattern" && (
              <span className="label-text-alt text-error">
                {errors.email.message}
              </span>
            )}
          </label>

          <input
            className="input input-bordered"
            placeholder="Password"
            type="password"
            {...register("password", {
              required: {
                value: true,
                message: "Password is required",
              },
              minLength: {
                value: 6,
                message: "Your Password must be six character or longer",
              },
            })}
          />
          <label className="label">
            {errors?.password?.type === "required" && (
              <span className="label-text-alt text-error">
                {errors.password.message}
              </span>
            )}
            {errors?.password?.type === "minLength" && (
              <span className="label-text-alt text-error">
                {errors.password.message}
              </span>
            )}
          </label>

          <input
            className="input input-bordered"
            placeholder="Confirm Password"
            type="password"
            {...register("confirmPass", {
              required: {
                value: true,
                message: "Password is required",
              },
              minLength: {
                value: 6,
                message: "Your Password must be six character or longer",
              },
            })}
          />
          <label className="label">
            {errors?.confirmPass?.type === "required" && (
              <span className="label-text-alt text-error">
                {errors.confirmPass.message}
              </span>
            )}
            {errors?.confirmPass?.type === "minLength" && (
              <span className="label-text-alt text-error">
                {errors.confirmPass.message}
              </span>
            )}
            {passMatchError && (
              <span className="label-text-alt text-error">
                {passMatchError}
              </span>
            )}
          </label>

          <p className="text-error text-sm">{signupError?.message}</p>
          <input
            type="submit"
            className="btn btn-secondary"
            value="Create an account"
          />
          <p className="text-sm mt-2 text-center">
            Already have an account?
            <Link className="text-secondary" to="/login">
              Log in
            </Link>
          </p>
        </form>
      </div>
      <div className="divider">OR</div>
      <p className="text-error text-sm">{GError?.message}</p>
      <button
        onClick={() => signInWithGoogle()}
        className="btn btn-outline mt-4 rounded-full pr-32"
      >
        <img className="mr-24" width={30} src={google} alt="" /> Continue With
        Google
      </button>
    </div>
  );
};

export default SignUp;
