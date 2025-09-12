import { useNavigate, useParams } from "react-router-dom";
import type { Show } from "../models/Show";

function Row({ show }: { show: Show }) {
  const navigate = useNavigate();
  const { id: paramId } = useParams<{ id: string }>();
  const { name, id, genres } = show;
  const isActive = id.toString() === paramId;
  return (
    <li
      className={`${
        isActive ? "bg-violet-700 text-white" : "bg-gray-900 hover:bg-gray-700"
      } px-4 py-2 cursor-pointer transition flex justify-between`}
      onClick={() => {
        void navigate(`/shows/${id}`);
      }}
    >
      <span>{name}</span>
      {!paramId && (
        <span className="text-sm text-gray-400 italic">
          {genres.join(", ")}
        </span>
      )}
    </li>
  );
}

export default Row;
