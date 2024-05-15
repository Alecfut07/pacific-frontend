import IndustrialProductsGallery from "../../../components/IndustrialProductsGallery/IndustrialProductsGallery";
import industrialInventoryBackgroundImage from "../../../images/IndustrialInventory/IndustrialIventoryPage/industrial-inventory-background.png";

function IndustrialInventoryPage({ addToCart }) {
  return (
    <div>
      <div className="relative">
        <img src={industrialInventoryBackgroundImage} className="w-full" />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="text-center text-white">
            <h1 className="text-3xl font-bold">Herramientas Industriales</h1>
            <p className="mt-2">
              Descubre nuestra amplia gama de herramientas industriales y
              equipos especializados, meticulosamente organizados para ayudarte
              a potenciar tus proyectos y operaciones industriales.
            </p>
          </div>
        </div>
      </div>
      <IndustrialProductsGallery addToCart={addToCart} />
    </div>
  );
}

export default IndustrialInventoryPage;
