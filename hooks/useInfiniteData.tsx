import { useEffect, useState } from "react";

export default function useInfiniteData<T>(data: T[], page: number) {
  const [currentData, setCurrentData] = useState<T[] | null>(null);

  useEffect(() => {
    if (!data) return;
    const newData = currentData && page > 1 ? [...currentData, ...data] : data;
    setCurrentData(newData);
  }, [data, page]);

  return { currentData };
}
