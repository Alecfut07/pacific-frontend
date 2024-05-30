import { Checkbox, Typography } from "@material-tailwind/react";
import Swal from "sweetalert2";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { deleteQuote } from "../../../../services/CotizacionLabService";

import "./DeleteQuote.css";

function DeleteQuote({ quoteData }) {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <>
      <div className="mb-4">
        <label className="mb-1 block font-bold">Folio: {quoteData.folio}</label>
      </div>
      <div className="mb-4">
        <label className="mb-1 block font-bold">
          Cantidad de productos: {quoteData.amount_item}
        </label>
      </div>
      <div className="mb-4">
        <label className="mb-1 block font-bold">
          Precio total con IVA: {quoteData.price_total_iva}
        </label>
      </div>
      <div className="mb-4 flex justify-start font-bold">
        <label className="mb-1 block font-bold">Es aceptado:</label>
        <Checkbox
          checked={quoteData.accepted}
          color={quoteData.accepted && "green"}
          ripple={false}
        />
      </div>
      <div className="mb-4">
        <label className="mb-2 block text-lg font-bold">Productos:</label>
        <Swiper loop={true} pagination={pagination} modules={[Pagination]}>
          {quoteData.additional_info &&
            quoteData.additional_info.map((info, index) => (
              <SwiperSlide key={info.product.url}>
                <div className="rounded-md border p-4 shadow-md">
                  <div className="flex items-center justify-between">
                    <img
                      src={info.product.main_image}
                      alt={info.product.main_image}
                      className="mb-4 h-20 w-20 rounded-md"
                    />
                  </div>
                  <h2 className="mb-2 text-xl font-bold">
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
                      Cantidad disponible: {info.product.quantity_available}
                    </Typography>
                    <Typography className="gray">
                      Categoria Página: {info.product.category_page}
                    </Typography>
                  </div>
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Typography className="gray">
                        Cantidad: {info.product.quantity}
                      </Typography>
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
    </>
  );
}

export default DeleteQuote;
