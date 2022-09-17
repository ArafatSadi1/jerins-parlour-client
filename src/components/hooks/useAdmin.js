import React from "react";
import { useQuery } from "react-query";

const useAdmin = (user) => {
  const { data: admin, isLoading } = useQuery("admin", () =>
    fetch(`http://localhost:5000/admin/${user?.email}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    }).then((res) => res.json())
  );

  return { admin, isLoading };
};

export default useAdmin;
