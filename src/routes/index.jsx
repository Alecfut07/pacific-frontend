import { createBrowserRouter } from "react-router-dom";
import { homeRoutes } from "./homeRoutes";
import { labRoutes } from "./labRoutes";
import { industrialRoutes } from "./industrialRoutes";

export const allRoutes = createBrowserRouter([
  ...homeRoutes,
  ...labRoutes,
  ...industrialRoutes,
]);
