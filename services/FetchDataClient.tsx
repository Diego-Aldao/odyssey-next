"use client";
import { useEffect, useState } from "react";

export default function FetchDataClient<T>(url: string) {
  const [dataFetch, setDataFetch] = useState<T>();
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = (url: string) => {
    setLoading(true);
    fetch(url)
      .then((data) => data.json())
      .then((response) => {
        setDataFetch(response);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (!url) return;
    fetchData(url);
  }, [url]);

  return { dataFetch, loading };
}
