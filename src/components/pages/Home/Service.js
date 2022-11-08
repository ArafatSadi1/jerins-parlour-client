import React from "react";
import auth from "../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import axios from "axios";
import Loading from "../Shared/Loading";
import { toast } from "react-toastify";

const Service = ({ service }) => {
  const { picture, name, price, about } = service;
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <Loading></Loading>;
  }
  const handleBook = (email) => {
    const booking = {
      picture: picture,
      name: name,
      price: price,
      about: about,
      email: email,
      displayName: user.displayName,
    };
    axios
      .post("https://jerins-parlour.onrender.com/booking", booking)
      .then((data) => {
        if (data?.data?.acknowledged) {
          toast.success("Service booked. Thank you");
        }
      });
  };
  return (
    <div className="p-8 bg-pink-50 rounded shadow-xl">
      <div className="flex justify-center">
        <img src={picture} alt="" className="w-[72px]" />
      </div>
      <div className="mt-6 items-center text-center">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-secondary font-bold my-2">${price}</p>
        <p>{about}</p>
        <div className="mt-8">
          <button
            onClick={() => handleBook(user.email)}
            className="py-2 px-4 border border-secondary rounded text-lg text-secondary hover:bg-secondary hover:text-white duration-300"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
