import React, { useState } from "react";
import {
  Avatar,
  Button,
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import ImageModal from "../ImageModal/ImageModal";
import BoxGuidedBanner from "../../images/CardBoardBoxes/boxguided-banner.jpg";
import { TABLE_HEAD, CardBoardBoxesData } from "../../data/CardBoardBoxes";

import "csshake/dist/csshake.min.css";

function CardBoardBoxesTable() {
  const [tableData, setTableData] = useState(CardBoardBoxesData);

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

  return (
    <Card className="flex h-full w-full items-center">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <img src={BoxGuidedBanner} />
      </CardHeader>
      <CardBody className="bg-custom-box-table-body-color px-4">
        <table className="table-auto text-center">
          <thead>
            <tr>
              {TABLE_HEAD.slice(0, 3).map((head, index) => (
                <th key={index} className="p-4">
                  {/* className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4" */}
                  <Typography
                    variant="lead"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
              <th colSpan={6} className="p-4">
                <Typography
                  variant="lead"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {TABLE_HEAD[3]}
                </Typography>
              </th>
              <th className="p-4">
                <Typography
                  variant="lead"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {TABLE_HEAD[9]}
                </Typography>
              </th>
            </tr>
            {/* Subfila para los valores de "PRECIO POR CAJA (MXN)" */}
            <tr>
              <th colSpan={3} />
              {TABLE_HEAD.slice(4, 9).map((value, index) => (
                <th key={index} className="p-4">
                  <Typography
                    variant="lead"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {value}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="border-y border-white">
            {tableData.map((boxData, index) => {
              return (
                <tr key={boxData.id}>
                  <td className="border-x border-y border-white">
                    <div className="flex items-center gap-3">
                      <Avatar
                        src={boxData.image}
                        alt={boxData.image}
                        size="md"
                        className="shake-slow border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1 transition duration-300 ease-in-out hover:border-blue-500 hover:brightness-90"
                        onClick={() => openModal(boxData.image)}
                      />
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-bold hover:border-b hover:border-blue-500"
                      >
                        {boxData.model}
                      </Typography>
                    </div>
                  </td>
                  <td className="border-x border-y border-white">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {boxData.dimensions}
                    </Typography>
                  </td>
                  <td className="border-x border-y border-white">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {boxData.descriptions}
                    </Typography>
                  </td>
                  <td className="border-x border-y border-white">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      ${boxData.prices[25]}
                    </Typography>
                  </td>
                  <td className="border-x border-y border-white">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      ${boxData.prices[100]}
                    </Typography>
                  </td>
                  <td className="border-x border-y border-white">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      ${boxData.prices[250]}
                    </Typography>
                  </td>
                  <td className="border-x border-y border-white">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      ${boxData.prices[500]}
                    </Typography>
                  </td>
                  <td className="border-x border-y border-white">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      ${boxData.prices[1000]}
                    </Typography>
                  </td>
                  <td className="flex items-center">
                    <input className="mr-10 h-10 w-20 text-center" value={25} />
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
      <ImageModal
        isOpen={modalOpen}
        onClose={closeModal}
        image={selectedImage}
      />
    </Card>
  );
}

export default CardBoardBoxesTable;
