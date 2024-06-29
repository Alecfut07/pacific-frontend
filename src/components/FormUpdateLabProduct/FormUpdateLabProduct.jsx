import { useState } from "react";
import { Button } from "@material-tailwind/react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import { updateItemLab } from "../../services/ItemLabService";

function FormUpdateLabProduct({ handleOpen, labProduct, updateTableData }) {
  const [file, setFile] = useState(null);

  if (!labProduct) {
    return <div>Loading...</div>; // O cualquier mensaje adecuado
  }

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("El nombre es requerido"),
    price: Yup.string()
      .matches(/^\d+(\.\d{1,2})?$/, "El formato del precio es incorrecto")
      .required("El precio es requerido"),
    category: Yup.string().required("La categoria es requerida"),
    category_page: Yup.string().required(
      "La categoría de la página es requerida",
    ),
    description: Yup.string().required("La descripción es requerida"),
    quantity_available: Yup.string().required(
      "La cantidad disponible es requerida",
    ),
  });

  const initialValues = {
    name: labProduct.name,
    price: labProduct.price,
    category: labProduct.category,
    category_page: labProduct.category_page,
    main_image: labProduct.main_image,
    description: labProduct.description,
    quantity_available: labProduct.quantity_available,
    is_featured: labProduct.is_featured,
  };

  const handleFileChange = (e) => {
    const imageFile = e.target.files[0];
    if (imageFile === undefined || imageFile === null) {
      alert("Por favor, selecciona un archivo.");
      setFile(null);
    } else {
      // Obtener la extension del archivo.
      const extension = imageFile.name.split(".").pop().toLowerCase();
      // Array de extensiones de imagen permitidas.
      const allowedExtensions = ["jpg", "jpeg", "png"];
      // Verificar si la extensión está permitida.
      if (allowedExtensions.includes(extension)) {
        setFile(imageFile);
      } else {
        alert("Por favor, selecciona un archivo de imagen válido.");
        setFile(null);
      }
    }
  };

  const handleSubmit = async (values) => {
    try {
      values.main_image = file;
      await updateItemLab(
        labProduct.url,
        values.name,
        values.price,
        values.category,
        values.category_page,
        values.main_image,
        values.description,
        values.quantity_available,
        values.is_featured,
      );

      // Cerrar el Dialog
      handleOpen();

      // Mostrar mensaje de éxito después de enviar la nueva actualización del producto.
      await Swal.fire({
        icon: "success",
        title: "Actualización del producto con éxito",
        showConfirmButton: true,
      });

      await updateTableData();

      await Swal.fire({
        icon: "success",
        title: "Tabla actualizada con éxito",
        showConfirmButton: true,
      });
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Ocurrió un error al realizar la operación",
        showConfirmButton: true,
      });
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="mb-4">
            <label className="mb-1 block font-bold">Nombre:</label>
            <Field
              type="text"
              name="name"
              className="w-full rounded border px-3 py-2"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="text-red-500"
            />
          </div>
          <div className="mb-4">
            <label className="mb-1 block font-bold">Precio:</label>
            <Field
              type="text"
              name="price"
              placeholder="123.45"
              className="w-full rounded border px-3 py-2"
            />
            <ErrorMessage
              name="price"
              component="div"
              className="text-red-500"
            />
          </div>
          <div className="mb-4">
            <label className="mb-1 block font-bold">Categoria:</label>
            <Field
              type="text"
              name="category"
              className="w-full rounded border px-3 py-2"
            />
            <ErrorMessage
              name="category"
              component="div"
              className="text-red-500"
            />
          </div>
          <div className="mb-4">
            <label>Categoría de la página:</label>
            <Field
              as="select"
              name="category_page"
              className="w-full rounded border px-3 py-2"
            >
              <option value="" selected disabled>
                Seleccione una categoría de la página
              </option>
              <option value="Quimicos">Quimicos</option>
              <option value="Seguridad">Seguridad</option>
              <option value="Herramientas">Herramientas</option>
            </Field>
          </div>
          <div className="mb-4">
            <label className="mb-1 block font-bold">Imágen:</label>
            <input
              type="file"
              name="main_image"
              className="w-full rounded border px-2 py-2"
              onChange={handleFileChange}
            />
            <ErrorMessage
              name="main_image"
              component="div"
              className="text-red-500"
            />
          </div>
          <div className="mb-4">
            <label className="mb-1 block font-bold">Descripción:</label>
            <Field
              type="text"
              name="description"
              className="w-full rounded border px-3 py-2"
            />
            <ErrorMessage
              name="description"
              component="div"
              className="text-red-500"
            />
          </div>
          <div className="mb-4">
            <label className="mb-1 block font-bold">Cantidad disponible:</label>
            <Field
              type="number"
              name="quantity_available"
              className="w-full rounded border px-3 py-2"
            />
            <ErrorMessage
              name="quantity_available"
              component="div"
              className="text-red-500"
            />
          </div>
          <div className="mb-4 flex justify-start">
            <label className="mb-1 block font-bold">Es destacado:</label>
            <Field
              type="checkbox"
              name="is_featured"
              className="ml-4"
              style={{ transform: "scale(2.0)" }}
            />
            <ErrorMessage
              name="is_featured"
              component="div"
              className="text-red-500"
            />
          </div>
          <Button
            variant="gradient"
            color="red"
            className="mr-3"
            onClick={handleOpen}
          >
            Cancelar
          </Button>
          <Button type="submit" variant="gradient" color="green">
            Confirmar
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default FormUpdateLabProduct;
