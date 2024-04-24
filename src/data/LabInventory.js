import { MicroscopioOpticoImages } from "../images/LabInventory/Products/MicroscopioOptico/MicroscopioOptico";
import { BalanzaAnaliticaImages } from "../images/LabInventory/Products/BalanzaAnalitica/BalanzaAnalitica";
import { AgitadorMagneticoImages } from "../images/LabInventory/Products/AgitadorMagnetico/AgitadorMagnetico";
import { CentrifugaMesaImages } from "../images/LabInventory/Products/CentrifugaMesa/CentrifugaMesa";
import { AutoClaveImages } from "../images/LabInventory/Products/AutoClave/AutoClave";
import { EspectrofotometroImages } from "../images/LabInventory/Products/Espectrofotometro/Espectrofotometro";
import { TermocicladorPCRImages } from "../images/LabInventory/Products/TermocicladorPCR/TermocicladorPCR";
import { MicropipetaImages } from "../images/LabInventory/Products/Micropipeta/Micropipeta";
import { BathMariaImages } from "../images/LabInventory/Products/BathMaria/BathMaria";
import { MicrocentrifugaImages } from "../images/LabInventory/Products/Microcentrifuga/Microcentrifuga";
import { CampanaExtraccionImages } from "../images/LabInventory/Products/CampanaExtraccion/CampanaExtraccion";
import { DestiladorAguaImages } from "../images/LabInventory/Products/DestiladorAgua/DestiladorAgua";
import { MicroscopioElectronicoImages } from "../images/LabInventory/Products/MicroscopioElectronico/MicroscopioElectronico";
import { CamaraCultivoImages } from "../images/LabInventory/Products/CamaraCultivo/CamaraCultivo";
import { LiofilizadoraImages } from "../images/LabInventory/Products/Liofilizadora/Liofilizadora";
import { MicrocentrifugaRefrigeradaImages } from "../images/LabInventory/Products/MicrocentrifugaRefrigerada/MicrocentrifugaRefrigerada";
import { HornoSecadoImages } from "../images/LabInventory/Products/HornoSecado/HornoSecado";
import { TermometroDigitalImages } from "../images/LabInventory/Products/TermometroDigital/TermometroDigital";
import { IncubadoraImages } from "../images/LabInventory/Products/Incubadora/Incubadora";
import { MicroscopioFluorescenciaImages } from "../images/LabInventory/Products/MicroscopioFluorescencia/MicroscopioFluorescencia";
import { PlacaCalefactoraImages } from "../images/LabInventory/Products/PlacaCalefactora/PlacaCalefactora";
import { PhmetroImages } from "../images/LabInventory/Products/Phmetro/Phmetro";
import { CabinaPCRImages } from "../images/LabInventory/Products/CabinaPCR/CabinaPCR";

export const TABLE_HEAD = [
  "Producto",
  "Descripcion",
  "Precio",
  "Estado",
  "Agregar al carrito",
];

