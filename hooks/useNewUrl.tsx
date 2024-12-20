"use client";
import { SearchParams } from "@/types/localTypes";
import { searchParamsToString } from "@/utils/searchParamsToString";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface Props {
  page: number | undefined;
  searchParams?: SearchParams;
}

export default function useNewUrl({ page, searchParams }: Props) {
  const [newUrl, setNewUrl] = useState<string>("");
  const pathname = usePathname();

  useEffect(() => {
    if (!page) return;
    let newStringParams;
    let newUrl;
    const newPage = page + 1;
    if (page >= 2) {
      const newSearchParams = {
        ...searchParams,
        page: newPage,
      } as SearchParams;
      newStringParams = searchParamsToString(newSearchParams);
      newUrl = `${pathname}${newStringParams}`;
    } else {
      newStringParams = searchParamsToString(searchParams);
      newUrl = `${pathname}${
        newStringParams
          ? `${newStringParams}&page=${newPage}`
          : `?page=${newPage}`
      }`;
    }

    setNewUrl(newUrl);
  }, [searchParams, page]);

  return { newUrl };
}
