import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardHeader, CardBody } from "@material-tailwind/react";
import IndustrialProductsGallery from "../../../components/IndustrialProductsGallery/IndustrialProductsGallery";
import industrialInventoryBackgroundImage from "../../../images/IndustrialInventory/IndustrialIventoryPage/industrial-inventory-background.png";
import BoxGuidedBanner from "../../../images/CardBoardBoxes/boxguided-banner.jpg";
import LabIconAnimation from "../../../images/IndustrialInventory/IndustrialIventoryPage/LabIconAnimation.gif";
import IndustrialIconAnimation from "../../../images/IndustrialInventory/IndustrialIventoryPage/IndustrialIconAnimation.gif";
import SecurityIconAnimation from "../../../images/IndustrialInventory/IndustrialIventoryPage/SecurityIconAnimation.gif";

function IndustrialInventoryPage({ addToCart }) {
  const navigate = useNavigate();

  const navigateToLabInventory = () => {
    navigate("/lab-inventory");
    // setInventoryType("Inventario de laboratorio");
  };
  const navigateToIndustrialInventory = () => {
    // setInventoryType("Inventario industrial");
    const targetElement = document.getElementById("industrial-section");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

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
              <CardHeader floated={false} shadow={false}>
                <p className="text-center text-3xl font-bold text-black">
                  Productos Químicos
                </p>
              </CardHeader>
              <CardBody>
                <img
                  className="h-64 w-full object-contain"
                  src={LabIconAnimation}
                  alt="imagen 1"
                />
              </CardBody>
            </Card>
          </div>
          <div className="col-span-1">
            <Card
              className="transition-opacity hover:opacity-50"
              onClick={navigateToIndustrialInventory}
            >
              <CardHeader floated={false} shadow={false}>
                <p className="text-center text-3xl font-bold text-black">
                  Herramientas Industrial
                </p>
              </CardHeader>
              <CardBody>
                <img
                  className="h-64 w-full object-contain"
                  src={IndustrialIconAnimation}
                  alt="imagen 2"
                />
              </CardBody>
            </Card>
          </div>
          <div className="col-span-1">
            <Card className="transition-opacity hover:opacity-50">
              <CardHeader floated={false} shadow={false}>
                <p className="text-center text-3xl font-bold text-black">
                  Seguridad Industrial
                </p>
              </CardHeader>
              <CardBody>
                <img
                  className="h-64 w-full object-contain"
                  src={SecurityIconAnimation}
                  alt="imagen 3"
                />
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
      <div id="industrial-section" className="mt-8">
        <IndustrialProductsGallery addToCart={addToCart} />
      </div>
    </div>
  );
}

export default IndustrialInventoryPage;
