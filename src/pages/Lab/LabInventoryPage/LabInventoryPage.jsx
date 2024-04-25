import LabProductsGallery from "../../../components/LabProductsGallery/LabProductsGallery";
import labInventoryBackgroundImage from "../../../images/LabInventory/LabInventoryPage/lab-inventory-background.jpeg";

function LabInventoryPage() {
  return (
    <div>
      <div className="relative">
        <img src={labInventoryBackgroundImage} className="w-full" />
      </div>
      <LabProductsGallery />
    </div>
  );
}

export default LabInventoryPage;
