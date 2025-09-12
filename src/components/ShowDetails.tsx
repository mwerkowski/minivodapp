import { NavLink } from "react-router-dom";
import Spinner from "./Spinner";
import Error from "./Error";
import { useShow } from "../hooks/useShow";
import { useAppState } from "../hooks/useAppState";

function ShowDetails() {
  const { currentShowTitle, setShowTitle, setPlay, isPlaying } = useAppState();
  const { isLoading, show, error } = useShow();
  if (isLoading) return <Spinner />;
  if (error || !show) return <Error />;

  const { name, genres, image, summary } = show;

  function handlePLayButton() {
    if (isPlaying && currentShowTitle === name) {
      setPlay(false);
    } else {
      setPlay(true);
      setShowTitle(name);
    }
  }

  return (
    <section className="p-6 border border-gray-700 bg-gray-800 shadow-md overflow-y-auto min-h-0">
      <div className="flex flex-row">
        <div className="flex flex-1 flex-col">
          <div className="flex text-gray-400 pt-2 mr-2 mb-2 justify-between">
            <NavLink
              onClick={() => setShowTitle("")}
              to="/"
              className="flex rounded-md align-top bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none ml-2 min-w-24"
            >
              &larr; Close
            </NavLink>
            <button
              onClick={handlePLayButton}
              className="flex rounded-md align-top bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none ml-2 min-w-24"
              type="button"
            >
              {isPlaying && currentShowTitle === name ? "⏸️ Pause" : "▶️ Play"}
            </button>
          </div>
          <div className="flex flex-row pb-4">
            <div className="text-2xl font-bold text-gray-400 ">{name}</div>
          </div>
          <div
            className="text-sm text-gray-200"
            dangerouslySetInnerHTML={{ __html: summary }}
          ></div>
          <div className="flex flex-1 flex-col text-sm italic text-gray-400 pt-2 justify-end">
            {genres.join(", ")}
          </div>
        </div>
        <img className="h-80 m-1" src={image?.medium} alt={name} />
      </div>
    </section>
  );
}

export default ShowDetails;
