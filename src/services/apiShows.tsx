export async function getShows() {
  const response: Response = await fetch("https://api.tvmaze.com/shows?page=1");
  if (!response.ok) throw Error(`Couldn't fetch shows data`);
  return await response.json();
}

export async function getShow(id: string | undefined) {
  if (!id) throw Error(`No show id`);
  const response: Response = await fetch(`https://api.tvmaze.com/shows/${id}`);
  if (!response.ok) throw Error(`Couldn't fetch show data`);
  return await response.json();
}
