import React, { useState } from "react";
import { ButtonGroup, Button } from "@material-tailwind/react";
import {
  PlusCircleIcon,
  MinusCircleIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

function IndustrialProduct({ product, openModal, addToCart }) {
  // const [quantity, setQuantity] = useState(product.quantity_available);
  const [quantity, setQuantity] = useState(0);

  const handleDecreaseItemClick = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };
  const handleIncreaseItemClick = () => setQuantity(quantity + 1);

  return (
    <div className={`relative mx-auto flex flex-col`}>
      <img
        className="mx-auto h-40 w-40 rounded-lg border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1 transition duration-300 ease-in-out hover:border-blue-500 hover:brightness-90"
        src={product.main_image}
        alt="gallery-photo"
        onClick={() => openModal(product.main_image)}
      />
      <div className="mx-auto flex flex-grow flex-col justify-between bg-white bg-opacity-75 p-2 mix-blend-multiply">
        <p className="text-lg font-bold">{product.name}</p>
        <p className="text-sm">{product.description}</p>
        <p className="text-base font-bold">${product.price} MXN</p>
      </div>
      <div className="mx-auto flex items-center justify-between">
        <ButtonGroup className="mb-3 flex items-center">
          <Button
            className="rounded-l"
            onClick={() => handleDecreaseItemClick()}
          >
            <MinusCircleIcon className="h-5 w-5" />
          </Button>
          <input className="h-10 w-20 text-center" value={quantity} readOnly />
          <Button
            className="rounded-r"
            onClick={() => handleIncreaseItemClick()}
          >
            <PlusCircleIcon className="h-5 w-5" />
          </Button>
        </ButtonGroup>
      </div>
      <div className="mx-auto flex items-center justify-between">
        <Button
          color="blue"
          className="flex items-center"
          onClick={() => addToCart(product, quantity)}
          disabled={quantity === 0}
        >
          Agregarlo al carrito
          <ShoppingCartIcon className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}

export default IndustrialProduct;
