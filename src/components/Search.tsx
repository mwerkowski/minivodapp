import { useAppState } from "../hooks/useAppState";

function Search() {
  const { searchQuery, setSearchQuery } = useAppState();

  return (
    <input
      className="w-full px-4 py-2 border border-gray-700 bg-gray-900 text-gray-100 
                   focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 
                   outline-none transition duration-200 shadow-sm"
      type="text"
      placeholder="Search Show..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
}

export default Search;
