import { useState } from "react";
import { useUserState } from "./contexts/user/user.provider";

function useFetchAPI() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({});
  const [isError, setIsError] = useState(false);
  const token = useUserState("token");

  function init() {
    setData({});
    setIsError(false);
    setIsLoading(false);
  }

  async function fetchAPI({ url, method = "GET", body }) {
    init();
    try {
      setIsLoading(true);
      //process.env.NEXT_PUBLIC_API
      const data = await fetch("http://localhost:4000/" + url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      });
      const res = await data.json();
      setData(res);
    } catch (error) {
      console.log(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }

  return {
    isLoading,
    isError,
    data,
    fetchAPI,
  };
}

export default useFetchAPI;
