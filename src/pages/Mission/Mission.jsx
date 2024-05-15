import { Typography } from "@material-tailwind/react";
import CompanyLogo from "../../images/Quote/WithoutBackground/EmpresaLogo.png";

import "./Mission.css";

function Mission() {
  return (
    <div className="mission-gradient-background flex h-screen items-center justify-center">
      <div className="flex w-3/4 items-center justify-center">
        <div className="w-1/2">
          <img src={CompanyLogo} alt="Mission" className="h-auto max-w-full" />
        </div>
        <div className="w-1/2">
          <Typography color="blue-gray" className="mb-4 text-xl font-bold">
            Misión
          </Typography>
          <Typography variant="lead" color="blue-gray" className="text-justify">
            Dar a nuestros clientes la mejor experiencia de servicio basados en
            una estrategia confiable de calidad con personal altamente
            competitivo y certificados que brindaran atención que superará tus
            expectativas.
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default Mission;
