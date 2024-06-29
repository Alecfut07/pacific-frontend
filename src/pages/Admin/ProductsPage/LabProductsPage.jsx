import { useState, useEffect, useCallback, useMemo, useContext } from "react";
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
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import { headers } from "../../../data/AdminProductsTable";
import {
  getLabProducts,
  getIndustrialProducts,
  getSecurityProducts,
  getItemsLab,
  getItemLab,
  deleteItemLab,
} from "../../../services/ItemLabService";
// import { logout } from "../../../services/UserService";
import AuthContext from "../../../context/AuthContext";
import TableBody from "../../../components/TableBody/TableBody";
import FormUploadLabProduct from "../../../components/FormUploadLabProduct/FormUploadLabProduct";

function LabProductsPage() {
  const { logout } = useContext(AuthContext);
  const [searchProduct, setSearchProduct] = useState("");
  const [tableItemsLab, setTableItemsLab] = useState([]);
  const [fullData, setFullData] = useState([]);
  const [labProduct, setLabProduct] = useState({});
  const [selectedCategory, setSelectedCategory] = useState("");

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

  const handleEditProductClick = async (url) => {
    try {
      let nuevaUrl = url.replace(".com/", ".com:8443/");
      console.log(
        "ITEM_LAB - handleEditProductClick - getItemLab(url) - URL: ",
        nuevaUrl,
      );
      const itemLab = await getItemLab(nuevaUrl);
      console.log("itemLab (UPDATE OP): ", itemLab);
      setLabProduct(itemLab);
      handleOpenEditDialog();
    } catch (error) {
      console.log(error);
    }
  };

  const handleShowDeleteDialogClick = async (url) => {
    try {
      let nuevaUrl = url.replace(".com/", ".com:8443/");
      console.log(
        "ITEM_LAB - handleShowDeleteDialogClick - getItemLab(url) - URL: ",
        url,
      );
      const itemLab = await getItemLab(nuevaUrl);
      console.log("itemLab (DELETE OP): ", itemLab);
      setLabProduct(itemLab);
      handleDeleteDialog();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteConfirmClick = async (url) => {
    try {
      await deleteItemLab(url);
      // setTableItemsLab((prevItems) =>
      //   prevItems.filter((item) => item.url !== url),
      // );
      handleDeleteDialog();
      await updateTableData();
      handleFirstPage();
    } catch (error) {
      console.log(error);
    }
  };

  const filterFunction = useCallback(
    (data) => {
      let filteredData = data.filter(
        (item) =>
          item.name.toLowerCase().includes(searchProduct.toLowerCase()) ||
          item.description.toLowerCase().includes(searchProduct.toLowerCase()),
      );

      if (selectedCategory) {
        filteredData = filteredData.filter(
          (item) => item.category_page === selectedCategory,
        );
      }

      return filteredData;
    },
    [searchProduct, selectedCategory],
  );

  const currentTableItemsLab = useMemo(() => {
    const filteredData = filterFunction(tableItemsLab);

    const firstPageIndex = (currentPage - 1) * selectedEntriesValue;
    const lastPageIndex = firstPageIndex + selectedEntriesValue;

    return filteredData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, selectedEntriesValue, tableItemsLab, filterFunction]);

  const handleSignOutClick = async () => {
    // await logout();
    logout();
    navigate("/iniciar-sesion");
  };

  const updateTableData = async () => {
    try {
      setLoading(true);
      const items = await getItemsLab();
      setTableItemsLab(items);
      setFullData(items);
      setLoading(false);
    } catch (error) {
      setTableItemsLab([]);
      setFullData([]);
    }
  };

  const nuevaUrl = (url) => url.replace(".com/", ".com:8443/");

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);

        let items;
        if (selectedCategory === "Quimicos") {
          items = await getLabProducts();
        } else if (selectedCategory === "Seguridad") {
          items = await getSecurityProducts();
        } else if (selectedCategory === "Herramientas") {
          items = await getIndustrialProducts();
        } else {
          items = await getItemsLab();
        }

        const itemsMod = items.map((item) => {
          nuevaUrl(item.url);
        });

        console.log("ITEMS MOD: ", itemsMod);

        handleFirstPage();
        setTableItemsLab(itemsMod);
        setFullData(itemsMod);
        setLoading(false);
      } catch (error) {
        setTableItemsLab([]);
        setFullData([]);
        setLoading(false);
      }
    })();
  }, [selectedCategory]);

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
              Admin - Inventario productos
            </Typography>
            <Button color="black" className="mr-5" onClick={handleSignOutClick}>
              Cerrar sesión
            </Button>
            <Button
              color="blue"
              className="mb-0"
              onClick={handleOpenCreateDialog}
            >
              Crear nuevo producto
            </Button>
            <Dialog
              open={openCreateDialog}
              handler={handleOpenCreateDialog}
              size="lg"
              className="fixed inset-0 overflow-y-auto"
            >
              <DialogHeader className="justify-between">
                <Typography variant="h5" color="blue-gray">
                  Crear nuevo producto
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
                <FormUploadLabProduct
                  handleOpen={handleOpenCreateDialog}
                  updateTableData={updateTableData}
                />
              </DialogBody>
            </Dialog>
            <div>
              <Button
                className="mt-4"
                onClick={() => navigate("/admin/cotizaciones")}
              >
                Cotizaciones
              </Button>
            </div>
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
            <div className="mt-4 flex items-center">
              <label className="block text-sm font-medium text-gray-700">
                Filtrar productos:&nbsp;
              </label>
              <select
                className="mt-1 block rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="">General</option>
                <option value="Quimicos">Quimicos</option>
                <option value="Seguridad">Seguridad</option>
                <option value="Herramientas">Herramientas</option>
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
      <CardBody className="overflow-x-scroll">
        <LoadingSpinner
          loading={loading}
          component={
            <TableBody
              headers={headers}
              currentTableItems={currentTableItemsLab}
              fullData={fullData}
              handleEditProductClick={handleEditProductClick}
              openEdit={openEditDialog}
              handlerEdit={handleOpenEditDialog}
              handleShowDeleteDialogClick={handleShowDeleteDialogClick}
              openDelete={openDeleteDialog}
              handlerDelete={handleDeleteDialog}
              handleDeleteConfirmClick={handleDeleteConfirmClick}
              labProduct={labProduct}
              updateTableData={updateTableData}
            />
          }
        />
      </CardBody>
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
            {currentTableItemsLab &&
              currentTableItemsLab.length !== 0 &&
              numberOfPages &&
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
