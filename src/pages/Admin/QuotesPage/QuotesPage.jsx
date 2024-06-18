import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
  useContext,
} from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  IconButton,
  Input,
  Typography,
} from "@material-tailwind/react";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
// import { logout } from "../../../services/UserService";
import { headers } from "../../../data/AdminQuotesTable";
import { updateQuantityAvailableItemLab } from "../../../services/ItemLabService";
import {
  getQuotes,
  getQuote,
  deleteQuote,
} from "../../../services/CotizacionLabService";
import AuthContext from "../../../context/AuthContext";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import TableBody from "../../../components/Admin/Cotizaciones/TableBody/TableBody";

function QuotesPage() {
  const { logout } = useContext(AuthContext);
  const [searchQuote, setSearchQuote] = useState("");
  const [quotesData, setQuotesData] = useState([]);
  const [fullData, setFullData] = useState([]);
  const [quoteData, setQuoteData] = useState({});

  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const useDialogState = (initialState = false) => {
    const [isOpen, setIsOpen] = useState(initialState);
    const toggleDialog = () => setIsOpen((prevState) => !prevState);
    return [isOpen, toggleDialog];
  };

  const [openEditDialog, toggleEditDialog] = useDialogState();
  const [openDeleteDialog, toggleDeleteDialog] = useDialogState();

  const [selectedEntriesValue, setSelectedEntriesValue] = useState(10);

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(quotesData.length / selectedEntriesValue);

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

  const handleEditQuoteClick = async (url) => {
    try {
      const quote = await getQuote(url);
      setQuoteData(quote);
      toggleEditDialog();
    } catch (error) {
      console.log(error);
    }
  };

  const handleShowDeleteDialogClick = async (url) => {
    try {
      const quote = await getQuote(url);
      setQuoteData(quote);
      toggleDeleteDialog();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteConfirmClick = async (url) => {
    try {
      // Obtén los detalles de la cotización antes de eliminarla.
      const quote = await getQuote(url);

      // Restaura la cantidad disponible de cada producto.
      for (const info of quote.additional_info) {
        await updateQuantityAvailableItemLab(
          info.product.url,
          info.product.name,
          info.product.price,
          info.product.category,
          info.product.category_page,
          info.product.main_image,
          info.product.description,
          info.product.quantity_available_original,
          info.product.is_featured,
          info.product.created_at,
        );
      }

      // Ahora elimina la cotización.
      await deleteQuote(url);
      toggleDeleteDialog();
      await updateTableData();
      handleFirstPage();
    } catch (error) {
      console.log(error);
    }
  };

  const filterFunction = useCallback(
    (data) => {
      return data.filter((quote) =>
        quote.folio.toLowerCase().includes(searchQuote.toLowerCase()),
      );
    },
    [searchQuote],
  );

  const currentQuotesData = useMemo(() => {
    const filteredData = filterFunction(quotesData);

    const firstPageIndex = (currentPage - 1) * selectedEntriesValue;
    const lastPageIndex = firstPageIndex + selectedEntriesValue;

    return filteredData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, selectedEntriesValue, quotesData, filterFunction]);

  const handleSignOutClick = async () => {
    // await logout();
    logout();
    navigate("/iniciar-sesion");
  };

  const updateTableData = async () => {
    try {
      setLoading(true);
      const quotes = await getQuotes();
      setQuotesData(quotes);
      setFullData(quotes);
      setLoading(false);
    } catch (error) {
      setQuotesData([]);
      setFullData([]);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const quotes = await getQuotes();
        setQuotesData(quotes);
        setFullData(quotes);
        handleFirstPage();
        setLoading(false);
      } catch (error) {
        setQuotesData([]);
        setFullData([]);
      }
    })();
  }, []);

  return (
    <Card className="h-full w-full rounded-none">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <Typography
              variant="h5"
              color="blue-gray"
              className="mb-5 font-bold"
            >
              Admin - Cotizaciones
            </Typography>
            <Button color="black" className="mr-5" onClick={handleSignOutClick}>
              Cerrar sesión
            </Button>
            <div>
              <Button
                className="mt-4"
                onClick={() => navigate("/admin/productos")}
              >
                Productos
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
          </div>
          <div className="flex w-full shrink-0 gap-2 md:w-max">
            <div className="w-full md:w-96">
              <Input
                label="Buscar"
                color="blue"
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                value={searchQuote}
                onChange={(e) => setSearchQuote(e.target.value)}
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
              currentQuotesData={currentQuotesData}
              fullData={fullData}
              openEditDialog={openEditDialog}
              toggleEditDialog={toggleEditDialog}
              handleEditQuoteClick={handleEditQuoteClick}
              openDeleteDialog={openDeleteDialog}
              toggleDeleteDialog={toggleDeleteDialog}
              handleShowDeleteDialogClick={handleShowDeleteDialogClick}
              handleDeleteConfirmClick={handleDeleteConfirmClick}
              quoteData={quoteData}
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
            {currentQuotesData.length !== 0 &&
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

export default QuotesPage;
