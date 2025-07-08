const BASE_URL = "https://www.swapi.tech/api";

export const fetchStarships = async (page = 1) => {
  const res = await fetch(`${BASE_URL}/starships?page=${page}&limit=10`);
  const data = await res.json();
  return data;
};
