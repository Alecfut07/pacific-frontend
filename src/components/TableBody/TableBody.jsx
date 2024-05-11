import { Button, Checkbox, Typography } from "@material-tailwind/react";
import { format } from "date-fns";
import { es } from "date-fns/locale";

function TableBody({ headers, currentTableItems, fullData }) {
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
        {currentTableItems.length === 0 ? (
          <tbody>
            <tr>
              <td>
                <p>No se encontraron resultados para la búsqueda actual.</p>
              </td>
            </tr>
          </tbody>
        ) : (
          <tbody>
            {currentTableItems.map((item, index) => {
              const isLast = index === fullData.length - 1;
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
                      {item.category}
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
                      {format(item.created_at, "d 'de' MMMM 'de' yyyy h:mm a", {
                        locale: es,
                      })}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Button
                      color="amber"
                      // onClick={() => handleEditClick(item.url)}
                    >
                      Editar
                    </Button>
                  </td>
                  <td className={classes}>
                    <Button
                      color="red"
                      // onClick={() => handleShowDeleteDialogClick(item.url)}
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
    </>
  );
}

export default TableBody;
