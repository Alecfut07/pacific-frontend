import { useState, useEffect, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  IconButton,
  Input,
  Typography,
  Checkbox,
} from "@material-tailwind/react";
import moment from "moment";
// import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import { headers } from "../../../data/AdminLabProductsTable";
import {
  getItemsLab,
  getItemLab,
  deleteItemLab,
} from "../../../services/ItemLabService";
import { logout } from "../../../services/UserService";
import FormUploadLabProduct from "../../../components/FormUploadLabProduct/FormUploadLabProduct";
import FormUpdateLabProduct from "../../../components/FormUpdateLabProduct/FormUpdateLabProduct";
import DeleteLabProduct from "../../../components/DeleteLabProduct/DeleteLabProduct";

function LabProductsPage() {
  const [searchProduct, setSearchProduct] = useState("");
  const [tableItemsLab, setTableItemsLab] = useState([]);
  const [fullData, setFullData] = useState([]);
  const [labProduct, setLabProduct] = useState({});

  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const [openCreateDialog, setOpenCreateDialog] = useState(false);
  const handleOpenCreateDialog = () => setOpenCreateDialog(!openCreateDialog);

  const [openEditDialog, setOpenEditDialog] = useState(false);
  const handleOpenEditDialog = () => setOpenEditDialog(!openEditDialog);

  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const handleDeleteDialog = () => setOpenDeleteDialog(!openDeleteDialog);

  const [selectedEntriesValue, setSelectedEntriesValue] = useState(10);

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(tableItemsLab.length / selectedEntriesValue);

  const numberOfPages = [];

  for (let page = 1; page <= totalPages; page++) {
    numberOfPages.push(page);
  }

  const handleFirstPage = () => setCurrentPage(1);

  const handlePreviousPage = () => setCurrentPage(currentPage - 1);

  const handlePageClick = (pageNumber) => setCurrentPage(pageNumber);

  const handleNextPage = () => setCurrentPage(currentPage + 1);

  const handleLastPage = () => setCurrentPage(totalPages);

  const handleSelectionChange = (e) => {
    setSelectedEntriesValue(e.target.value);
    setCurrentPage(1);
  };

  const handleEditClick = async (url) => {
    try {
      const itemLab = await getItemLab(url);
      console.log("itemLab: ", itemLab);
      setLabProduct(itemLab);
      handleOpenEditDialog();
    } catch (error) {
      console.log(error);
    }
  };

  const handleShowDeleteDialogClick = async (url) => {
    try {
      const itemLab = await getItemLab(url);
      console.log("itemLab: ", itemLab);
      setLabProduct(itemLab);
      handleDeleteDialog();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteConfirmClick = async (url) => {
    try {
      await deleteItemLab(url);
      setTableItemsLab((prevItems) =>
        prevItems.filter((item) => item.url !== url),
      );
      handleDeleteDialog();
    } catch (error) {
      console.log(error);
    }
  };

  const filterFunction = useCallback(
    (data) => {
      return data.filter(
        (item) =>
          item.name.toLowerCase().includes(searchProduct.toLowerCase()) ||
          item.description.toLowerCase().includes(searchProduct.toLowerCase()),
      );
    },
    [searchProduct],
  );

  const currentTableItemsLab = useMemo(() => {
    const filteredData = filterFunction(tableItemsLab);

    const firstPageIndex = (currentPage - 1) * selectedEntriesValue;
    const lastPageIndex = firstPageIndex + selectedEntriesValue;

    return filteredData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, selectedEntriesValue, tableItemsLab, filterFunction]);

  const handleSignOutClick = async () => {
    await logout();
    navigate("/admin");
  };

  useEffect(() => {
    (async () => {
      try {
        const itemsLab = await getItemsLab();
        setTableItemsLab(itemsLab);
        setFullData(itemsLab);
        setLoading(false);
      } catch (error) {
        setTableItemsLab([]);
        setFullData([]);
      }
    })();
  }, []);

  return (
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <Typography
              variant="h5"
              color="blue-gray"
              className="mb-5 font-bold"
            >
              Admin - Inventario productos de laboratorio
            </Typography>
            <Button color="black" className="mr-5" onClick={handleSignOutClick}>
              Cerrar sesión
            </Button>
            <Button
              color="blue"
              className="mb-0"
              onClick={handleOpenCreateDialog}
            >
              Crear nuevo producto lab
            </Button>
            <Dialog
              open={openCreateDialog}
              handler={handleOpenCreateDialog}
              size="lg"
              className="fixed inset-0 overflow-y-auto"
            >
              <DialogHeader className="justify-between">
                <Typography variant="h5" color="blue-gray">
                  Crear nuevo producto lab
                </Typography>
                <IconButton
                  color="red"
                  size="sm"
                  variant="text"
                  onClick={handleOpenCreateDialog}
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
                <FormUploadLabProduct handleOpen={handleOpenCreateDialog} />
              </DialogBody>
            </Dialog>
            <div className="mt-4 flex items-center">
              <label className="block text-sm font-medium text-gray-700">
                Mostrar entradas:&nbsp;
              </label>
              <select
                className="mt-1 block rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                value={selectedEntriesValue}
                onChange={handleSelectionChange}
              >
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
              </select>
            </div>
          </div>
          <div className="flex w-full shrink-0 gap-2 md:w-max">
            <div className="w-full md:w-96">
              <Input
                label="Buscar"
                color="blue"
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                value={searchProduct}
                onChange={(e) => setSearchProduct(e.target.value)}
              />
            </div>
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll px-0">
        <table className="w-full min-w-max table-auto text-left">
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
          {currentTableItemsLab.length === 0 ? (
            <p className="flex- justify-center">
              No se encontraron resultados para la búsqueda actual.
            </p>
          ) : (
            <tbody>
              {currentTableItemsLab.map((itemLab, index) => {
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
                        {itemLab.name}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {itemLab.price}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {itemLab.category}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <img
                        src={itemLab.main_image}
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
                        {itemLab.description}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {itemLab.quantity_available}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Checkbox
                        checked={itemLab.is_featured}
                        color={itemLab.is_featured && "green"}
                        ripple={false}
                      />
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {moment(itemLab.created_at).format(
                          "D [de] MMMM [de] YYYY h:mm A",
                        )}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Button
                        color="amber"
                        onClick={() => handleEditClick(itemLab.url)}
                      >
                        Editar
                      </Button>
                    </td>
                    <td className={classes}>
                      <Button
                        color="red"
                        onClick={() => handleShowDeleteDialogClick(itemLab.url)}
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
      </CardBody>
      <Dialog
        open={openEditDialog}
        handler={handleOpenEditDialog}
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
            onClick={handleOpenEditDialog}
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
            handleOpen={handleOpenEditDialog}
            labProduct={labProduct}
          />
        </DialogBody>
      </Dialog>
      <Dialog open={openDeleteDialog} handler={handleDeleteDialog}>
        <DialogHeader>Eliminar producto de laboratorio</DialogHeader>
        <DialogBody>
          <DeleteLabProduct
            handleOpen={handleDeleteDialog}
            labProduct={labProduct}
          />
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleDeleteDialog}
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
      <CardFooter className="flex items-center justify-center border-t border-blue-gray-50 p-4">
        <div className="flex items-center justify-center gap-2">
          <Button
            variant="text"
            size="sm"
            className="flex items-center rounded-full"
            onClick={() => handleFirstPage()}
            disabled={currentPage === 1}
          >
            Primera
          </Button>
          <Button
            variant="text"
            size="sm"
            className="flex items-center rounded-full"
            onClick={() => handlePreviousPage()}
            disabled={currentPage === 1}
          >
            <ArrowLeftIcon strokeWidth={2} className="mr-2 h-4 w-4" /> Anterior
          </Button>
          <div className="flex items-center gap-2">
            {currentTableItemsLab.length !== 0 &&
              numberOfPages.map((page, index) => (
                <IconButton
                  key={index}
                  variant={currentPage === index + 1 ? "filled" : "text"}
                  size="sm"
                  className="rounded-full"
                  onClick={() => handlePageClick(page)}
                >
                  {page}
                </IconButton>
              ))}
          </div>
          <Button
            variant="text"
            size="sm"
            className="flex items-center rounded-full"
            onClick={() => handleNextPage()}
            disabled={currentPage === totalPages || numberOfPages.length === 0}
          >
            Siguiente
            <ArrowRightIcon strokeWidth={2} className="ml-2 h-4 w-4" />
          </Button>
          <Button
            variant="text"
            size="sm"
            className="flex items-center rounded-full"
            onClick={() => handleLastPage()}
            disabled={currentPage === totalPages || numberOfPages.length === 0}
          >
            Último
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

export default LabProductsPage;
