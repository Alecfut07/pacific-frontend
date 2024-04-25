import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar, Switch, Typography } from "@material-tailwind/react";

function CustomNavbar() {
  const [inventoryType, setInventoryType] = useState("");

  const navigate = useNavigate();

  const navigateToLabInventory = () => {
    navigate("/lab-inventory");
    setInventoryType("Inventario de laboratorio");
  };
  const navigateToIndustrialInventory = () => {
    navigate("/industrial-inventory");
    setInventoryType("Inventario industrial");
  };

  const handleSwitchChange = (e) => {
    const checked = e.target.checked;
    if (checked) {
      navigateToIndustrialInventory();
    } else {
      navigateToLabInventory();
    }
  };

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Productos
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Empaquetado primario
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Soluciones personalizadas
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Sobre nosotros
        </a>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="/"
          className="mr-4 cursor-pointer py-1.5 font-medium"
        >
          Inventario - DEMO
        </Typography>
        <div className="flex items-center gap-4">
          <div className="mr-4 lg:block">{navList}</div>
          <div className="flex items-center gap-x-1">
            <Typography className="mr-4">{inventoryType}</Typography>
            <Switch onChange={(e) => handleSwitchChange(e)} />
          </div>
        </div>
      </div>
    </Navbar>
  );
}

export default CustomNavbar;
