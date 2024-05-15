import { Typography } from "@material-tailwind/react";
import LabProductsGallery from "../../../components/LabProductsGallery/LabProductsGallery";
import labInventoryBackgroundImage from "../../../images/LabInventory/LabInventoryPage/lab-inventory-background.png";

function LabInventoryPage({ addToCart }) {
  return (
    <div>
      <div className="relative">
        <img src={labInventoryBackgroundImage} className="w-full" />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="text-center text-white">
            <Typography variant="h1" className="text-3xl font-bold">
              Productos Químicos
            </Typography>
            <Typography variant="lead" className="mt-2">
              Descubre nuestra amplia selección de productos químicos y equipos
              especializados para laboratorio, cuidadosamente organizados y
              listos para satisfacer tus necesidades.
            </Typography>
          </div>
        </div>
      </div>
      <LabProductsGallery addToCart={addToCart} />
    </div>
  );
}

export default LabInventoryPage;
