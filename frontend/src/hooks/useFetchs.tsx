"use client";

import { useState } from "react";

interface OptionsFetch extends RequestInit {
  headers?: HeadersInit;
}

const useFetchs = () => {
  const [data, setData] = useState(null);

  const fetchData = async (url: string, options?: OptionsFetch) => {
    try {
      const response = await fetch(url, options ?? {});
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      setData(result);
      return result; // Opcional
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error; // Opcional: para que el error pueda ser manejado externamente
    }
  };

  return { data, fetchData };
};

export default useFetchs;
