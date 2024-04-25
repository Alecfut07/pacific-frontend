import { Typography } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import homeBackgroundImage from "../../images/Home/home-background.png";

function HomePage() {
  const navigate = useNavigate();

  const handleLabInventoryClick = () => navigate("/lab-inventory");
  const handleIndustrialInventoryClick = () =>
    navigate("/industrial-inventory");

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
    </div>
  );
}

export default HomePage;
