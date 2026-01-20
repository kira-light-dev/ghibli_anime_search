export async function getPopularAnimes() {
  const res = await fetch("https://ghibliapi.vercel.app/films");
  const data = await res.json();
  return data;
}

export async function searchAnimes(query) {
  const res = await fetch("https://ghibliapi.vercel.app/films");
  const data = await res.json();
  return data.filter((anime) =>
    anime.title.toLowerCase().includes(query.toLowerCase())
  );
}
