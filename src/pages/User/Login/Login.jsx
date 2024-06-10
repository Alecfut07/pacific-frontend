import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../../services/UserService";
import DataContext from "../../../context/dataContext";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Input,
  Typography,
} from "@material-tailwind/react";
import LabInventoryBackground from "../../../images/LabInventory/LabInventoryPage/lab-inventory-background.png";
import ToolsProductsBackground from "../../../images/IndustrialInventory/IndustrialIventoryPage/tools-products-background.jpg";

function Login() {
  const setToken = useContext(DataContext).setToken;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleLogin = async () => {
    try {
      const data = await login(username, password);
      localStorage.setItem("accessToken", data.access);
      setToken(data.access);
      setUsername("");
      setPassword("");
      navigate("/");
      // Manejar redireccionamineto o cualquier otra lógica después del inicio de sesión exitoso
    } catch (error) {
      console.log(error);
      setUsername("");
      setPassword("");
      // Manejar errores de inicio de sesión.
    }
  };

  return (
    <div className="relative flex h-screen flex-col items-center justify-center">
      <div className="absolute inset-0 z-0 flex flex-col items-center justify-center">
        <img
          src={LabInventoryBackground}
          alt={LabInventoryBackground}
          className="h-1/2 w-full object-cover"
        />
        <img
          src={ToolsProductsBackground}
          alt={ToolsProductsBackground}
          className="h-1/2 w-full object-cover"
        />
      </div>
      <div className="z-10">
        <Card color="white" shadow={true}>
          <CardHeader floated={false} shadow={false} className="">
            <Typography variant="h4" color="blue-gray">
              Iniciar Sesión
            </Typography>
          </CardHeader>
          <CardBody>
            <form
              className="mb-2 mt-8 w-80 max-w-screen-lg sm:w-96"
              onSubmit={(e) => {
                e.preventDefault();
                handleLogin();
              }}
            >
              <div className="mb-1 flex flex-col gap-6">
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Usuario:
                </Typography>
                <Input
                  size="lg"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  onChange={(e) => handleUsernameChange(e)}
                />
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Contraseña:
                </Typography>
                <Input
                  type="password"
                  size="lg"
                  placeholder="********"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  onChange={(e) => handlePasswordChange(e)}
                />
              </div>
              <Button type="submit" className="mt-6" fullWidth>
                Iniciar sesión
              </Button>
            </form>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default Login;
