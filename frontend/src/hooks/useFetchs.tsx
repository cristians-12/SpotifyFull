"use client";
import { Artist } from "@/app/types";
import { useEffect, useState } from "react";

const useFetchs = (url: string) => {
  //   const [error, setError] = useState(null);
  const [data, setData] = useState<Artist[] | null>(null);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_AUTH_KEY}`,
      },
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((response) => setData(response));
  }, [url]);

  return { data };
};

export default useFetchs;
