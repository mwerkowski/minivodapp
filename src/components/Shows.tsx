import { useRef, useEffect } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import { useShows } from "../hooks/useShows";
import { useAppState } from "../hooks/useAppState";
import Row from "./Row";
import Spinner from "./Spinner";
import Error from "./Error";

const ROW_HEIGHT = 40;

function Shows() {
  const { searchQuery } = useAppState();
  const parentRef = useRef<HTMLDivElement | null>(null);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error,
  } = useShows();

  const allShows = data?.pages.flat() ?? [];

  const filteredShows = allShows.filter((show) =>
    show.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const rowVirtualizer = useVirtualizer({
    count: filteredShows.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => ROW_HEIGHT,
    overscan: 5,
  });

  useEffect(() => {
    const virtualItems = rowVirtualizer.getVirtualItems();
    if (!virtualItems.length) return;

    const lastItem = virtualItems[virtualItems.length - 1];

    if (
      lastItem.index >= filteredShows.length - 1 &&
      hasNextPage &&
      !isFetchingNextPage
    ) {
      fetchNextPage().catch((err) =>
        console.error("Can't fetch next page", err)
      );
    }
  }, [
    rowVirtualizer.getVirtualItems(),
    filteredShows.length,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  ]);

  useEffect(() => {
    if (!hasNextPage || isFetchingNextPage) return;

    const viewportHeight = parentRef.current?.clientHeight ?? 0;
    const visibleRows = Math.ceil(viewportHeight / ROW_HEIGHT);

    if (filteredShows.length < visibleRows) {
      fetchNextPage().catch((err) =>
        console.error("Can't fetch next page", err)
      );
    }
  }, [filteredShows.length, fetchNextPage, hasNextPage, isFetchingNextPage]);

  if (error) return <Error />;
  if (isLoading) return <Spinner />;

  return (
    <div
      ref={parentRef}
      className="flex-1 min-h-0 overflow-y-auto p-2 space-y-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent"
    >
      <div
        style={{
          height: rowVirtualizer.getTotalSize(),
          width: "100%",
          position: "relative",
        }}
      >
        {rowVirtualizer.getVirtualItems().map((virtualRow) => {
          const show = filteredShows[virtualRow.index];
          return (
            <div
              key={show.id}
              ref={(el: HTMLDivElement | null) => {
                if (el) rowVirtualizer.measureElement(el);
              }}
              data-index={virtualRow.index}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                transform: `translateY(${virtualRow.start}px)`,
              }}
            >
              {show ? <Row show={show} /> : <Spinner />}
            </div>
          );
        })}
      </div>

      {(isFetchingNextPage || filteredShows.length === 0) && <Spinner />}
    </div>
  );
}

export default Shows;
