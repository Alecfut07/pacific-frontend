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
import BoxGuidedBanner from "../../images/CardBoardBoxes/boxguided-banner.png";
import { TABLE_HEAD, CardBoardBoxesData } from "../../data/CardBoardBoxes";

function CardBoardBoxesTable() {
  const [tableData, setTableData] = useState(CardBoardBoxesData);

  return (
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <img src={BoxGuidedBanner} />
      </CardHeader>
      <CardBody className="px-0">
        <table className="table-auto text-center">
          <thead>
            <tr>
              {TABLE_HEAD.slice(0, 3).map((head, index) => (
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
              <th
                colSpan={6}
                className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
              >
                <Typography
                  variant="lead"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {TABLE_HEAD[3]}
                </Typography>
              </th>
              <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
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
                <th
                  key={index}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
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
          <tbody>
            {tableData.map((boxData, index) => {
              return (
                <tr key={boxData.id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <Avatar
                        src={boxData.image}
                        alt={boxData.image}
                        size="md"
                        className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1 transition duration-300 ease-in-out hover:border-blue-500 hover:brightness-90"
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
                  <td>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {boxData.dimensions}
                    </Typography>
                  </td>
                  <td>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {boxData.descriptions}
                    </Typography>
                  </td>
                  <td>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      ${boxData.prices[25]}
                    </Typography>
                  </td>
                  <td>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      ${boxData.prices[100]}
                    </Typography>
                  </td>
                  <td>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      ${boxData.prices[250]}
                    </Typography>
                  </td>
                  <td>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      ${boxData.prices[500]}
                    </Typography>
                  </td>
                  <td>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      ${boxData.prices[1000]}
                    </Typography>
                  </td>
                  <td className="flex items-center">
                    <input className="h-10 w-20 text-center" value={25} />
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
    </Card>
  );
}

export default CardBoardBoxesTable;
