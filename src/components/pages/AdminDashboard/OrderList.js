import React from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import Loading from "../Shared/Loading";

const OrderList = () => {
  const navigate = useNavigate();
  const { data: orderList, isLoading } = useQuery("booking", () =>
    fetch(`https://jerins-parlour.onrender.com/booking`, {
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
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="overflow-x-auto m-8">
      <table className="table w-full">
        <thead>
          <tr>
            <th className="text-[14px]">No.</th>
            <th className="text-[14px]">Name</th>
            <th className="text-[14px]">Email</th>
            <th className="text-[14px]">Service</th>
            <th className="text-[14px]">Status</th>
          </tr>
        </thead>
        <tbody>
          {orderList.map((order, index) => (
            <tr key={order._id}>
              <th>{index + 1}</th>
              <th>{order?.displayName ? order.displayName : "No Name"}</th>
              <td>{order?.email}</td>
              <td>{order?.name}</td>
              <td>
                {order?.paid ? (
                  <span className="rounded bg-green-500 py-1 px-3 uppercase text-white">
                    Done
                  </span>
                ) : (
                  <span className="rounded bg-error py-1 px-3 uppercase text-white duration-300">
                    Pending
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderList;
