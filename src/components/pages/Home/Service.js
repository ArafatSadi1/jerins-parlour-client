import React, { useEffect } from "react";
import auth from "../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import axios from "axios";
import Loading from "../Shared/Loading";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

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
    axios.post("http://localhost:5000/booking", booking).then((data) => {
      if (data.insertedId > 0) {
        toast("Service added");
      }
    });
  };
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.5 },
      }}
      class="card lg:w-1/3 bg-pink-50 shadow-xl hover:z-20"
    >
      <figure class="p-8 pb-1">
        <img width={72} src={picture} alt="Shoes" class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title font-semibold">{name}</h2>
        <p className="text-secondary font-bold">${price}</p>
        <p>{about}</p>
        <button
          onClick={() => handleBook(user.email)}
          className="btn btn-outline btn-secondary"
        >
          Book Now
        </button>
      </div>
    </motion.div>
  );
};

export default Service;
