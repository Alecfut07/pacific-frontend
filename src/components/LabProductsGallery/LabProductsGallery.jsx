import React, { useState, useMemo, useCallback } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
} from "@material-tailwind/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import LabProduct from "../LabProduct/LabProduct";
import ImagesModal from "../ImagesModal/ImagesModal";
import { LabProducts } from "../../data/LabInventory";

function LabProductsGallery() {
  const [searchProduct, setSearchProduct] = useState("");
  const [labProducts, setLabProducts] = useState(LabProducts);
  const [fullData, setFullData] = useState(LabProducts);
  const [selectedEntries, setSelectedEntries] = useState(6);
  const [modalOpen, setModalOpen] = useState(false);
  const [labProductImages, setLabProductImages] = useState(null);

  const openModal = (images) => {
    setLabProductImages(images);
    setModalOpen(true);
  };

  const closeModal = () => {
    setLabProductImages(null);
    setModalOpen(false);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(labProducts.length / selectedEntries);
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
    const filteredData = filterFunction(labProducts);

    const firstPageIndex = (currentPage - 1) * selectedEntries;
    const lastPageIndex = firstPageIndex + selectedEntries;

    return filteredData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, selectedEntries, labProducts, filterFunction]);

  // Version 6 --> OK
  //   return (
  //     <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3">
  //       {labProducts.map((labProduct) => (
  //         <LabProduct
  //           key={labProduct.id}
  //           product={labProduct}
  //           openModal={openModal}
  //         />
  //       ))}
  //       <ImagesModal
  //         isOpen={modalOpen}
  //         onClose={closeModal}
  //         images={labProductImages}
  //       />
  //     </div>
  //   );

  // Version 7 --> PENDIENTE
  return (
    <div>
      <Card className="h-full w-full">
        <CardHeader floated={false} shadow={false} className="rounded-none">
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
        </CardHeader>
        <CardBody>
          <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3">
            {currentProductsData.map((labProduct) => (
              <LabProduct
                key={labProduct.id}
                product={labProduct}
                openModal={openModal}
              />
            ))}
            <ImagesModal
              isOpen={modalOpen}
              onClose={closeModal}
              images={labProductImages}
            />
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default LabProductsGallery;
