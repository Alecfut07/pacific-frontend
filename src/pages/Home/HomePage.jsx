import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import homeBackgroundImage from "../../images/Home/home-background.png";

function HomePage() {
  return (
    <div className="bg-gray-200">
      <div className="mx-auto overflow-hidden bg-white shadow-md">
        <div className="relative">
          <img
            className="w-full"
            src={homeBackgroundImage}
            alt="Imagen de fondo"
          />
          <div className="absolute left-0 top-0 bg-black bg-opacity-50 p-4">
            <h1 className="text-xl font-bold text-white">
              ¡Controla tus productos!
            </h1>
            <p className="text-white">
              Gestiona tu inventario de manera eficiente
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-8">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-1">
            <Card>
              <img className="h-64 w-full object-cover" src="" alt="imagen 1" />
              <CardBody>
                <div className="bg-blue-500 p-4 text-white">
                  <p>Texto del cuadrante 1</p>
                </div>
              </CardBody>
            </Card>
          </div>
          <div className="col-span-1">
            <Card>
              <img className="h-64 w-full object-cover" src="" alt="imagen 2" />
              <CardBody>
                <div className="bg-blue-500 p-4 text-white">
                  <p>Texto del cuadrante 2</p>
                </div>
              </CardBody>
            </Card>
          </div>
          <div className="col-span-1">
            <Card>
              <img className="h-64 w-full object-cover" src="" alt="imagen 3" />
              <CardBody>
                <div className="bg-blue-500 p-4 text-white">
                  <p>Texto del cuadrante 3</p>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
