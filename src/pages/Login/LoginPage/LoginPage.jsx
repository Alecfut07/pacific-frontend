import { useContext, useState } from "react";
import { login } from "../../../services/UserService";
import DataContext from "../../../context/dataContext";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import LabInventoryBackground from "../../../images/LabInventory/LabInventoryPage/lab-inventory-background.png";
import IndustrialInventoryBackground from "../../../images/IndustrialInventory/IndustrialIventoryPage/industrial-inventory-background.png";

function LoginPage() {
  const { setToken } = useContext(DataContext).setToken;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await login(username, password);
      console.log("response: ", response);
      // localStorage.setItem("accessToken", accessToken);
      // setToken(data.access);
      // Manejar redireccionamineto o cualquier otra lógica después del inicio de sesión exitoso
    } catch (error) {
      console.log(error);
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
          src={IndustrialInventoryBackground}
          alt={IndustrialInventoryBackground}
          className="h-1/2 w-full object-cover"
        />
      </div>
      <div className="z-10">
        <Card color="white" shadow={false}>
          <Typography variant="h4" color="blue-gray">
            Iniciar Sesión
          </Typography>
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
              />
            </div>
            <Button type="submit" className="mt-6" fullWidth>
              Iniciar sesión
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}

export default LoginPage;
