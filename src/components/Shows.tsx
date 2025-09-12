import ShowList from "./List";
import Spinner from "./Spinner";
import Error from "./Error";
import { useShows } from "../hooks/useShows";
import type { Show } from "../models/Show";
import { useAppState } from "../hooks/useAppState";

function Shows() {
  const { searchQuery } = useAppState();
  const {
    isLoading,
    shows,
    error,
  }: { isLoading: boolean; shows: Show[]; error: Error | null } = useShows();

  if (isLoading) return <Spinner />;
  if (error) return <Error />;
  if (isLoading) return <Spinner />;

  const filteredShows = shows.filter((show: Show) =>
    show.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return <ShowList shows={filteredShows} />;
}

export default Shows;
