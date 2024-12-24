import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import CompanyLogo from "../../images/Quote/WithoutBackground/EmpresaLogo.png";

import "./OurClients.css";

function OurClients() {
  return (
    <div className="about-us-gradient-background flex h-screen items-center justify-center p-6 md:p-10">
      <div className="flex w-full max-w-5xl flex-col items-center gap-6 md:flex-row">
        {/* Logo de la empresa */}
        <div className="flex justify-center md:w-1/2">
          <img
            src={CompanyLogo}
            alt="Logo de la Empresa"
            className="h-auto w-3/4 max-w-sm md:w-full"
          />
        </div>

        {/* Tarjeta de "Nuestros Clientes" */}
        <div className="w-full md:w-1/2">
          <Card className="rounded-lg bg-custom-yellow-color shadow-lg">
            <CardHeader
              floated={false}
              shadow={false}
              className="rounded-t-lg bg-custom-yellow-color p-4"
            >
              <Typography
                variant="h4"
                color="blue-gray"
                className="mb-2 text-center font-bold md:text-left"
              >
                Nuestros Clientes
              </Typography>
            </CardHeader>
            <CardBody>
              <Typography
                variant="lead"
                color="blue-gray"
                className="mb-4 text-justify text-sm leading-relaxed md:text-base"
              >
                Nuestros clientes son lo más valioso para nuestra compañía. Por
                eso, Delta Express Service cuenta con una diversa gama de
                productos dirigidos a los siguientes sectores:
              </Typography>
              <ul className="list-none pl-0">
                {[
                  "Industria química",
                  "Industria automotriz",
                  "Industria de la construcción",
                  "Industria alimenticia",
                  "Industria de platinado",
                  "Entre otros…",
                ].map((sector, index) => (
                  <li
                    key={index}
                    className="mb-2 flex items-start gap-2 text-sm md:text-base"
                  >
                    <Typography
                      variant="lead"
                      color="blue-gray"
                      className="text-justify"
                    >
                      {sector}
                    </Typography>
                  </li>
                ))}
              </ul>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default OurClients;
