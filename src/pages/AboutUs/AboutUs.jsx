import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import CompanyLogo from "../../images/Quote/WithoutBackground/EmpresaLogo.png";

import "./AboutUs.css";

function AboutUs() {
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

        {/* Tarjeta de "Acerca de nosotros" */}
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
                Acerca de nosotros
              </Typography>
            </CardHeader>
            <CardBody>
              <Typography
                variant="lead"
                color="blue-gray"
                className="text-justify text-sm leading-relaxed md:text-base"
              >
                Dar a nuestros clientes la mejor experiencia de servicio basada
                en una estrategia confiable de calidad con personal altamente
                competitivo y certificado que brindará atención que superará tus
                expectativas.
              </Typography>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
