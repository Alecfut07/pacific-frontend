import HomePage from "../pages/Home/HomePage";
// import LabInventoryPage from "../pages/Lab/LabInventoryPage/LabInventoryPage";
import ErrorPage from "../pages/Error/ErrorPage";

export const homeRoutes = [
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
];
