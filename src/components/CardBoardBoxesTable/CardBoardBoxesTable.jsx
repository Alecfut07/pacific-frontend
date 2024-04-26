import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import BoxGuidedBanner from "../../images/CardBoardBoxes/boxguided-banner.png";
import { TABLE_HEAD, CardBoardBoxesData } from "../../data/CardBoardBoxes";

function CardBoardBoxesTable() {
  return (
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <img src={BoxGuidedBanner} />
      </CardHeader>
      <CardBody className="px-0">
        <table className="table-auto text-left">
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
        </table>
      </CardBody>
    </Card>
  );
}

export default CardBoardBoxesTable;
