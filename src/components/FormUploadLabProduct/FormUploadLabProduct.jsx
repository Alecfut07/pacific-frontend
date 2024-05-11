import { useState } from "react";
import { Button } from "@material-tailwind/react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { createNewItemLab } from "../../services/ItemLabService";

function FormUploadLabProduct({ handleOpen }) {
  const [file, setFile] = useState(null);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("El nombre es requerido"),
    price: Yup.string()
      .matches(/^\d+(\.\d{1,2})?$/, "El formato del precio es incorrecto")
      .required("El precio es requerido"),
    category: Yup.string().required("La categoria es requerida"),
    description: Yup.string().required("La descripción es requerida"),
    quantity_available: Yup.string().required(
      "La cantidad disponible es requerida",
    ),
  });

  const initialValues = {
    name: "",
    price: "",
    category: "",
    main_image: null,
    description: "",
    quantity_available: "",
    is_featured: false,
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
    values.main_image = file;
    try {
      await createNewItemLab(
        values.name,
        values.price,
        values.category,
        values.main_image,
        values.description,
        values.quantity_available,
        values.is_featured,
      );
      handleOpen();
      window.location.reload();
    } catch (error) {
      console.log(error);
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

export default FormUploadLabProduct;
