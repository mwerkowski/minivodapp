import type { Show } from "../models/Show";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getShow } from "../services/apiShows";

export function useShow() {
  const { id } = useParams();
  const {
    isLoading,
    data: show,
    error,
  } = useQuery<Show, Error>({
    queryKey: ["show", id],
    queryFn: () => getShow(id),
  });

  return { isLoading, show, error };
}
