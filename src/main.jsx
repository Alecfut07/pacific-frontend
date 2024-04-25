import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@material-tailwind/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomNavbar from "./components/CustomNavbar/CustomNavbar";
import CustomFooter from "./components/CustomFooter/CustomFooter";
import "./index.css";
import HomePage from "./pages/Home/HomePage";
import LabInventoryPage from "./pages/Lab/LabInventoryPage/LabInventoryPage";
import IndustrialInventoryPage from "./pages/Industrial/IndustrialInventoryPage/IndustrialInventoryPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/lab-inventory" element={<LabInventoryPage />} />
          <Route
            path="/industrial-inventory"
            element={<IndustrialInventoryPage />}
          />
        </Routes>
      </BrowserRouter>
      {/* <RouterProvider router={router} /> */}
      {/* <CustomFooter /> */}
    </ThemeProvider>
  </React.StrictMode>,
);
