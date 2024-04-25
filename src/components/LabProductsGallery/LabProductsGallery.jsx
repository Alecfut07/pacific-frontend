import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
} from "@material-tailwind/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import LabProduct from "../LabProduct/LabProduct";
import ImagesModal from "../ImagesModal/ImagesModal";
import { LabProducts } from "../../data/LabInventory";

function LabProductsGallery() {
  const [searchProduct, setSearchProduct] = useState("");
  const [labProducts, setLabProducts] = useState(LabProducts);
  const [modalOpen, setModalOpen] = useState(false);
  const [labProductImages, setLabProductImages] = useState(null);

  const openModal = (images) => {
    setLabProductImages(images);
    setModalOpen(true);
  };

  const closeModal = () => {
    setLabProductImages(null);
    setModalOpen(false);
  };

  // Version 6 --> OK
  //   return (
  //     <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3">
  //       {labProducts.map((labProduct) => (
  //         <LabProduct
  //           key={labProduct.id}
  //           product={labProduct}
  //           openModal={openModal}
  //         />
  //       ))}
  //       <ImagesModal
  //         isOpen={modalOpen}
  //         onClose={closeModal}
  //         images={labProductImages}
  //       />
  //     </div>
  //   );

  // Version 7 --> PENDIENTE
  return (
    <div>
      <Card className="h-full w-full">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="flex w-full shrink-0 gap-2 md:w-max">
            <div className="w-full md:w-96">
              <Input
                label="Buscar"
                color="blue"
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                value={searchProduct}
                onChange={(e) => setSearchProduct(e.target.value)}
              />
            </div>
          </div>
        </CardHeader>
        <CardBody>
          <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3">
            {labProducts.map((labProduct) => (
              <LabProduct
                key={labProduct.id}
                product={labProduct}
                openModal={openModal}
              />
            ))}
            <ImagesModal
              isOpen={modalOpen}
              onClose={closeModal}
              images={labProductImages}
            />
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default LabProductsGallery;
