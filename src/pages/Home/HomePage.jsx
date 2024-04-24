import { Typography } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  const handleLabInventoryClick = () => navigate("/lab-inventory");
  const handleIndustrialInventoryClick = () =>
    navigate("/industrial-inventory");

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center justify-center p-8">
        <Typography className="mb-4 text-3xl font-bold">
          ¡Bienvenido a nuestro sitio web de demostración!
        </Typography>
        <div className="mb-4">
          <Button
            variant="filled"
            className="mr-2"
            onClick={handleLabInventoryClick}
          >
            Inventario de laboratorio
          </Button>
          <Button
            variant="outlined"
            className="mr-2"
            onClick={handleIndustrialInventoryClick}
          >
            Inventario industrial
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
