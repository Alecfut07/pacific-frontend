import React, { useState } from "react";
import { ButtonGroup, Button } from "@material-tailwind/react";
import {
  PlusCircleIcon,
  MinusCircleIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

function LabProduct({ product, openModal }) {
  const [amount, setAmount] = useState(0);

  const handleDecreaseItemClick = () => {
    if (amount !== 0) setAmount(amount - 1);
  };
  const handleIncreaseItemClick = () => setAmount(amount + 1);

  return (
    <div className={`relative mx-auto flex flex-col`}>
      <img
        className="mx-auto h-40 w-40 rounded-lg border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1 transition duration-300 ease-in-out hover:border-blue-500 hover:brightness-90"
        src={product.images[0]}
        alt="gallery-photo"
        onClick={() => openModal(product.images)}
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
          <input className="h-10 w-20 text-center" value={amount} />
          <Button
            className="rounded-r"
            onClick={() => handleIncreaseItemClick()}
          >
            <PlusCircleIcon className="h-5 w-5" />
          </Button>
        </ButtonGroup>
      </div>
      <div className="mx-auto flex items-center justify-between">
        <Button color="blue" className="flex items-center">
          Agregarlo al carrito
          <ShoppingCartIcon className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}

export default LabProduct;
