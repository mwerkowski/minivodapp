import { Outlet, useParams } from "react-router-dom";
import Search from "../components/Search";
import Shows from "../components/Shows";

function MainContent() {
  const { id } = useParams();

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-${id ? "2" : "1"} gap-4 h-96`}
    >
      <div className="flex flex-col border border-gray-700 bg-gray-800 shadow-md min-h-0">
        <div className="p-2 border-b border-gray-700">
          <Search />
        </div>

        <Shows />
      </div>

      <Outlet />
    </div>
  );
}

export default MainContent;
