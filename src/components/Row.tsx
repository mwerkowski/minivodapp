import { useNavigate } from "react-router-dom";
import type { Show } from "../models/Show";
import { useAppState } from "../hooks/useAppState";

function Row({ show }: { show: Show }) {
  const navigate = useNavigate();
  const { setPlay } = useAppState();
  const { name, id } = show;
  return (
    <li
      className="px-4 py-2 bg-gray-900 hover:bg-gray-700 cursor-pointer transition"
      onClick={() => {
        // setPlay(false);
        navigate(`/shows/${id}`);
      }}
    >
      {name}
    </li>
  );
}

export default Row;
