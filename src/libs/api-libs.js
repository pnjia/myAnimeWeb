export const getAnimeResponse = async (endp, query) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${endp}?${query}`);
  const anime = await response.json();
  console.log({ anime });
  return anime;
};
export const getRecommendedResponse = async (resource, objectProperty) => {
  const response = await getAnimeResponse(resource);
  console.log({ response });
  return response.data?.flatMap((item) => item[objectProperty]);
};
export const reproduce = (data, gap) => {
  const firstNum = Math.floor(Math.random() * (data.length - gap) + 1);
  const lastNum = firstNum + gap;
  const response = {
    data: data.slice(firstNum, lastNum),
  };
  console.log({ ini: response.data.map((data) => data.images) });
  return response;
};
