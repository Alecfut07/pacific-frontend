import { useState } from "react";
import { Button } from "@material-tailwind/react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
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
        </Form>
      )}
    </Formik>
  );
}

export default FormUpdateQuote;
