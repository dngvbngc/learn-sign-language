import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import ReadingGamePage from "./pages/ReadingGamePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/reading",
    element: <ReadingGamePage />,
    errorElement: <ErrorPage />,
  },
]);

export default router;
