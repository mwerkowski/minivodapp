import { Outlet, useParams } from "react-router-dom";
import Search from "../components/Search";
import Shows from "../components/Shows";

function MainContent() {
  const { id } = useParams();

  return (
    <div
      className={`grid grid-cols-1 ${
        id ? "md:grid-cols-2" : "md:grid-cols-1"
      } gap-4 h-96`}
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
