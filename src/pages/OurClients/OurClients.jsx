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
                  Nuestros clientes
                </Typography>
              </CardHeader>
              <CardBody>
                <Typography
                  variant="lead"
                  color="blue-gray"
                  className="text-justify text-sm md:text-base"
                >
                  Nuestros clientes son lo más valioso para nuestra compañía.
                  Por eso, Delta Express Servcice cuenta con una diversa gama de
                  productos dirigidos a los siguientes sectores:
                </Typography>
                <ol>
                  <li>
                    <Typography
                      variant="lead"
                      color="blue-gray"
                      className="text-justify text-sm md:text-base"
                    >
                      Industria química
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      variant="lead"
                      color="blue-gray"
                      className="text-justify text-sm md:text-base"
                    >
                      Industria automotriz
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      variant="lead"
                      color="blue-gray"
                      className="text-justify text-sm md:text-base"
                    >
                      Industria de la construcción
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      variant="lead"
                      color="blue-gray"
                      className="text-justify text-sm md:text-base"
                    >
                      Industria alimenticia
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      variant="lead"
                      color="blue-gray"
                      className="text-justify text-sm md:text-base"
                    >
                      Industria de platinado
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      variant="lead"
                      color="blue-gray"
                      className="text-justify text-sm md:text-base"
                    >
                      Entre otros…
                    </Typography>
                  </li>
                </ol>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurClients;
