import IndustrialProductsGallery from "../../../components/IndustrialProductsGallery/IndustrialProductsGallery";
import industrialInventoryBackgroundImage from "../../../images/IndustrialInventory/IndustrialIventoryPage/industrial-inventory-background.png";

function IndustrialInventoryPage() {
  return (
    <div>
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
      <IndustrialProductsGallery />
    </div>
  );
}

export default IndustrialInventoryPage;
