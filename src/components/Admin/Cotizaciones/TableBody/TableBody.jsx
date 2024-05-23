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
import FormUpdateQuote from "../FormUpdateQuote/FormUpdateQuote";

function TableBody({
  headers,
  currentQuotesData,
  fullData,
  openEditDialog,
  toggleEditDialog,
  handleEditQuoteClick,
  openDeleteDialog,
  toggleDeleteDialog,
  handleShowDeleteDialogClick,
  handleDeleteConfirmClick,
  quoteData,
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
        {currentQuotesData.length === 0 ? (
          <tbody>
            <tr>
              <td>
                <p>No se encontraron resultados para la búsqueda actual.</p>
              </td>
            </tr>
          </tbody>
        ) : (
          <tbody>
            {currentQuotesData.map((quote, index) => {
              const isLast = index === fullData.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={index} className="even:bg-blue-gray-50/50">
                  <td className={classes}>
                    <Typography>{quote.folio}</Typography>
                  </td>
                  <td className={classes}>
                    <Typography>{quote.amount_item}</Typography>
                  </td>
                  <td className={classes}>
                    <Typography>{quote.price_total_iva}</Typography>
                  </td>
                  <td className={classes}>
                    <Checkbox
                      checked={quote.accepted}
                      color={quote.accepted && "green"}
                      ripple={false}
                    />
                  </td>
                  <td className={classes}>
                    <Button
                      color="amber"
                      onClick={() => handleEditQuoteClick(quote.url)}
                    >
                      Editar
                    </Button>
                  </td>
                  <td className={classes}>
                    <Button
                      color="red"
                      onClick={() => handleShowDeleteDialogClick(quote.url)}
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
        open={openEditDialog}
        handler={toggleEditDialog}
        size="lg"
        className="fixed inset-0 overflow-y-auto"
      >
        <DialogHeader className="justify-between">
          <Typography variant="h5" color="blue-gray">
            Editar cotización
          </Typography>
          <IconButton
            color="red"
            size="sm"
            variant="text"
            onClick={toggleEditDialog}
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
          <FormUpdateQuote
            toggleEditDialog={toggleEditDialog}
            quoteData={quoteData}
            updateTableData={updateTableData}
          />
        </DialogBody>
      </Dialog>
      <Dialog open={openDeleteDialog} handler={toggleDeleteDialog}>
        <DialogHeader>Eliminar cotización</DialogHeader>
        <DialogBody></DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={toggleDeleteDialog}
            className="mr-1"
          >
            <span>Cancelar</span>
          </Button>
          <Button
            variant="gradient"
            color="green"
            onClick={() => handleDeleteConfirmClick(quoteData.url)}
          >
            <span>Confirmar</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export default TableBody;