export const TABLE_ROWS = [
  {
    id: 1,
    images: [...MicroscopioOpticoImages],
    product: "Microscopio óptico",
    description: "Microscopio de alta calidad con aumento de hasta 1000x",
    price: "5,000",
    status: "disponible",
  },
  {
    id: 2,
    images: [...BalanzaAnaliticaImages],
    product: "Balanza analítica",
    description: "Precisa y sensible balanza para mediciones de laboratorio.",
    price: "8,500",
    status: "no disponible",
  },
  {
    id: 3,
    images: [...AgitadorMagneticoImages],
    product: "Agitador magnético",
    description: "Equipo para agitar líquidos en recipientes de laboratorio.",
    price: "2,200",
    status: "disponible",
  },
  {
    id: 4,
    images: [...CentrifugaMesaImages],
    product: "Centrífuga de mesa",
    description: "Centrífuga compacta para separación de muestras biológicas.",
    price: "7,000",
    status: "disponible",
  },
  {
    id: 5,
    images: [...AutoClaveImages],
    product: "Autoclave",
    description:
      "Esterilizador a vapor para equipos y materiales de laboratorio.",
    price: "15,000",
    status: "no disponible",
  },
  {
    id: 6,
    images: [...EspectrofotometroImages],
    product: "Espectrofotómetro",
    description:
      "Instrumento para medir la absorbancia y transmitancia de muestras líquidas.",
    price: "12,500",
    status: "no disponible",
  },
  {
    id: 7,
    images: [...TermocicladorPCRImages],
    product: "Termociclador PCR",
    description:
      "Equipo para realizar la reacción en cadena de la polimerasa (PCR).",
    price: "20,000",
    status: "disponible",
  },
  {
    id: 8,
    images: [...MicropipetaImages],
    product: "Micropipeta",
    description:
      "Instrumento de precisión para medir volúmenes pequeños de líquidos.",
    price: "1,500",
    status: "disponible",
  },
  {
    id: 9,
    images: [...BathMariaImages],
    product: "Baño María",
    description:
      "Equipo para calentar y mantener la temperatura de muestras líquidas.",
    price: "3,500",
    status: "disponible",
  },
  {
    id: 10,
    images: [...MicrocentrifugaImages],
    product: "Microcentrífuga",
    description:
      "Centrífuga de alta velocidad para pequeñas muestras biológicas.",
    price: "6,500",
    status: "disponible",
  },
  {
    id: 11,
    images: [...CampanaExtraccionImages],
    product: "Campana de extracción",
    description:
      "Sistema para proteger al usuario de vapores y gases tóxicos en el laboratorio.",
    price: "9,000",
    status: "no disponible",
  },
  {
    id: 12,
    images: [...DestiladorAguaImages],
    product: "Destilador de agua",
    description: "Equipo para obtener agua destilada de alta pureza.",
    price: "4,800",
    status: "disponible",
  },
  {
    id: 13,
    images: [...MicroscopioElectronicoImages],
    product: "Microscopio electrónico",
    description:
      "Microscopio de alta resolución para observar estructuras a nivel celular.",
    price: "50,000",
    status: "disponible",
  },
  {
    id: 14,
    images: [...CamaraCultivoImages],
    product: "Cámara de cultivo",
    description:
      "Recipiente para el crecimiento y mantenimiento de cultivos celulares.",
    price: "3,200",
    status: "no disponible",
  },
  {
    id: 15,
    images: [...LiofilizadoraImages],
    product: "Liofilizadora",
    description:
      "Equipo para la deshidratación de muestras biológicas mediante sublimación.",
    price: "25,000",
    status: "disponible",
  },
  {
    id: 16,
    images: [...MicrocentrifugaRefrigeradaImages],
    product: "Microcentrífuga refrigerada",
    description:
      "Centrífuga con control de temperatura para muestras sensibles.",
    price: "8,700",
    status: "disponible",
  },
  {
    id: 17,
    images: [...HornoSecadoImages],
    product: "Horno de secado",
    description: "Equipo para secar muestras a temperaturas controladas.",
    price: "6,000",
    status: "disponible",
  },
  {
    id: 18,
    images: [...TermometroDigitalImages],
    product: "Termómetro digital",
    description: "Instrumento de medición de temperatura con pantalla LCD.",
    price: "500",
    status: "disponible",
  },
  {
    id: 19,
    images: [...IncubadoraImages],
    product: "Incubadora",
    description: "Equipo para el cultivo y mantenimiento de microorganismos.",
    price: "7,800",
    status: "disponible",
  },
  {
    id: 20,
    images: [...MicroscopioFluorescenciaImages],
    product: "Microscopio de fluorescencia",
    description:
      "Microscopio especializado para observar fluorescencia en muestras biológicas.",
    price: "18,000",
    status: "disponible",
  },
  {
    id: 21,
    images: [...PlacaCalefactoraImages],
    product: "Placa calefactora",
    description:
      "Superficie de calentamiento para calentar matraces y recipientes en el laboratorio.",
    price: "1,200",
    status: "disponible",
  },
  {
    id: 22,
    images: [...PhmetroImages],
    product: "Phmetro",
    description:
      "Medidor de pH para la determinación precisa del pH de soluciones.",
    price: "2,300",
    status: "disponible",
  },
  {
    id: 23,
    images: [...CabinaPCRImages],
    product: "Cabina de PCR",
    description:
      "Cabina para realizar PCR con condiciones de esterilidad y seguridad.",
    price: "12,000",
    status: "disponible",
  },
  {
    id: 24,
    images: "",
    product: "Microscopio de contraste de fases",
    description:
      "Microscopio para observar detalles de muestras transparentes.",
    price: "15,500",
    status: "disponible",
  },
  {
    id: 25,
    images: "",
    product: "Bañomaría de agitación",
    description:
      "Baño María con función de agitación para mezclar muestras homogéneamente.",
    price: "4,500",
    status: "no disponible",
  },
  {
    id: 26,
    images: "",
    product: "Baño ultrasónico",
    description:
      "Equipo para la limpieza de instrumentos de laboratorio mediante ultrasonidos.",
    price: "3,000",
    status: "no disponible",
  },
  {
    id: 27,
    images: "",
    product: "Microscopio de campo oscuro",
    description:
      "Ideal para observar organismos transparentes que no pueden ser vistos con un microscopio convencional.",
    price: "1,500",
    status: "disponible",
  },
  {
    id: 28,
    images: "",
    product: "Centrífuga de alta capacidad",
    description:
      "Perfecta para procesar grandes volúmenes de muestras biológicas en poco tiempo.",
    price: "3,000",
    status: "disponible",
  },
  {
    id: 29,
    images: "",
    product: "Cámara de PCR en tiempo real",
    description:
      "Para la detección y cuantificación precisa del ADN amplificado durante la PCR en tiempo real.",
    price: "45,000",
    status: "disponible",
  },
  {
    id: 30,
    images: "",
    product: "Analizador de espectro UV-Vis",
    description:
      "Utilizado para determinar la concentración de compuestos químicos en solución mediante la absorción de luz ultravioleta-visible.",
    price: "13,50",
    status: "disponible",
  },
];
