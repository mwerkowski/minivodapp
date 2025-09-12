import { Outlet } from "react-router-dom";
import VideoPlayer from "../components/VideoPlayer";

function AppLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
      <header className="p-4 shadow-sm border-b border-gray-700 bg-gray-800">
        <h1 className="text-xl font-semibold">Mini VOD App</h1>
      </header>

      <main className="flex-1 flex flex-col p-4 gap-4 min-h-0">
        <Outlet />
        <VideoPlayer />
      </main>

      <footer className="p-4 border-t border-gray-700 bg-gray-800 text-sm text-gray-400 text-center">
        © 2025 Mini VOD App
      </footer>
    </div>
  );
}

export default AppLayout;
