import { Typography } from "@material-tailwind/react";
import IndustrialProductsGallery from "../../../components/IndustrialProductsGallery/IndustrialProductsGallery";
import ToolsProductsBackground from "../../../images/IndustrialInventory/IndustrialIventoryPage/tools-products-background.jpg";

function IndustrialInventoryPage({ addToCart }) {
  return (
    <div>
      <div className="relative">
        <img src={ToolsProductsBackground} className="w-full" />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="text-center text-white">
            <Typography variant="h1" className="text-3xl font-bold">
              Herramientas Industriales
            </Typography>
            <Typography variant="lead" className="mt-2">
              Descubre nuestra amplia gama de herramientas industriales y
              equipos especializados, meticulosamente organizados para ayudarte
              a potenciar tus proyectos y operaciones industriales.
            </Typography>
          </div>
        </div>
      </div>
      <IndustrialProductsGallery addToCart={addToCart} />
    </div>
  );
}

export default IndustrialInventoryPage;
