const BASE_URL = "https://www.swapi.tech/api";

export const fetchStarships = async (page = 1) => {
  const res = await fetch(`${BASE_URL}/starships?page=${page}&limit=10`);
  const data = await res.json();
  return data;
};

export const fetchStarshipById = async (id) => {
  const res = await fetch(`${BASE_URL}/starships/${id}`);
  const data = await res.json();
  return data;
};

export const searchStarships = async (query) => {
  const res = await fetch(
    `https://www.swapi.tech/api/starships?page=1&limit=100`
  );
  const data = await res.json();

  if (!data.results) return [];

  const detailFetches = data.results.map(async (ship) => {
    const res = await fetch(ship.url);
    const detailData = await res.json();
    return detailData.result.properties;
  });

  const detailedShips = await Promise.all(detailFetches);

  const filtered = detailedShips.filter(
    (ship) =>
      ship.name.toLowerCase().includes(query.toLowerCase()) ||
      ship.model.toLowerCase().includes(query.toLowerCase())
  );

  return filtered.map((ship) => ({
    uid: ship.url.split("/").pop(),
    name: ship.name,
    model: ship.model,
  }));
};
