import type { Show } from "../models/Show";

export async function getShows(page: string): Promise<Show[]> {
  const response: Response = await fetch(
    `https://api.tvmaze.com/shows?page=${page}`
  );
  if (response.status === 404) {
    return [];
  }
  if (!response.ok) throw Error(`Couldn't fetch shows data`);
  return (await response.json()) as Show[];
}

export async function getShow(id: string | undefined): Promise<Show> {
  if (!id) throw Error(`No show id`);
  const response: Response = await fetch(`https://api.tvmaze.com/shows/${id}`);
  if (!response.ok) throw Error(`Couldn't fetch show data`);

  return (await response.json()) as Show;
}
