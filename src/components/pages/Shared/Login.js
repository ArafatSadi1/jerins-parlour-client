import React from "react";
import logo from "../../../Image_Icon/logo.png";
import google from "../../../Image_Icon/Icon/Group 573.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import useToken from "../../hooks/useToken";
import { useForm } from "react-hook-form";
import Loading from "./Loading";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, GUser, GLoading, GError] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const [token] = useToken(user || GUser);

  let from = location.state?.from?.pathname || "/";

  if (loading || GLoading) {
    return <Loading></Loading>;
  }

  if (token) {
    navigate(from, { replace: true });
  }

  const onSubmit = async (data) => {
    await signInWithEmailAndPassword(data.email, data.password);
  };
  return (
    <div className="my-12 grid justify-center items-center">
      <div className="w-screen max-w-md bg-base-100 border border-slate-600 rounded p-8">
        <img className="mx-auto" width={160} src={logo} alt="" />
        <h4 className="text-2xl font-bold mt-16 mb-6">Login</h4>
        <form onSubmit={handleSubmit(onSubmit)} className="form-control">
          <input
            class="input input-bordered"
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
          <label class="label">
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
            class="input input-bordered"
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
          <label class="label">
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

          <p className="text-error text-sm">{error?.message}</p>
          <input
            type="submit"
            className="btn btn-secondary"
            value="Log in"
          />
          <p className="text-sm mt-2 text-center">
            Need an account?
            <Link className="text-secondary" to="/signup">
              Sign up
            </Link>
          </p>
        </form>
        <p className="text-error text-sm my-4">{GError?.message}</p>
        <button
          onClick={() => signInWithGoogle()}
          class="btn btn-outline rounded-full w-full pr-20"
        >
          <img className="mr-20" width={30} src={google} alt="" /> Continue With
          Google
        </button>
      </div>
    </div>
  );
};

export default Login;
