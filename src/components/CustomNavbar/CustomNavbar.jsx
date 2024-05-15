import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../../services/UserService";
import {
  Badge,
  Button,
  Collapse,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Navbar,
  Switch,
  Typography,
} from "@material-tailwind/react";
import { ShoppingCartIcon, UserIcon } from "@heroicons/react/24/solid";
import InventoriesLogo from "../../assets/inventories.svg";

function CustomNavbar({ openDrawerTop, totalQuantitySum }) {
  // const token = localStorage.getItem("accessToken");
  // const [isLoggedIn, setIsLoggedIn] = useState(token !== null);

  // console.log("isLoggedIn: ", isLoggedIn);

  const [openNav, setOpenNav] = useState(false);
  const [inventoryType, setInventoryType] = useState("");

  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
    setInventoryType("Inventario de laboratorio");
  };

  const navigateToLabInventory = () => {
    navigate("/lab-inventory");
    setInventoryType("Inventario de laboratorio");
  };
  const navigateToIndustrialInventory = () => {
    navigate("/industrial-inventory");
    setInventoryType("Inventario industrial");
  };

  const navigateToMission = () => navigate("/mission");
  const navigateToVision = () => navigate("/vision");

  const navigateToLogIn = () => navigate("/login");

  const handleSwitchChange = (e) => {
    const checked = e.target.checked;
    if (checked) {
      navigateToIndustrialInventory();
    } else {
      navigateToLabInventory();
    }
  };

  const handleLogOut = async () => {
    await logout();
    setIsLoggedIn(false);
  };

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="h6"
        color="blue-gray"
        className="p-1 font-normal hover:underline"
        onClick={navigateToMission}
      >
        Misión
      </Typography>
      <Typography
        as="li"
        variant="h6"
        color="blue-gray"
        className="p-1 font-normal hover:underline"
        onClick={navigateToVision}
      >
        Visión
      </Typography>
    </ul>
  );

  return (
    <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
      <div className="flex items-center justify-between text-blue-gray-900">
        <div className="flex items-center gap-x-4">
          <img
            src={InventoriesLogo}
            width="20px"
            height="20px"
            onClick={navigateToHome}
            className="cursor-pointer"
          />
          <Typography
            className="mr-4 cursor-pointer py-1.5 font-medium"
            onClick={navigateToHome}
          >
            Inventarios
          </Typography>
        </div>
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block">{navList}</div>
          <div className="flex items-center gap-x-1">
            <Typography className="mr-4">{inventoryType}</Typography>
            <Switch onChange={(e) => handleSwitchChange(e)} />
          </div>
          <Badge content={totalQuantitySum}>
            <ShoppingCartIcon
              className="ml-4 mr-4 h-6 w-6 hover:text-blue-500 focus:text-blue-500"
              onClick={openDrawerTop}
            />
          </Badge>
          {/* {isLoggedIn ? (
            <div>
              <Menu>
                <MenuHandler>
                  <UserIcon className="h-6 w-6 hover:text-blue-500 focus:text-blue-500" />
                </MenuHandler>
                <MenuList>
                  <MenuItem>Crear nuevo producto</MenuItem>
                  <MenuItem onClick={handleLogOut}>Salir de la sesión</MenuItem>
                </MenuList>
              </Menu>
            </div>
          ) : (
            <div className="flex items-center gap-x-1">
              <Button
                variant="text"
                size="sm"
                className="hidden lg:inline-block"
                onClick={navigateToLogIn}
              >
                <span>Iniciar Sesión</span>
              </Button>
              <Button
                variant="gradient"
                size="sm"
                className="hidden lg:inline-block"
              >
                <span>Registrarse</span>
              </Button>
            </div>
          )} */}
          <IconButton
            variant="text"
            className="h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={true}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <Collapse open={openNav}>
        {navList}
        {/* {!isLoggedIn && (
          <div className="flex items-center gap-x-1">
            <Button
              fullWidth
              variant="text"
              size="sm"
              className=""
              onClick={navigateToLogIn}
            >
              <span>Iniciar Sesión</span>
            </Button>
            <Button fullWidth variant="gradient" size="sm" className="">
              <span>Registrarse</span>
            </Button>
          </div>
        )} */}
      </Collapse>
    </Navbar>
  );
}

export default CustomNavbar;
