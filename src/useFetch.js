import { useState } from "react";

function useFetchAPI() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({});
  const [isError, setIsError] = useState(false);

  function init() {
    setData({});
    setIsError(false);
    setIsLoading(false);
  }

  async function fetchAPI({ url, method = "GET", body }) {
    init();
    try {
      setIsLoading(true);
      const data = await fetch(url, {
        method,
        body,
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
