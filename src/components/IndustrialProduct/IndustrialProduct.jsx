import { useState } from "react";
import { ButtonGroup, Button, Chip } from "@material-tailwind/react";
import {
  PlusCircleIcon,
  MinusCircleIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { updateQuantityAvailableItemLab } from "../../services/ItemLabService";

function IndustrialProduct({ product, openModal, addToCart }) {
  const [quantity, setQuantity] = useState(0);
  const [quantityAvailable, setQuantityAvailable] = useState(
    product.quantity_available,
  );

  const handleDecreaseItemClick = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };
  const handleIncreaseItemClick = () => setQuantity(quantity + 1);

  const verifyQuantityAvailable = async (product, quantity) => {
    if (product.quantity_available <= 0) {
      alert("Este producto no está disponible actualmente.");
      return;
    }

    if (quantity <= 0) {
      alert("Selecciona al menos una unidad del producto.");
      return;
    }

    if (quantity > product.quantity_available) {
      alert("No hay suficiente cantidad disponible para este producto.");
      return;
    }

    const updatedQuantityAvailable = quantityAvailable - quantity;

    setQuantityAvailable(updatedQuantityAvailable);

    await updateQuantityAvailableItemLab(
      product.url,
      product.name,
      product.price,
      product.category,
      product.category_page,
      product.main_image,
      product.description,
      updatedQuantityAvailable,
      product.is_featured,
      product.created_at,
    );

    addToCart(product, quantity);
  };

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
        <div className="flex justify-between gap-x-3">
          <p className="text-base font-bold">${product.price} MXN</p>
          <div className="flex justify-between">
            <Chip
              size="lg"
              color={quantityAvailable !== 0 ? "green" : "red"}
              value={quantityAvailable !== 0 ? "DISPONIBLE" : "NO DISPONIBLE"}
              className="text-black"
            />
            <Chip size="lg" variant="outlined" value={quantityAvailable} />
          </div>
        </div>
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
          onClick={() => verifyQuantityAvailable(product, quantity)}
          disabled={quantity === 0 || product.quantity_available <= 0}
        >
          Agregarlo al carrito
          <ShoppingCartIcon className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}

export default IndustrialProduct;
