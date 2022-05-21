import React from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import Loading from "../Shared/Loading";

const OrderList = () => {
  const navigate = useNavigate();
  const { data: orderList, isLoading } = useQuery("booking", () =>
    fetch(`http://localhost:5000/booking`, {
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
   return <Loading></Loading>
  }

  return (
    <div class="overflow-x-auto m-8">
      <table class="table w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Service</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orderList.map((order) => (
            <tr key={order._id}>
              <th>{order.displayName ? order.displayName : "No Name"}</th>
              <td>{order.email}</td>
              <td>{order.name}</td>
              <td>{order.paid ? <span className="btn btn-success btn-sm text-white">Done</span> : <span className="btn btn-error btn-sm text-white">Pending</span> }</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderList;
