import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <>
      <div>Search</div>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default AppLayout;
