import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardHeader, CardBody } from "@material-tailwind/react";
import CustomTabs from "../../../components/CustomTabs/CustomTabs";
import CardBoardBoxesTable from "../../../components/CardBoardBoxesTable/CardBoardBoxesTable";
import IndustrialProductsGallery from "../../../components/IndustrialProductsGallery/IndustrialProductsGallery";
import industrialInventoryBackgroundImage from "../../../images/IndustrialInventory/IndustrialIventoryPage/industrial-inventory-background.png";
import BoxGuidedBanner from "../../../images/CardBoardBoxes/boxguided-banner.jpg";
import labIcon from "../../../images/IndustrialInventory/IndustrialIventoryPage/labIcon_transparent2.png";
import industrialIcon from "../../../images/Home/completo-inventario.jpeg";
import eficiencia from "../../../images/Home/eficiencia.png";

function IndustrialInventoryPage({ addToCart }) {
  const [activeTab, setActiveTab] = useState("Cajas de cartón");

  const navigate = useNavigate();

  const navigateToLabInventory = () => {
    navigate("/lab-inventory");
    // setInventoryType("Inventario de laboratorio");
  };
  const navigateToIndustrialInventory = () => {
    setActiveTab("Productos");
    // setInventoryType("Inventario industrial");
    const targetElement = document.getElementById("industrial-section");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleTabChange = (value) => setActiveTab(value);

  return (
    <div
      className="relative"
      style={{ backgroundImage: `url(${BoxGuidedBanner})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative">
        <img src={industrialInventoryBackgroundImage} className="w-full" />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="text-center text-white">
            <h1 className="text-3xl font-bold">Inventario industrial</h1>
            <p className="mt-2">
              Un inventario completo y organizado de suministros y equipos para
              cosas industriales.
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-8">
        <div className="grid grid-cols-3 items-center gap-4">
          <div className="col-span-1">
            <Card
              className="transition-opacity hover:opacity-50"
              onClick={navigateToLabInventory}
            >
              <img
                className="h-64 w-full object-contain"
                src={labIcon}
                alt="imagen 1"
              />
              <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center opacity-0 transition-opacity hover:opacity-100">
                <div className="bg-white">
                  <p className="text-3xl font-bold text-black">
                    Inventario de laboratorio
                  </p>
                </div>
              </div>
            </Card>
          </div>
          <div className="col-span-1">
            <Card
              className="transition-opacity hover:opacity-50"
              onClick={navigateToIndustrialInventory}
            >
              <img
                className="h-64 w-full object-contain"
                src={industrialIcon}
                alt="imagen 2"
              />
              <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center opacity-0 transition-opacity hover:opacity-100">
                <div className="bg-white">
                  <p className="text-3xl font-bold text-black">
                    Inventario Industrial
                  </p>
                </div>
              </div>
            </Card>
          </div>
          <div className="col-span-1">
            <Card className="transition-opacity hover:opacity-50">
              <img
                className="h-64 w-full object-contain"
                src={eficiencia}
                alt="imagen 3"
              />
              <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center opacity-0 transition-opacity hover:opacity-100">
                <div className="bg-white">
                  <p className="text-3xl font-bold text-black">
                    Tercer inventario
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <IndustrialProductsGallery addToCart={addToCart} />
      </div>
      {/* <div className="mt-12" id="industrial-section">
        <Card>
          <CardHeader>
            <CustomTabs activeTab={activeTab} onChange={handleTabChange} />
          </CardHeader>
          <CardBody>
            {activeTab === "Cajas de cartón" ? (
              <CardBoardBoxesTable />
            ) : (
              <IndustrialProductsGallery addToCart={addToCart} />
            )}
          </CardBody>
        </Card>
      </div> */}
    </div>
  );
}

export default IndustrialInventoryPage;
