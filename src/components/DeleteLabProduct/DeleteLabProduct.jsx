function DeleteLabProduct({ handleOpen, labProduct }) {
  return (
    <>
      <div className="mb-4">
        <label className="mb-1 block font-bold">URL: {labProduct.url}</label>
      </div>
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
      <div className="mb-4">
        <label className="mb-1 block font-bold">
          Imágen: {labProduct.main_image}
        </label>
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
      <div className="mb-4 block font-bold">
        <label className="mb-1 block font-bold">
          Es destacado: {labProduct.is_featured}
        </label>
      </div>
      <div className="mb-4 block font-bold">
        <label className="mb-1 block font-bold">
          Creado en: {labProduct.created_at}
        </label>
      </div>
    </>
  );
}

export default DeleteLabProduct;
