import type { Show } from "../models/Show";
import Row from "./Row";

function List({ shows }: { shows: Show[] }) {
  return (
    <ul className="flex-1 min-h-0 overflow-y-auto p-2 space-y-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
      {shows.map((show: Show) => (
        <Row show={show} key={show.id} />
      ))}
    </ul>
  );
}

export default List;
