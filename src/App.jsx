import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import CustomNavbar from "./components/CustomNavbar/CustomNavbar";
import CustomDrawer from "./components/CustomDrawer/CustomDrawer";
import LabInventoryPage from "./pages/Lab/LabInventoryPage/LabInventoryPage";
import IndustrialInventoryPage from "./pages/Industrial/IndustrialInventoryPage/IndustrialInventoryPage";

function App() {
  const [openDrawer, setOpenDrawer] = useState(false);

  const openDrawerTop = () => setOpenDrawer(true);

  const closeDrawerTop = () => setOpenDrawer(false);
  return (
    <>
      <CustomNavbar openDrawerTop={openDrawerTop} />
      <CustomDrawer
        placement="top"
        open={openDrawer}
        onClose={closeDrawerTop}
      />
      <Routes>
        <Route path="/" element={<LabInventoryPage />} />
        <Route path="/lab-inventory" element={<LabInventoryPage />} />
        <Route
          path="/industrial-inventory"
          element={<IndustrialInventoryPage />}
        />
      </Routes>
      {/* <CustomFooter /> */}
    </>
  );
}

export default App;
