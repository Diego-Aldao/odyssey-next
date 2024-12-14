import { useEffect, useState } from "react";

export default function useInfiniteData<T>(
  data: T[] | undefined,
  page: number | undefined
) {
  const [currentData, setCurrentData] = useState<T[] | null>(null);

  useEffect(() => {
    if (!data || !page) return;
    const newData = currentData && page > 1 ? [...currentData, ...data] : data;
    setCurrentData(newData);
  }, [data, page]);

  return { currentData };
}
