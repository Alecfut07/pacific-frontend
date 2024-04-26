import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@material-tailwind/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomNavbar from "./components/CustomNavbar/CustomNavbar";
import CustomFooter from "./components/CustomFooter/CustomFooter";
import LabInventoryPage from "./pages/Lab/LabInventoryPage/LabInventoryPage";
import IndustrialInventoryPage from "./pages/Industrial/IndustrialInventoryPage/IndustrialInventoryPage";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<LabInventoryPage />} />
          <Route path="/lab-inventory" element={<LabInventoryPage />} />
          <Route
            path="/industrial-inventory"
            element={<IndustrialInventoryPage />}
          />
        </Routes>
      </BrowserRouter>
      {/* <CustomFooter /> */}
    </ThemeProvider>
  </React.StrictMode>,
);
