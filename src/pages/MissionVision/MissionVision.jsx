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
    <div className="mission-gradient-background flex h-screen items-center justify-center">
      <div className="flex w-3/4 items-center justify-center">
        <div className="w-1/2">
          <img src={CompanyLogo} alt="Mission" className="h-auto max-w-full" />
        </div>
        <div className="w-1/2">
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
                  className="mb-4 font-bold"
                >
                  Misión
                </Typography>
              </CardHeader>
              <CardBody>
                <Typography
                  variant="lead"
                  color="blue-gray"
                  className="text-justify"
                >
                  Dar a nuestros clientes la mejor experiencia de servicio
                  basados en una estrategia confiable de calidad con personal
                  altamente competitivo y certificados que brindaran atención
                  que superará tus expectativas.
                </Typography>
              </CardBody>
            </Card>
          </div>
          <div className="mt-4">
            <Card className="bg-custom-yellow-color">
              <CardHeader
                floated={false}
                shadow={false}
                className="bg-custom-yellow-color"
              >
                <Typography
                  variant="h4"
                  color="blue-gray"
                  className="mb-4 font-bold"
                >
                  Visión
                </Typography>
              </CardHeader>
              <CardBody>
                <Typography
                  variant="lead"
                  color="blue-gray"
                  className="text-justify"
                >
                  Ser tu mejor opción en proveer nuestro servicio rápido y
                  eficiente. Ofreciendo una gran variedad de productos para la
                  industria.
                </Typography>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MissionVision;
