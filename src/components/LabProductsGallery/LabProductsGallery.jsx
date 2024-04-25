import React, { useState } from "react";
import { LabProducts } from "../../data/LabInventory";
import ImagesModal from "../ImagesModal/ImagesModal";

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

  // Version 1 --> OK
  //   return (
  //     <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
  //       {labProducts.map((labProduct) => (
  //         <div key={labProduct.id} className="relative h-40 w-40">
  //           <img
  //             className="absolute left-0 top-0 h-full w-full rounded-lg object-cover"
  //             src={labProduct.images[0]}
  //             alt="gallery-photo"
  //           />
  //           <p>{labProduct.name}</p>
  //           <p>{labProduct.description}</p>
  //           <p>{labProduct.price}</p>
  //         </div>
  //       ))}
  //     </div>
  //   );

  // Version 2 --> Pendiente
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {labProducts.map((labProduct) => (
        <div key={labProduct.id} className="relative flex flex-col">
          <img
            className="h-40 w-40 rounded-lg object-cover"
            src={labProduct.images[0]}
            alt="gallery-photo"
            onClick={() => openModal(labProduct.images)}
          />
          <div className="flex flex-grow flex-col justify-between bg-white p-2">
            <p className="text-lg font-bold">{labProduct.name}</p>
            <p className="text-sm">{labProduct.description}</p>
            <p className="text-base font-bold">${labProduct.price} MXN</p>
          </div>
        </div>
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
