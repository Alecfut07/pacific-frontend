import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import CompanyLogo from "../../images/Quote/WithoutBackground/EmpresaLogo.png";

import "./MissionVision.css";

function MissionVision() {
  return (
    <div className="mission-gradient-background flex h-screen items-center justify-center p-4 md:p-0">
      <div className="flex w-full flex-col items-center justify-center md:w-3/4 md:flex-row">
        {/* Imagen del logo */}
        <div className="mb-4 w-full md:mb-0 md:w-1/2">
          <img
            src={CompanyLogo}
            alt="Logo de la empresa"
            className="mx-auto h-auto max-w-full"
          />
        </div>

        {/* Contenido de Misión y Visión */}
        <div className="w-full md:w-1/2">
          {/* Misión */}
          <section aria-labelledby="mision">
            <Card className="mb-4 bg-custom-yellow-color shadow-lg">
              <CardHeader
                floated={false}
                shadow={false}
                className="bg-custom-yellow-color"
              >
                <Typography
                  id="mision"
                  variant="h4"
                  color="blue-gray"
                  className="mb-4 text-center font-bold md:text-left"
                >
                  Misión
                </Typography>
              </CardHeader>
              <CardBody>
                <Typography
                  variant="lead"
                  color="blue-gray"
                  className="text-justify text-sm md:text-base"
                >
                  Delta express service es una compañía dedicada a la venta de
                  productos mediante e-commerce, en el cual tendrás a tu
                  disposición una gran variedad de ellos en su plataforma
                  virtual de gran alcance, brindando un gran soporte al sector
                  industrial local de Tijuana.
                </Typography>
              </CardBody>
            </Card>
          </section>

          {/* Visión */}
          <section aria-labelledby="vision">
            <Card className="bg-custom-yellow-color shadow-lg">
              <CardHeader
                floated={false}
                shadow={false}
                className="bg-custom-yellow-color"
              >
                <Typography
                  id="vision"
                  variant="h4"
                  color="blue-gray"
                  className="mb-4 text-center font-bold md:text-left"
                >
                  Visión
                </Typography>
              </CardHeader>
              <CardBody>
                <Typography
                  variant="lead"
                  color="blue-gray"
                  className="text-justify text-sm md:text-base"
                >
                  Ser tu mejor opción en proveer nuestro servicio rápido y
                  eficiente. Ofreciendo una gran variedad de productos para la
                  industria.
                </Typography>
              </CardBody>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
}

export default MissionVision;
