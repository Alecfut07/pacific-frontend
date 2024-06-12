import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
// import { logout } from "../../services/UserService";
import {
  Avatar,
  Badge,
  Button,
  Collapse,
  IconButton,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Navbar,
  Typography,
} from "@material-tailwind/react";
import { ShoppingCartIcon, UserIcon } from "@heroicons/react/24/solid";
import AuthContext from "../../context/AuthContext";
import CompanyLogo from "../../images/Quote/WithoutBackground/EmpresaLogo.png";

function CustomNavbar({ openDrawerTop, totalQuantitySum }) {
  const { isLoggedIn, logout } = useContext(AuthContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  const [openNav, setOpenNav] = useState(false);

  const navigate = useNavigate();

  const navigateToHome = () => navigate("/");

  const navigateToMissionAndVision = () => navigate("/misión-&-visión");

  const navigateToLogIn = () => navigate("/iniciar-sesion");
  const navigateToSignUp = () => navigate("/registrarse");

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
      >
        Acerca de nosotros
      </Typography>
      <Typography
        as="li"
        variant="h6"
        color="blue-gray"
        className="p-1 font-normal hover:underline"
        onClick={navigateToMissionAndVision}
      >
        Misión & Visión
      </Typography>
      <Typography
        as="li"
        variant="h6"
        color="blue-gray"
        className="p-1 font-normal hover:underline"
      >
        Nuestros clientes
      </Typography>
      <Typography
        as="li"
        variant="h6"
        color="blue-gray"
        className="p-1 font-normal hover:underline"
      >
        Servicios
      </Typography>
    </ul>
  );

  return (
    <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
      <div className="flex items-center justify-between text-blue-gray-900">
        <div className="flex items-center gap-x-4">
          <img
            src={CompanyLogo}
            width="40px"
            height="40px"
            onClick={navigateToHome}
            className="cursor-pointer"
          />
          <Typography
            className="mr-4 cursor-pointer py-1.5 font-medium"
            onClick={navigateToHome}
          >
            PACIFIC
          </Typography>
        </div>
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block">{navList}</div>
          {isLoggedIn ? (
            <div className="flex justify-between gap-x-1">
              <Typography className="font-medium">Carrito en línea</Typography>
              <Badge content={totalQuantitySum}>
                <ShoppingCartIcon
                  className="ml-4 mr-4 h-6 w-6 cursor-pointer hover:text-blue-500 focus:text-blue-500"
                  onClick={openDrawerTop}
                />
              </Badge>
              <Menu
                open={isMenuOpen}
                handler={setIsMenuOpen}
                placement="bottom-end"
              >
                <MenuHandler>
                  <Button
                    variant="text"
                    color="blue-gray"
                    className="flex-items-center rounded-full p-0"
                  >
                    <Avatar
                      variant="circular"
                      size="sm"
                      withBorder={true}
                      color="blue-gray"
                      className="ml-4 p-0.5"
                      src={CompanyLogo}
                    />
                  </Button>
                </MenuHandler>
                <MenuList className="p-1">
                  <MenuItem>
                    <Typography
                      as="span"
                      variant="small"
                      className="font-normal"
                      color="red"
                      onClick={() => logout()}
                    >
                      Cerrar sesión
                    </Typography>
                  </MenuItem>
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
                onClick={navigateToSignUp}
              >
                <span>Registrarse</span>
              </Button>
            </div>
          )}
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
        {!isLoggedIn && (
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
            <Button
              fullWidth
              variant="gradient"
              size="sm"
              className=""
              onClick={navigateToSignUp}
            >
              <span>Registrarse</span>
            </Button>
          </div>
        )}
      </Collapse>
    </Navbar>
  );
}

export default CustomNavbar;
