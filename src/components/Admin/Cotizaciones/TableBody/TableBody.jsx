import {
  Button,
  Checkbox,
  Dialog,
  DialogHeader,
  DialogBody,
  IconButton,
  Typography,
} from "@material-tailwind/react";

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
                    <Button color="amber">Editar</Button>
                  </td>
                  <td className={classes}>
                    <Button color="red">Eliminar</Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        )}
      </table>
    </>
  );
}

export default TableBody;
