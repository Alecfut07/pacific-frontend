import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Card, CardHeader, CardBody } from "@material-tailwind/react";
// Background Image
import HomeBackground1 from "../../images/HomeV2/HomeBackground1.png";
// White rectangle with these images
import Atomo1 from "../../images/HomeV2/Atomo1.png";
import Atomo2 from "../../images/HomeV2/Atomo2.png";
import Atomo3 from "../../images/HomeV2/Atomo3.png";
import Atomo4 from "../../images/HomeV2/Atomo4.png";
import Atomo5 from "../../images/HomeV2/Atomo5.jpg";
import Atomo6 from "../../images/HomeV2/Atomo6.png";
import Herramienta1 from "../../images/HomeV2/Herramienta1.jpg";
import Herramienta2 from "../../images/HomeV2/Herramienta2.png";
import Herramienta3 from "../../images/HomeV2/Herramienta3.png";
import Herramienta4 from "../../images/HomeV2/Herramienta4.png";
import Herramienta5 from "../../images/HomeV2/Herramienta5.png";
import Herramienta6 from "../../images/HomeV2/Herramienta6.png";
import Herramienta7 from "../../images/HomeV2/Herramienta7.png";
// Images for the cards
import LabIconAnimation from "../../images/IndustrialInventory/IndustrialIventoryPage/LabIconAnimation.gif";
import IndustrialIconAnimation from "../../images/IndustrialInventory/IndustrialIventoryPage/IndustrialIconAnimation.gif";
import SecurityIconAnimation from "../../images/IndustrialInventory/IndustrialIventoryPage/SecurityIconAnimation.gif";
import RepairIconAnimation from "../../images/Repair/RepairIconAnimation.gif";
import ClickHereAnimation from "../../images/Home/ClickHereAnimation.gif";

import "./HomePage.css";

function HomePage() {
  const navigate = useNavigate();

  const images = [
    {
      id: 1,
      name: Atomo1,
    },
    {
      id: 2,
      name: Atomo2,
    },
    {
      id: 3,
      name: Atomo3,
    },
    {
      id: 4,
      name: Atomo4,
    },
    {
      id: 5,
      name: Atomo5,
    },
    {
      id: 6,
      name: Atomo6,
    },
    {
      id: 7,
      name: Herramienta1,
    },
    {
      id: 8,
      name: Herramienta2,
    },
    {
      id: 9,
      name: Herramienta3,
    },
    {
      id: 10,
      name: Herramienta4,
    },
    {
      id: 11,
      name: Herramienta5,
    },
    {
      id: 12,
      name: Herramienta6,
    },
    {
      id: 13,
      name: Herramienta7,
    },
  ];

  const cardsData = [
    {
      title: "Productos Químicos",
      image: LabIconAnimation,
      onClick: () => navigate("/productos-quimicos"),
    },
    {
      title: "Herramientas Industriales",
      image: IndustrialIconAnimation,
      onClick: () => navigate("/herramientas-industriales"),
    },
    {
      title: "Seguridad Industrial",
      image: SecurityIconAnimation,
      onClick: () => navigate("/seguridad-industrial"),
    },
    {
      title: "Refacciones",
      image: RepairIconAnimation,
      onClick: () => navigate("/refacciones"),
    },
  ];

  return (
    <div className="relative flex w-full flex-col items-center justify-center">
      {/* Primera división: HomeBackground1 */}
      <div className="relative h-[100vh] w-full">
        <img
          src={HomeBackground1}
          alt="HomeBackground1"
          className="h-full w-full object-cover"
        />

        {/* Segunda división: Rectángulo blanco superpuesto */}
        <div className="rectangle-container">
          <div className="images-wrapper">
            {images.map((image, index) => (
              <img
                key={image.id}
                src={image.name}
                alt={image.name}
                className={`moving-image random-pos-${index % 13}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Tercera división: Información textual */}
      <div className="bg-custom-delta-color w-full py-6 sm:py-8">
        <div className="text-center text-gray-800">
          <p className="text-base font-semibold sm:text-lg">DELTA HQS</p>
          <p className="text-sm sm:text-base">Laguna Salada 22104, 14957</p>
          <p className="text-sm sm:text-base">Los Santos, Tijuana B.C</p>
          <p className="text-sm sm:text-base">664-622-32-04</p>
          <p className="text-sm sm:text-base">ventas@pacifichqs.tijuamex.com</p>
        </div>
      </div>

      {/* Cuarta división: Swiper superpuesto */}
      <div className="absolute z-20 w-full max-w-5xl px-4">
        <div className="mx-auto w-full rounded-lg bg-white/80 p-6 shadow-lg backdrop-blur-md">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="swiper-container"
          >
            {cardsData.map((card, index) => (
              <SwiperSlide key={index}>
                <Card
                  className="max-w-ws mx-auto cursor-pointer transition-opacity hover:opacity-50"
                  onClick={() => card.onClick()}
                >
                  <CardHeader floated={false} shadow={false} className="p-4">
                    <p className="text-center text-lg font-bold text-black md:text-2xl">
                      {card.title}
                    </p>
                  </CardHeader>
                  <CardBody className="p-4">
                    <img
                      className="h-24 w-full object-contain md:h-40"
                      src={card.image}
                      alt={card.title}
                    />
                  </CardBody>
                  <div className="flex justify-end p-4">
                    <div className="bg-custom-delta-color flex items-center justify-between rounded-full p-2 md:p-4">
                      <span className="mr-2 flex items-center text-sm font-bold text-black md:text-base">
                        CLIC
                      </span>
                      <img
                        className="h-6 w-6 md:h-12 md:w-12"
                        src={ClickHereAnimation}
                        alt="ClickHereAnimation"
                      />
                    </div>
                  </div>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
