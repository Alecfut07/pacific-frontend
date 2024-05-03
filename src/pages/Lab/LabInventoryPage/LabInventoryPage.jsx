import LabProductsGallery from "../../../components/LabProductsGallery/LabProductsGallery";
import labInventoryBackgroundImage from "../../../images/LabInventory/LabInventoryPage/lab-inventory-background.png";

function LabInventoryPage({ addToCart }) {
  return (
    <div>
      <div className="relative">
        <img src={labInventoryBackgroundImage} className="w-full" />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="text-center text-white">
            <h1 className="text-3xl font-bold">Inventario de laboratorio</h1>
            <p className="mt-2">
              Un inventario completo y organizado de suministros y equipos para
              laboratorio.
            </p>
          </div>
        </div>
      </div>
      <LabProductsGallery addToCart={addToCart} />
    </div>
  );
}

export default LabInventoryPage;
