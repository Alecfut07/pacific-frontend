import React, { useState } from "react";
import { ButtonGroup, Button } from "@material-tailwind/react";
import {
  PlusCircleIcon,
  MinusCircleIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import LabProduct from "../LabProduct/LabProduct";
import ImagesModal from "../ImagesModal/ImagesModal";
import { LabProducts } from "../../data/LabInventory";

function LabProductsGallery() {
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
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
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
  );
}

export default LabProductsGallery;
