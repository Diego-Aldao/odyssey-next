interface SearchParams {
  searchParams?: { [key: string]: string | string[] | undefined };
}
export const searchParamsToString = (
  searchParams: SearchParams | undefined
) => {
  if (searchParams && Object.entries(searchParams).length >= 1) {
    const queryString = Object.entries(searchParams)
      .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
      .join("&");
    return `?${queryString}`;
  } else {
    return undefined;
  }
};
