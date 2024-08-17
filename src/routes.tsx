import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import ReadingGamePage from "./pages/ReadingGamePage";
import SigningPage from "./pages/SigningPage";
import Layout from "./pages/Layout";
import ReadingPage from "./pages/ReadingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "reading",
        element: <ReadingPage />,
      },
      { path: "reading/:id", element: <ReadingGamePage /> },
      {
        path: "signing",
        element: <SigningPage />,
      },
    ],
  },
]);

export default router;
