import { useState } from "react";
import { Button } from "@material-tailwind/react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { updateQuote } from "../../../../services/CotizacionLabService";

function FormUpdateQuote({ toggleEditDialog, quoteData, updateTableData }) {
  const initialValues = {
    folio: quoteData.folio,
    amount_item: quoteData.amount_item,
    price_total_iva: quoteData.price_total_iva,
    accepted: quoteData.accepted,
    additional_info: [...quoteData.additional_info],
    items_lab: [...quoteData.items_lab],
  };

  return (
    <Formik initialValues={initialValues}>
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
                    <img
                      src={info.product.main_image}
                      alt={info.product.main_image}
                      className="mb-4 h-20 w-20 rounded-md"
                    />
                    <h2 className="fond-bold mb-2 text-xl">
                      {info.product.name}
                    </h2>
                    <p className="mb-2 text-gray-700">
                      {info.product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold">
                        {info.product.price}
                      </span>
                      <span className="text-sm text-gray-500">
                        {info.product.category_page}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {info.product.quantity_available}
                      </span>
                      <span className="text-sm text-gray-500">
                        {format(
                          info.product.created_at,
                          "d 'de' MMMM 'de' yyyy h:mm a",
                          {
                            locale: es,
                          },
                        )}
                      </span>
                    </div>
                  </div>
                  <label>{info.product.price_iva}</label>
                  <label>{info.product.quantity}</label>
                  <label>{info.product.subtotal}</label>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default FormUpdateQuote;
