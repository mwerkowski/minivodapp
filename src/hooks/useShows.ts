import { useQuery } from "@tanstack/react-query";
import { getShows } from "../services/apiShows";

export function useShows() {
  const {
    isLoading,
    data: shows,
    error,
  } = useQuery({
    queryKey: ["shows"],
    queryFn: getShows,
  });

  return { isLoading, shows, error };
}
