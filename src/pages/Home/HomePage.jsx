import { useNavigate } from "react-router-dom";
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
import ClickHereAnimation from "../../images/Home/ClickHereAnimation.gif";

function HomePage() {
  const navigate = useNavigate();

  const navigateToLabInventory = () => navigate("/productos-quimicos");

  const navigateToIndustrialTools = () =>
    navigate("/herramientas-industriales");

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
            <div className="absolute bottom-0 left-0 h-1/2 w-1/2 origin-bottom-left -rotate-45 transform bg-black"></div>
            <div className="absolute bottom-0 right-0 h-1/2 w-1/2 origin-bottom-right rotate-45 transform bg-black"></div>
            <p className="font-bold text-black">
              PACIFIC <br />
              Laguna Salada 22104, 14957 <br />
              Los Santos, Tijuana B.C <br />
              664-622-32-04 <br />
              Carlos@Pacific.com.mx
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 pb-32">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:items-center">
          <div className="col-span-1">
            <Card
              className="mx-auto max-w-xs cursor-pointer transition-opacity hover:opacity-50 md:p-4"
              onClick={navigateToLabInventory}
            >
              {/* mx-auto max-w-xs cursor-pointer p-2 transition-opacity hover:opacity-50 md:p-4 */}
              <CardHeader floated={false} shadow={false} className="md:p-4">
                {/* p-2 md:p-4 */}
                <p className="text-center text-lg font-bold text-black md:text-2xl">
                  Productos Químicos
                </p>
              </CardHeader>
              <CardBody className="p-2 md:p-4">
                <img
                  className="h-24 w-full object-contain md:h-40"
                  src={LabIconAnimation}
                  alt="LabIconAnimation"
                />
              </CardBody>
              <div className="flex justify-end p-2 md:p-4">
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
          </div>
          <div className="col-span-1">
            <Card
              className="mx-auto max-w-xs cursor-pointer transition-opacity hover:opacity-50 md:p-4"
              onClick={navigateToIndustrialTools}
            >
              {/* mx-auto max-w-xs cursor-pointer p-2 transition-opacity hover:opacity-50 md:p-4 */}
              <CardHeader floated={false} shadow={false} className="md:p-4">
                {/* p-2 md:p-4 */}
                <p className="text-center text-lg font-bold text-black md:text-2xl">
                  Herramientas Industriales
                </p>
              </CardHeader>
              <CardBody className="p-2 md:p-4">
                <img
                  className="h-24 w-full object-contain md:h-40"
                  src={IndustrialIconAnimation}
                  alt="IndustrialIconAnimation"
                />
              </CardBody>
              <div className="flex justify-end p-2 md:p-4">
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
          </div>
          <div className="col-span-1">
            <Card className="mx-auto max-w-xs cursor-pointer transition-opacity hover:opacity-50 md:p-4">
              {/* mx-auto max-w-xs cursor-pointer p-2 transition-opacity hover:opacity-50 md:p-4 */}
              <CardHeader floated={false} shadow={false} className="md:p-4">
                {/* p-2 md:p-4 */}
                <p className="text-center text-lg font-bold text-black md:text-2xl">
                  Seguridad Industrial
                </p>
              </CardHeader>
              <CardBody className="p-2 md:p-4">
                <img
                  className="h-24 w-full object-contain md:h-40"
                  src={SecurityIconAnimation}
                  alt="SecurityIconAnimation"
                />
              </CardBody>
              <div className="flex justify-end p-2 md:p-4">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
