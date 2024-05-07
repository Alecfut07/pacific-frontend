import { useState } from "react";
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
  Input,
  Typography,
} from "@material-tailwind/react";
import { headers } from "../../../data/AdminProductsTable";

function ProductsPage() {
  const [searchProduct, setSearchProduct] = useState("");

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
              Admin - Inventario de productos
            </Typography>
            <div className="flex items-center">
              <label className="block text-sm font-medium text-gray-700">
                Mostrar entradas:&nbsp;
              </label>
              <select
                className="mt-1 block rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                value=""
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
          <tbody></tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-center border-t border-blue-gray-50 p-4">
        <div className="flex items-center justify-center gap-2">
          <Button
            variant="text"
            size="sm"
            className="flex items-center rounded-full"
          >
            Primera
          </Button>
          <Button
            variant="text"
            size="sm"
            className="flex items-center rounded-full"
          >
            <ArrowLeftIcon strokeWidth={2} className="mr-2 h-4 w-4" /> Anterior
          </Button>
          <div className="flex items-center gap-2"></div>
          <Button
            variant="text"
            size="sm"
            className="flex items-center rounded-full"
          >
            Siguiente
            <ArrowRightIcon strokeWidth={2} className="ml-2 h-4 w-4" />
          </Button>
          <Button
            variant="text"
            size="sm"
            className="flex items-center rounded-full"
          >
            Último
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

export default ProductsPage;
