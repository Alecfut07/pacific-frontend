import { Typography } from "@material-tailwind/react";
import IndustrialSecurityGallery from "../../components/IndustrialSecurityGallery/IndustrialSecurityGallery";
// Falta imagen

function IndustrialSecurityPage({ addToCart }) {
  return (
    <div>
      <div className="relative">
        {/* Falta poner una imagen */}
        <img src="" className="w-full" />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="text-center text-white">
            <Typography variant="h1" className="text-3xl font-bold">
              Productos de seguridad
            </Typography>
            <Typography variant="lead" className="mt-2">
              Explora nuestros productos de seguridad industrial, diseñados para
              garantizar la protección y el bienestar en tu entorno laboral.
            </Typography>
          </div>
        </div>
      </div>
      <IndustrialSecurityGallery addToCart={addToCart} />
    </div>
  );
}

export default IndustrialSecurityPage;
