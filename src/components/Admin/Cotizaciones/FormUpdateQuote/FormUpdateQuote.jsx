import { useState, useEffect } from "react";
import { Button, IconButton, Typography } from "@material-tailwind/react";
import { Formik, Field, FieldArray, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { updateQuote } from "../../../../services/CotizacionLabService";
import { TrashIcon } from "@heroicons/react/24/outline";

function FormUpdateQuote({ toggleEditDialog, quoteData, updateTableData }) {
  // const validationSchema = Yup.object().shape({
  //   folio: Yup.string().required("Folio es requerido"),
  //   accepted: Yup.boolean(),
  //   additional_info: Yup.array().of(
  //     Yup.object().shape({
  //       product: Yup.object().shape({
  //         quantity: Yup.number().required("Cantidad es requerida"),
  //       }),
  //     }),
  //   ),
  // });

  // const initialValues = {
  //   folio: quoteData.folio,
  //   amount_item: quoteData.amount_item,
  //   price_total_iva: quoteData.price_total_iva,
  //   accepted: quoteData.accepted,
  //   additional_info: [...quoteData.additional_info],
  //   items_lab: [...quoteData.items_lab],
  // };

  const initialValues = {
    folio: quoteData.folio,
    amount_item: quoteData.additional_info.reduce(
      (sum, info) => sum + (info.product.quantity || 1),
      0,
    ),
    price_total_iva: quoteData.additional_info
      .reduce(
        (sum, info) => sum + info.product.quantity * info.product.price_iva,
        0,
      )
      .toFixed(2),
    accepted: quoteData.accepted,
    additional_info: quoteData.additional_info.map((info) => ({
      product: {
        ...info.product,
        quantity: info.product.quantity || 1,
        subtotal: info.product.quantity * info.product.price_iva,
      },
    })),
    items_lab: [...quoteData.items_lab],
  };

  const calculateValues = (values) => {
    const amountItem = values.additional_info.reduce(
      (sum, info) => sum + info.product.quantity,
      0,
    );

    const priceTotalIva = values.additional_info
      .reduce(
        (sum, info) => sum + info.product.quantity * info.product.price_iva,
        0,
      )
      .toFixed(2);

    return { amountItem, priceTotalIva };
  };

  const handleSubmit = async (values) => {
    console.log("values: ", values);
    try {
      await updateQuote(
        quoteData.url,
        values.folio,
        values.amount_item,
        values.price_total_iva,
        values.accepted,
        values.additional_info,
        values.items_lab,
      );
      Swal.fire({
        icon: "success",
        title: "Cotización actualizada",
        showConfirmButton: true,
      });
      updateTableData();
      toggleEditDialog();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo actualizar la cotización",
        showConfirmButton: true,
      });
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ values, isSubmitting, setFieldValue }) => {
        useEffect(() => {
          const { amountItem, priceTotalIva } = calculateValues(values);
          setFieldValue("amount_item", amountItem, false);
          setFieldValue("price_total_iva", priceTotalIva, false);
        }, [values.additional_info, setFieldValue]);

        return (
          <Form>
            <div className="mb-4">
              <label className="mb-1 block font-bold">Folio:</label>
              <Field
                type="text"
                name="folio"
                className="w-full rounded border px-3 py-2"
                disabled
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
                disabled
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
                disabled
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
              <FieldArray name="additional_info">
                {({ remove, form }) => (
                  <Swiper>
                    {values.additional_info.map((info, index) => (
                      <SwiperSlide key={info.product.url}>
                        <div className="rounded-md border p-4 shadow-md">
                          <div className="flex items-center justify-between">
                            <img
                              src={info.product.main_image}
                              alt={info.product.main_image}
                              className="mb-4 h-20 w-20 rounded-md"
                            />
                            <IconButton
                              variant="text"
                              color="red"
                              onClick={() => remove(index)}
                            >
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
                            Precio con IVA (16%): $
                            {(
                              info.product.quantity *
                              info.product.price *
                              1.16
                            ).toFixed(2)}
                          </p>
                          <p className="text-lg font-semibold">
                            Subtotal: $
                            {(
                              info.product.quantity *
                              info.product.price *
                              1.16
                            ).toFixed(2)}
                          </p>
                          <div className="flex items-center justify-between">
                            <Typography className="gray">
                              Cantidad disponible:{" "}
                              {info.product.quantity_available}
                            </Typography>
                            <Typography className="gray">
                              Categoria Página: {info.product.category_page}
                            </Typography>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1">
                              <Typography color="gray">Cantidad:</Typography>
                              <Field
                                type="number"
                                name={`additional_info[${index}].product.quantity`}
                                className="w-16 rounded-md border border-blue-gray-300 px-2 py-1"
                                onChange={(e) => {
                                  const quantity = parseInt(e.target.value, 10);
                                  setFieldValue(
                                    `additional_info[${index}].product.quantity`,
                                    quantity,
                                  );
                                }}
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
                )}
              </FieldArray>
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
        );
      }}
    </Formik>
  );
}

export default FormUpdateQuote;
