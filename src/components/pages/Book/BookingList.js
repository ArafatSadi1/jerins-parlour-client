import React from "react";
import { useQuery } from "react-query";
import auth from "../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import BookingCard from "./BookingCard";
import { useNavigate } from "react-router-dom";
import Loading from "../Shared/Loading";

const BookingList = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const {
    data: bookedItems,
    isLoading,
    refetch,
  } = useQuery("booking", () =>
    fetch(`https://jerins-parlour.onrender.com/booking/${user.email}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => {
      if (res.status === 401 || res.status === 403) {
        navigate("/login");
      }
      return res.json();
    })
  );
  if (loading || isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="p-12 sm:mx-auto">
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-2">
        {bookedItems?.map((bookedItem) => (
          <BookingCard
            key={bookedItem._id}
            bookedItem={bookedItem}
            refetch={refetch}
          ></BookingCard>
        ))}
      </div>
    </div>
  );
};

export default BookingList;
