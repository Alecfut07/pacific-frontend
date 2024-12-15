import { useState, useEffect, useMemo, useCallback } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  IconButton,
  Input,
} from "@material-tailwind/react";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
// Falta agregar getRepairProducts API
import { getRepairProducts } from "../../services/ItemLabService";
import RepairProduct from "../RepairProduct/RepairProduct";
import ImageModal from "../ImageModal/ImageModal";

import "./RepairGallery.css";

function RepairGallery({ addToCart }) {
  const [searchProduct, setSearchProduct] = useState("");
  const [repairProducts, setRepairProducts] = useState([]);
  const [fullData, setFullData] = useState([]);
  const [selectedEntries, setSelectedEntries] = useState(6);
  const [modalOpen, setModalOpen] = useState(false);
  const [repairProductImages, setRepairProductImages] = useState(null);

  const openModal = (images) => {
    setRepairProductImages(images);
    setModalOpen(true);
  };

  const closeModal = () => {
    setRepairProductImages(null);
    setModalOpen(false);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(repairProducts.length / selectedEntries);
  const numberOfPages = [];

  for (let page = 1; page < totalPages; page++) {
    numberOfPages.push(page);
  }

  const handleFirstPage = () => setCurrentPage(1);
  const handlePreviousPage = () => setCurrentPage(currentPage - 1);
  const handlePageClick = (pageNumber) => setCurrentPage(pageNumber);
  const handleNextPage = () => setCurrentPage(currentPage + 1);
  const handleLastPage = () => setCurrentPage(totalPages);

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

  const currentProductsData = useMemo(() => {
    const filteredData = filterFunction(repairProducts);

    const firstPageIndex = (currentPage - 1) * selectedEntries;
    const lastPageIndex = firstPageIndex + selectedEntries;

    return filteredData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, selectedEntries, repairProducts, filterFunction]);

  useEffect(() => {
    (async () => {
      try {
        const itemsRepair = await getRepairProducts();
        setRepairProducts(itemsRepair);
        setFullData(itemsRepair);
      } catch (error) {
        setRepairProducts([]);
        setFullData([]);
      }
    })();
  }, []);

  return (
    <div className="repair-gradient-background">
      <Card className="repair-gradient-background h-full w-full">
        <CardHeader
          floated={false}
          shadow={false}
          className="mx-auto rounded-none"
        >
          <div className="flex w-full shrink-0 gap-2 md:w-max">
            <div className="w-full md:w-96">
              <Input
                placeholder="Buscar"
                color="blue"
                className="rounded-none"
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                value={searchProduct}
                onChange={(e) => setSearchProduct(e.target.value)}
              />
            </div>
          </div>
        </CardHeader>
        <CardBody>
          <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3">
            {currentProductsData.map((repairProduct) => (
              <RepairProduct
                key={repairProduct.url}
                product={repairProduct}
                openModal={openModal}
                addToCart={addToCart}
              />
            ))}
            <ImageModal
              isOpen={modalOpen}
              onClose={closeModal}
              image={repairProductImages}
            />
          </div>
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
              {currentProductsData &&
                currentProductsData.length !== 0 &&
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
              disabled={
                currentPage === totalPages || numberOfPages.length === 0
              }
            >
              Siguiente
              <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
            </Button>
            <Button
              variant="text"
              size="sm"
              className="flex items-center rounded-full"
              onClick={() => handleLastPage()}
              disabled={
                currentPage === totalPages || numberOfPages.length === 0
              }
            >
              Último
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

export default RepairGallery;
