import React from "react";
import { Link } from "react-router-dom";


const BookingCard = ({ bookedItem }) => {
  const { _id, picture, name, price, about, paid } = bookedItem;

  return (
    <div class="card bg-base-100 shadow-xl">
      <div className="flex justify-between items-center pt-4 px-8">
        <img width={72} src={picture} alt="Shoes" class="rounded-xl" />
        {paid ? (
          <span className="btn btn-sm btn-success text-white">Paid</span>
        ) : (
          <Link to={`/book/payment/${_id}`} className="btn btn-sm btn-error text-white">Pay</Link>
        )}
      </div>
      <div class="card-body">
        <h2 class="card-title font-semibold">{name}</h2>
        <p>{about}</p>
      </div>
    </div>
  );
};

export default BookingCard;
