import { lazy } from "react";
import {
  Navigate,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const Movies = lazy(() => import("./pages/Movies"));
const AppLayout = lazy(() => import("./pages/AppLayout"));
const VideoPlayer = lazy(() => import("./pages/Video"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Navigate replace to="movies" />,
      },
      {
        path: "movies",
        element: <Movies />,
      },
      {
        path: "movies/:id",
        element: <VideoPlayer />,
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
