import {
  Button,
  Checkbox,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import FormUpdateLabProduct from "../FormUpdateLabProduct/FormUpdateLabProduct";
import DeleteLabProduct from "../DeleteLabProduct/DeleteLabProduct";

function TableBody({
  headers,
  currentTableItems,
  fullData,
  handleEditProductClick,
  openEdit,
  handlerEdit,
  handleShowDeleteDialogClick,
  openDelete,
  handlerDelete,
  handleDeleteConfirmClick,
  labProduct,
  updateTableData,
}) {
  return (
    <>
      <table className="w-full table-auto text-left">
        <thead>
          <tr>
            {headers.map((head, index) => (
              <th
                key={index}
                className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
              >
                <Typography
                  variant="lead"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        {currentTableItems && currentTableItems.length === 0 ? (
          <tbody>
            <tr>
              <td>
                <p>No se encontraron resultados para la búsqueda actual.</p>
              </td>
            </tr>
          </tbody>
        ) : (
          <tbody>
            {currentTableItems &&
              currentTableItems.map((item, index) => {
                const isLast = fullData && index === fullData.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={index} className="even:bg-blue-gray-50/50">
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {item.name}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {item.price}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {item.category_page}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <img
                        src={item.main_image}
                        alt="imagen"
                        className="mx-auto w-20 rounded-lg border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                      />
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {item.description}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {item.quantity_available}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Checkbox
                        checked={item.is_featured}
                        color={item.is_featured && "green"}
                        ripple={false}
                      />
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {format(
                          item.created_at,
                          "d 'de' MMMM 'de' yyyy h:mm a",
                          {
                            locale: es,
                          },
                        )}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Button
                        color="amber"
                        onClick={() => handleEditProductClick(item.url)}
                      >
                        Editar
                      </Button>
                    </td>
                    <td className={classes}>
                      <Button
                        color="red"
                        onClick={() => handleShowDeleteDialogClick(item.url)}
                      >
                        Eliminar
                      </Button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        )}
      </table>
      <Dialog
        open={openEdit}
        handler={handlerEdit}
        size="lg"
        className="fixed inset-0 overflow-y-auto"
      >
        <DialogHeader className="justify-between">
          <Typography variant="h5" color="blue-gray">
            Editar producto de laboratorio
          </Typography>
          <IconButton
            color="red"
            size="sm"
            variant="text"
            onClick={handlerEdit}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </DialogHeader>
        <DialogBody>
          <FormUpdateLabProduct
            handleOpen={handlerEdit}
            labProduct={labProduct}
            updateTableData={updateTableData}
          />
        </DialogBody>
      </Dialog>
      <Dialog open={openDelete} handler={handlerDelete}>
        <DialogHeader>Eliminar producto de laboratorio</DialogHeader>
        <DialogBody>
          <DeleteLabProduct labProduct={labProduct} />
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handlerDelete}
            className="mr-1"
          >
            <span>Cancelar</span>
          </Button>
          <Button
            variant="gradient"
            color="green"
            onClick={() => handleDeleteConfirmClick(labProduct.url)}
          >
            <span>Confirmar</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export default TableBody;
