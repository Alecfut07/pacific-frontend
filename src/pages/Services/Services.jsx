import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import CompanyLogo from "../../images/Quote/WithoutBackground/EmpresaLogo.png";

import "./Services.css";

function Services() {
  return (
    <div className="about-us-gradient-background flex h-screen items-center justify-center p-4 md:p-0">
      <div className="flex w-full flex-col items-center justify-center md:w-3/4 md:flex-row">
        <img
          src={CompanyLogo}
          alt="CompanyLogo"
          className="mx-auto h-auto max-w-full"
        />
        <div className="w-full md:w-1/2">
          <div>
            <Card className="bg-custom-yellow-color">
              <CardHeader
                floated={false}
                shadow={false}
                className="bg-custom-yellow-color"
              >
                <Typography
                  variant="h4"
                  color="blue-gray"
                  className="mb-4 text-center font-bold md:text-left"
                >
                  Servicios
                </Typography>
              </CardHeader>
              <CardBody>
                <Typography
                  variant="lead"
                  color="blue-gray"
                  className="text-justify text-sm md:text-base"
                >
                  Nuestro servicio se basa en la rapidez con la que puedes
                  adquirir nuestros productos. Nuestra plataforma dinámica te
                  ofrece la posibilidad de cotizar y comprar productos en
                  cuestión de segundos.
                </Typography>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
