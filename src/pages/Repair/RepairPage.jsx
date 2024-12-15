import { Typography } from "@material-tailwind/react";
import RepairGallery from "../../components/RepairGallery/RepairGallery";
import RepairBackground from "../../images/Repair/refacciones-background.jpg";

function RepairPage({ addToCart }) {
  return (
    <div>
      <div className="relative">
        <img
          src={RepairBackground}
          alt="RepairProductsBackground"
          className="w-full"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="text-center text-white">
            <Typography variant="h1" className="text-3xl font-bold">
              Refacciones
            </Typography>
            <Typography variant="lead" className="mt-2">
              Descubre nuestras refacciones de calidad, ideales para maximizar
              el rendimiento y la vida útil de tus equipos.
            </Typography>
          </div>
        </div>
      </div>
      <RepairGallery addToCart={addToCart} />
      <></>
    </div>
  );
}

export default RepairPage;
