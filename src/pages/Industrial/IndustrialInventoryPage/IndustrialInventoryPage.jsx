import IndustrialProductsGallery from "../../../components/IndustrialProductsGallery/IndustrialProductsGallery";
import industrialInventoryBackgroundImage from "../../../images/IndustrialInventory/IndustrialIventoryPage/industrial-inventory-background.png";

function IndustrialInventoryPage() {
  return (
    <div>
      <div className="relative">
        <img src={industrialInventoryBackgroundImage} className="w-full" />
      </div>
      <IndustrialProductsGallery />
    </div>
  );
}

export default IndustrialInventoryPage;
