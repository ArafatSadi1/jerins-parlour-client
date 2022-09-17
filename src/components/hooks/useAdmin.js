import React from "react";
import { useQuery } from "react-query";

const useAdmin = (user) => {
  const { data: admin, isLoading } = useQuery("admin", () =>
    fetch(`https://jerins-parlour.onrender.com/admin/${user?.email}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    }).then((res) => res.json())
  );

  return { admin, isLoading };
};

export default useAdmin;
