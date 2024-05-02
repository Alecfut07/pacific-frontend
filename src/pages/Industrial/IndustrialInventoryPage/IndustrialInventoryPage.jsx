import { useState } from "react";
import { Card, CardHeader, CardBody } from "@material-tailwind/react";
import CustomTabs from "../../../components/CustomTabs/CustomTabs";
import CardBoardBoxesTable from "../../../components/CardBoardBoxesTable/CardBoardBoxesTable";
import IndustrialProductsGallery from "../../../components/IndustrialProductsGallery/IndustrialProductsGallery";
import industrialInventoryBackgroundImage from "../../../images/IndustrialInventory/IndustrialIventoryPage/industrial-inventory-background.png";
import BoxGuidedBanner from "../../../images/CardBoardBoxes/boxguided-banner.jpg";
import ampliaGama from "../../../images/Home/amplia-gama.png";
import completoInventario from "../../../images/Home/completo-inventario.jpeg";
import eficiencia from "../../../images/Home/eficiencia.png";

function IndustrialInventoryPage({ addToCart }) {
  const [activeTab, setActiveTab] = useState("Cajas de cartón");

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
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-1">
            <Card>
              <img
                className="h-64 w-full object-contain"
                src={ampliaGama}
                alt="imagen 1"
              />
              <CardBody>
                <div className="bg-blue-500 p-4 text-white">
                  <p>
                    Descubre nuestra amplia gama de productos para laboratorio e
                    industria: ¡todo lo que necesitas en un solo lugar!
                  </p>
                </div>
              </CardBody>
            </Card>
          </div>
          <div className="col-span-1">
            <Card>
              <img
                className="h-64 w-full object-contain"
                src={completoInventario}
                alt="imagen 2"
              />
              <CardBody>
                <div className="bg-blue-500 p-4 text-white">
                  <p>
                    Optimiza tu flujo de trabajo con nuestro completo inventario
                    de productos industriales y de laboratorio.
                  </p>
                </div>
              </CardBody>
            </Card>
          </div>
          <div className="col-span-1">
            <Card>
              <img
                className="h-64 w-full object-contain"
                src={eficiencia}
                alt="imagen 3"
              />
              <CardBody>
                <div className="bg-blue-500 p-4 text-white">
                  <p>
                    Eficiencia garantizada: encuentra todo lo que necesitas en
                    nuestro inventario para laboratorio e industria.
                  </p>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
      <div className="mt-12">
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
      </div>
    </div>
  );
}

export default IndustrialInventoryPage;
