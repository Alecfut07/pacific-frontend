import { useState } from "react";
import { Button, IconButton, Typography } from "@material-tailwind/react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { updateQuote } from "../../../../services/CotizacionLabService";
import { TrashIcon } from "@heroicons/react/24/outline";

function FormUpdateQuote({ toggleEditDialog, quoteData, updateTableData }) {
  const initialValues = {
    folio: quoteData.folio,
    amount_item: quoteData.amount_item,
    price_total_iva: quoteData.price_total_iva,
    accepted: quoteData.accepted,
    additional_info: [...quoteData.additional_info],
    items_lab: [...quoteData.items_lab],
  };

  const handleSubmit = (values) => {
    console.log("values: ", values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form>
          <div className="mb-4">
            <label className="mb-1 block font-bold">Folio:</label>
            <Field
              type="text"
              name="folio"
              className="w-full rounded border px-3 py-2"
            />
            <ErrorMessage
              name="folio"
              component="div"
              className="text-red-500"
            />
          </div>
          <div className="mb-4">
            <label>Cantidad de productos:</label>
            <Field
              type="text"
              name="amount_item"
              className="w-full rounded border px-3 py-2"
            />
            <ErrorMessage
              name="amount_item"
              component="div"
              className="text-red-500"
            />
          </div>
          <div className="mb-4">
            <label>Precio total con IVA</label>
            <Field
              type="text"
              name="price_total_iva"
              className="w-full rounded border px-3 py-2"
            />
            <ErrorMessage
              name="price_total_iva"
              component="div"
              className="text-red-500"
            />
          </div>
          <div className="mb-4 flex justify-start">
            <label className="mb-1 block font-bold">Es aceptado:</label>
            <Field
              type="checkbox"
              name="accepted"
              className="ml-4"
              style={{ transform: "scale(2.0)" }}
            />
            <ErrorMessage
              name="accepted"
              component="div"
              className="text-red-500"
            />
          </div>
          <div className="mb-4">
            <label className="mb-2 block text-lg font-bold">Productos:</label>
            <Swiper>
              {quoteData.additional_info.map((info) => (
                <SwiperSlide key={info.product.url}>
                  <div className="rounded-md border p-4 shadow-md">
                    <div className="flex items-center justify-between">
                      <img
                        src={info.product.main_image}
                        alt={info.product.main_image}
                        className="mb-4 h-20 w-20 rounded-md"
                      />
                      <IconButton variant="text" color="red">
                        <TrashIcon className="h-7 w-7" />
                      </IconButton>
                    </div>
                    <h2 className="fond-bold mb-2 text-xl">
                      {info.product.name}
                    </h2>
                    <p className="mb-2 text-gray-700">
                      {info.product.description}
                    </p>
                    <p className="text-lg font-semibold">
                      Precio: ${info.product.price}
                    </p>
                    <p className="text-lg font-semibold">
                      Precio con IVA (16%): ${info.product.price_iva}
                    </p>
                    <p className="text-lg font-semibold">
                      Subtotal: ${info.product.subtotal}
                    </p>
                    <div className="flex items-center justify-between">
                      <Typography className="gray">
                        Cantidad disponible: {info.product.quantity_available}
                      </Typography>
                      <Typography className="gray">
                        Categoria Página: {info.product.category_page}
                      </Typography>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Typography color="gray">Cantidad:</Typography>
                        <input
                          type="number"
                          value={info.product.quantity}
                          className="w-16 rounded-md border border-blue-gray-300 px-2 py-1"
                        />
                      </div>
                      <Typography className="gray">
                        Creado en:{" "}
                        {format(
                          info.product.created_at,
                          "d 'de' MMMM 'de' yyyy h:mm a",
                          {
                            locale: es,
                          },
                        )}
                      </Typography>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="mt-12 flex justify-start">
            <Button
              variant="gradient"
              color="red"
              className="mr-3"
              onClick={toggleEditDialog}
            >
              Cancelar
            </Button>
            <Button type="submit" variant="gradient" color="green">
              Confirmar
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default FormUpdateQuote;
