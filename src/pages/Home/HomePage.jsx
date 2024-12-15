import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Card, CardHeader, CardBody } from "@material-tailwind/react";
import HomePageTopBackground from "../../images/Home/HomePageBackgroundTop.png";
import LabBackgroundBottom from "../../images/Home/HomePageLabBackgroundBottom.png";
import ToolsBackgroundBottom1 from "../../images/Home/HomePageToolsBackgroundBottom1.png";
import ToolsBackgroundBottom2 from "../../images/Home/HomePageToolsBackgroundBottom2.png";
import SecurityBackgroundBottom1 from "../../images/Home/HomePageSecurityBackgroundBottom1.png";
import SecurityBackgroundBottom2 from "../../images/Home/HomePageSecurityBackgroundBottom2.png";
import LabIconAnimation from "../../images/IndustrialInventory/IndustrialIventoryPage/LabIconAnimation.gif";
import IndustrialIconAnimation from "../../images/IndustrialInventory/IndustrialIventoryPage/IndustrialIconAnimation.gif";
import SecurityIconAnimation from "../../images/IndustrialInventory/IndustrialIventoryPage/SecurityIconAnimation.gif";
import RepairIconAnimation from "../../images/Repair/RepairIconAnimation.gif";
import ClickHereAnimation from "../../images/Home/ClickHereAnimation.gif";

function HomePage() {
  const navigate = useNavigate();

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
    <div className="relative flex h-screen flex-col items-center justify-center">
      <div className="absolute inset-0 z-0 flex flex-col items-center justify-center">
        <img
          src={HomePageTopBackground}
          alt="TopBackgroundImage"
          className="h-1/2 w-full object-cover"
        />
        <div className="h-1/2 w-full">
          <div className="flex justify-between overflow-hidden">
            <div className="mr-auto flex justify-start">
              <img
                className="h-full"
                src={LabBackgroundBottom}
                alt="LabBackgroundBottom"
              />
            </div>
            <div className="flex justify-center">
              <img
                className="h-full"
                src={ToolsBackgroundBottom1}
                alt="ToolsBackgroundBottom1"
              />
              <img
                className="h-full"
                src={ToolsBackgroundBottom2}
                alt="ToolsBackgroundBottom2"
              />
            </div>
            <div className="ml-auto flex justify-end">
              <img
                className="h-full"
                src={SecurityBackgroundBottom1}
                alt="SecurityBackgroundBottom1"
              />
              <img
                className="h-full"
                src={SecurityBackgroundBottom2}
                alt="SecurityBackgroundBottom2"
              />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 mx-auto overflow-hidden bg-custom-yellow-color p-4 text-center">
            <div className="absolute bottom-0 left-0 h-1/4 w-1/4 origin-bottom-left -rotate-45 transform bg-black md:h-1/2 md:w-1/2"></div>
            <div className="absolute bottom-0 right-0 h-1/4 w-1/4 origin-bottom-right rotate-45 transform bg-black md:h-1/2 md:w-1/2"></div>
            <p className="font-bold text-black">
              PACIFIC <br />
              Laguna Salada 22104, 14957 <br />
              Los Santos, Tijuana B.C <br />
              664-622-32-04 <br />
              ventas@pacifichqs.tijuamex.com
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 pb-32">
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
                  <div className="flex items-center justify-between rounded-full bg-custom-yellow-color p-2 md:p-4">
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
  );
}

export default HomePage;
