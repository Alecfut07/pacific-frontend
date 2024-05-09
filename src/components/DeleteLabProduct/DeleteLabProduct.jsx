import { Checkbox } from "@material-tailwind/react";
import { format } from "date-fns";
import { es } from "date-fns/locale";

function DeleteLabProduct({ handleOpen, labProduct }) {
  console.log(labProduct);
  return (
    <>
      <div className="mb-4">
        <label className="mb-1 block font-bold">
          Nombre: {labProduct.name}
        </label>
      </div>
      <div className="mb-4">
        <label className="mb-1 block font-bold">
          Precio: {labProduct.price}
        </label>
      </div>
      <div className="mb-4">
        <label className="mb-1 block font-bold">
          Categoria: {labProduct.category}
        </label>
      </div>
      <div className="mb-4 flex justify-start">
        <label className="mb-1 block font-bold">Imágen:</label>
        <img
          src={labProduct.main_image}
          alt="imagen"
          className="ml-4 w-20 rounded-lg border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
        />
      </div>
      <div className="mb-4">
        <label className="mb-1 block font-bold">
          Descripción: {labProduct.description}
        </label>
      </div>
      <div className="mb-4">
        <label className="mb-1 block font-bold">
          Cantidad disponible: {labProduct.quantity_available}
        </label>
      </div>
      <div className="mb-4 flex justify-start font-bold">
        <label className="mb-1 block font-bold">Es destacado:</label>
        <Checkbox
          checked={labProduct.is_featured}
          color={labProduct.is_featured && "green"}
          ripple={false}
        />
      </div>
      <div className="mb-4 block font-bold">
        <label className="mb-1 block font-bold">
          Creado en:{" "}
          {format(labProduct.created_at, "d 'de' MMMM 'de' yyyy h:mm a", {
            locale: es,
          })}
        </label>
      </div>
    </>
  );
}

export default DeleteLabProduct;
