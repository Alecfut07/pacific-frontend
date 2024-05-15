import { Typography } from "@material-tailwind/react";
import CompanyLogo from "../../images/Quote/WithoutBackground/EmpresaLogo.png";

import "./Vision.css";

function Vision() {
  return (
    <div className="vision-gradient-background flex h-screen items-center justify-center">
      <div className="flex w-3/4 items-center justify-center">
        <div className="w-1/2">
          <img src={CompanyLogo} alt="Vision" className="h-auto max-w-full" />
        </div>
        <div className="w-1/2">
          <Typography color="blue-gray" className="mb-4 text-xl font-bold">
            Visión
          </Typography>
          <Typography variant="lead" color="blue-gray" className="text-justify">
            Ser tu mejor opción en proveer nuestro servicio rápido y eficiente.
            Ofreciendo una gran variedad de productos para la industria.
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default Vision;
