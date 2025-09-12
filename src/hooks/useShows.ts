import type { InfiniteData } from "@tanstack/react-query";
import type { Show } from "../models/Show";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getShows } from "../services/apiShows";

export function useShows() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error,
  } = useInfiniteQuery<Show[], Error, InfiniteData<Show[]>, [string], number>({
    queryKey: ["shows"],
    queryFn: ({ pageParam = 1 }) => getShows(pageParam.toString()),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      if (!lastPage || lastPage.length === 0) return undefined;
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    },
  });

  return {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error,
  };
}
