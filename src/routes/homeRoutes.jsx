import HomePage from "../pages/Home/HomePage";
import ErrorPage from "../pages/Error/ErrorPage";

export const homeRoutes = [
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
];
