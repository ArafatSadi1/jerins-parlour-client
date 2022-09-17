import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const BookingCard = ({ bookedItem, refetch }) => {
  const { _id, picture, name, price, about, paid } = bookedItem;

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/booked/${id}`).then((res) => {
      if (res.data.acknowledged) {
        toast.error("Delete Successful");
        refetch();
      }
    });
  };
  return (
    <div class="card bg-base-100 shadow-xl">
      <div className="flex justify-between items-center pt-4 px-8">
        <img width={72} src={picture} alt="Shoes" class="rounded-xl" />
        {paid ? (
          <span className="btn btn-sm btn-success text-white">Paid</span>
        ) : (
          <div className="flex items-center gap-3">
            <Link
              to={`/book/payment/${_id}`}
              className="btn btn-sm btn-info text-white"
            >
              Pay
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-sm btn-error text-white"
            >
              Delete
            </button>
          </div>
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
