import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../../firebase.init";
import { useParams } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import Loading from "../Shared/Loading";

const stripePromise = loadStripe(
  "pk_test_51L0g7kHBvOlerm2EEroltSS1rRM2MHgJAVMRp27pdfsSh1pa8WNrNq8ntLvB4F4nusQdyvSzmHoYcq6grGkhTMfX0045fMYQvO"
);

const Payment = () => {
  const { id } = useParams();
  const [user, loading] = useAuthState(auth);
  const { data: book, isLoading } = useQuery("payment", () =>
    fetch(`http://localhost:5000/payment/${id}`).then((res) => res.json())
  );
  if (loading || isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="my-8">
      <div className="flex flex-col justify-center items-center gap-4">
        <input
          type="text"
          value={user.displayName}
          class="input w-full max-w-xs"
        />
        <input
          type="email"
          value={user.email}
          readOnly
          class="input w-full max-w-xs"
        />
        <input
          type="email"
          value={book?.name}
          readOnly
          class="input w-full max-w-xs"
        />
      </div>
      <div className="max-w-xs mx-auto mt-2">
        <label className="mb-2">
          <span className="text-sm">
            Your Service Charge Will be
            <span className="text-secondary font-semibold">${book?.price}</span>
          </span>
        </label>
        <Elements stripe={stripePromise}>
          <CheckoutForm book={book}></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
