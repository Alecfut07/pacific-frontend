import { useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Avatar,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Chip,
  IconButton,
  Input,
  Tooltip,
  Typography,
  Switch,
} from "@material-tailwind/react";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import ImageModal from "../ImageModal/ImageModal";
import { TABLE_HEAD, TABLE_ROWS } from "../../data/LabInventory";

function Table() {
  const [searchProduct, setSearchProduct] = useState("");
  const [tableData, setTableData] = useState(TABLE_ROWS);
  const [fullData, setFullData] = useState(TABLE_ROWS);
  const [selectedEntries, setSelectedEntries] = useState(10);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage("");
    setModalOpen(false);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(tableData.length / selectedEntries);
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
    setSelectedEntries(e.target.value);
    setCurrentPage(1);
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

  const currentTableData = useMemo(() => {
    const filteredData = filterFunction(tableData);

    const firstPageIndex = (currentPage - 1) * selectedEntries;
    const lastPageIndex = firstPageIndex + selectedEntries;

    return filteredData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, selectedEntries, tableData, filterFunction]);

  // const navigate = useNavigate();

  // const navigateToLavInventory = () => navigate("/lab-inventory");
  // const navigateToIndustrialInventory = () => navigate("/industrial-inventory");

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
              Inventario de laboratorio
            </Typography>
            {/* <Switch
              onChange={(checked) =>
                checked
                  ? navigateToIndustrialInventory()
                  : navigateToLavInventory()
              }
            /> */}
            <div className="flex items-center">
              <label className="block text-sm font-medium text-gray-700">
                Mostrar entradas:&nbsp;
              </label>
              <select
                className="mt-1 block rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                value={selectedEntries}
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
              {TABLE_HEAD.map((head, index) => (
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
          <tbody>
            {currentTableData.map((product, index) => {
              const isLast = index === fullData.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";
              return (
                <tr key={product.id}>
                  <td className={classes}>
                    <div className="flex items-center gap-3">
                      <Avatar
                        src={product.images[0]}
                        alt={product.images[0]}
                        size="md"
                        className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                        onClick={() => openModal(product.images[0])}
                      />
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-bold"
                      >
                        {product.name}
                      </Typography>
                    </div>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {product.description}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      ${product.price} MXN
                    </Typography>
                  </td>
                  <td className={classes}>
                    <div className="w-max">
                      <Chip
                        size="sm"
                        variant="ghost"
                        value={product.status}
                        color={
                          product.status === "disponible"
                            ? "green"
                            : product.status === "no disponible"
                              ? "red"
                              : "amber"
                        }
                      />
                    </div>
                  </td>
                  <td className={classes}>
                    <input type="" value={0} className="mr-10 w-10" />
                    <Button color="blue">
                      <ShoppingCartIcon className="h-5 w-5" />
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
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
            <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Anterior
          </Button>
          <div className="flex items-center gap-2">
            {currentTableData.length !== 0 &&
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
            <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
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
      <ImageModal
        isOpen={modalOpen}
        onClose={closeModal}
        image={selectedImage}
      />
    </Card>
  );
}

export default Table;
