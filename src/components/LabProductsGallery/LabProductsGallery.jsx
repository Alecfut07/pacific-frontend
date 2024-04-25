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

  const [amount, setAmount] = useState(0);

  const openModal = (images) => {
    setLabProductImages(images);
    setModalOpen(true);
  };

  const closeModal = () => {
    setLabProductImages(null);
    setModalOpen(false);
  };

  const handleDecreaseItemClick = () => {
    if (amount !== 0) setAmount(amount - 1);
  };
  const handleIncreaseItemClick = () => setAmount(amount + 1);

  // Version 4 --> OK
  //   return (
  //     <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
  //       {labProducts.map((labProduct, index) => (
  //         <div
  //           key={labProduct.id}
  //           className={`relative flex flex-col${index % 3 === 2 ? " border-r border-gray-300" : ""}`}
  //         >
  //           <img
  //             className="h-40 w-40 rounded-lg border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1 transition duration-300 ease-in-out hover:border-blue-500 hover:brightness-90"
  //             src={labProduct.images[0]}
  //             alt="gallery-photo"
  //             onClick={() => openModal(labProduct.images)}
  //           />
  //           <div className="flex flex-grow flex-col justify-between bg-white p-2">
  //             <p className="text-lg font-bold">{labProduct.name}</p>
  //             <p className="text-sm">{labProduct.description}</p>
  //             <p className="text-base font-bold">${labProduct.price} MXN</p>
  //           </div>
  //           <div className="flex items-center justify-between">
  //             <ButtonGroup>
  //               <Button>-</Button>
  //               <Input value={0} />
  //               <Button>+</Button>
  //             </ButtonGroup>
  //           </div>
  //           <div className="flex items-center justify-between">
  //             <Button color="blue" className="flex items-center">
  //               Agregarlo al carrito
  //               <ShoppingCartIcon className="ml-2 h-5 w-5" />
  //             </Button>
  //           </div>
  //         </div>
  //       ))}
  //       <ImagesModal
  //         isOpen={modalOpen}
  //         onClose={closeModal}
  //         images={labProductImages}
  //       />
  //     </div>
  //   );

  // Version 5 --> PENDIENTE
  //   return (
  //     <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
  //       {labProducts.map((labProduct, index) => (
  //         <div
  //           key={labProduct.id}
  //           className={`relative flex flex-col${index % 3 === 2 ? " border-r border-gray-300" : ""}`}
  //         >
  //           <img
  //             className="h-40 w-40 rounded-lg border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1 transition duration-300 ease-in-out hover:border-blue-500 hover:brightness-90"
  //             src={labProduct.images[0]}
  //             alt="gallery-photo"
  //             onClick={() => openModal(labProduct.images)}
  //           />
  //           <div className="flex flex-grow flex-col justify-between bg-white p-2">
  //             <p className="text-lg font-bold">{labProduct.name}</p>
  //             <p className="text-sm">{labProduct.description}</p>
  //             <p className="text-base font-bold">${labProduct.price} MXN</p>
  //           </div>
  //           <div className="flex items-center justify-between">
  //             <ButtonGroup className="mb-3 flex items-center">
  //               <Button
  //                 className="rounded-l"
  //                 onClick={() => handleDecreaseItemClick()}
  //               >
  //                 <MinusCircleIcon className="h-5 w-5" />
  //               </Button>
  //               <input className="h-10 w-20 text-center" value={amount} />
  //               <Button
  //                 className="rounded-r"
  //                 onClick={() => handleIncreaseItemClick()}
  //               >
  //                 <PlusCircleIcon className="h-5 w-5" />
  //               </Button>
  //             </ButtonGroup>
  //           </div>
  //           <div className="flex items-center justify-between">
  //             <Button color="blue" className="flex items-center">
  //               Agregarlo al carrito
  //               <ShoppingCartIcon className="ml-2 h-5 w-5" />
  //             </Button>
  //           </div>
  //         </div>
  //       ))}
  //       <ImagesModal
  //         isOpen={modalOpen}
  //         onClose={closeModal}
  //         images={labProductImages}
  //       />
  //     </div>
  //   );

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
