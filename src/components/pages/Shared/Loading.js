import React from "react";
import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Loading = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="flex justify-center items-center h-screen">
      <ClipLoader color={"#F63E7B"} loading={loading} size={50} />
    </div>
  );
};

export default Loading;
