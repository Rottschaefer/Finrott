import { FaMoneyBillWave } from "react-icons/fa";
import { GiWeightLiftingUp } from "react-icons/gi";
import { GiTripleGate } from "react-icons/gi";
import { MdLocalMovies } from "react-icons/md";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { FaHeadphones } from "react-icons/fa";
import { FaDog } from "react-icons/fa6";
import { GiClothes } from "react-icons/gi";
import { FaBookOpen } from "react-icons/fa";
import { PiVideoFill } from "react-icons/pi";
import { FaSpotify } from "react-icons/fa";
import { CgShoppingCart } from "react-icons/cg";
import { IoFastFood } from "react-icons/io5";
import { IoRestaurant } from "react-icons/io5";
import { MdDeliveryDining } from "react-icons/md";
import { MdTravelExplore } from "react-icons/md";
import { FaBus } from "react-icons/fa";
import { FaHouseUser } from "react-icons/fa";
import { IoWaterSharp } from "react-icons/io5";
import { MdLocalPharmacy } from "react-icons/md";
import { FaUber } from "react-icons/fa";
import { GiLifeJacket } from "react-icons/gi";
import { IoIosHappy } from "react-icons/io";
import { FaClipboardList } from "react-icons/fa";
import { GrMoney } from "react-icons/gr";

export const categoriesIcons = {
  Renda: { svg: FaMoneyBillWave, color: "#10B981", bg: "rgba(16, 185, 129, 0.15)" },
  Investimentos: { svg: FaMoneyBillWave, color: "#8B5CF6", bg: "rgba(139, 92, 246, 0.15)" },
  "Academia e centros de lazer": { svg: GiWeightLiftingUp, color: "#06B6D4", bg: "rgba(6, 182, 212, 0.15)" },
  "Museus e pontos turísticos": { svg: GiTripleGate, color: "#A855F7", bg: "rgba(168, 85, 247, 0.15)" },
  "Cinema, Teatro e Concertos": { svg: MdLocalMovies, color: "#EC4899", bg: "rgba(236, 72, 153, 0.15)" },
  "Compras online": { svg: HiMiniShoppingBag, color: "#3B82F6", bg: "rgba(59, 130, 246, 0.15)" },
  Eletrônicos: { svg: FaHeadphones, color: "#6366F1", bg: "rgba(99, 102, 241, 0.15)" },
  "Pet Shops e veterinários": { svg: FaDog, color: "#F59E0B", bg: "rgba(245, 158, 11, 0.15)" },
  Vestiário: { svg: GiClothes, color: "#EAB308", bg: "rgba(234, 179, 8, 0.15)" },
  Livraria: { svg: FaBookOpen, color: "#F97316", bg: "rgba(249, 115, 22, 0.15)" },
  "Streaming de vídeo": { svg: PiVideoFill, color: "#EF4444", bg: "rgba(239, 68, 68, 0.15)" },
  "Streaming de música": { svg: FaSpotify, color: "#10B981", bg: "rgba(16, 185, 129, 0.15)" },
  Supermercado: { svg: CgShoppingCart, color: "#F59E0B", bg: "rgba(245, 158, 11, 0.15)" },
  "Alimentos e bebidas": { svg: IoFastFood, color: "#F43F5E", bg: "rgba(244, 63, 94, 0.15)" },
  "Restaurantes, bares e lanchonetes": { svg: IoRestaurant, color: "#FB923C", bg: "rgba(251, 146, 60, 0.15)" },
  "Delivery de alimentos": { svg: MdDeliveryDining, color: "#F43F5E", bg: "rgba(244, 63, 94, 0.15)" },
  Travel: { svg: MdTravelExplore, color: "#0284C7", bg: "rgba(2, 132, 199, 0.15)" },
  "Passagem de ônibus": { svg: FaBus, color: "#64748B", bg: "rgba(100, 116, 139, 0.15)" },
  Aluguel: { svg: FaHouseUser, color: "#8B5CF6", bg: "rgba(139, 92, 246, 0.15)" },
  Água: { svg: IoWaterSharp, color: "#0EA5E9", bg: "rgba(14, 165, 233, 0.15)" },
  Farmácia: { svg: MdLocalPharmacy, color: "#14B8A6", bg: "rgba(20, 184, 166, 0.15)" },
  "Táxi e transporte privado urbano": { svg: FaUber, color: "#EAB308", bg: "rgba(234, 179, 8, 0.15)" },
  Seguros: { svg: GiLifeJacket, color: "#64748B", bg: "rgba(100, 116, 139, 0.15)" },
  Lazer: { svg: IoIosHappy, color: "#EC4899", bg: "rgba(236, 72, 153, 0.15)" },
  "Custos Fixos": { svg: FaClipboardList, color: "#00D2B4", bg: "rgba(0, 210, 180, 0.18)" },
};

export const getCategoryMeta = (categoryName) => {
  if (categoryName && categoriesIcons[categoryName]) {
    return categoriesIcons[categoryName];
  }
  return { svg: GrMoney, color: "#00D2B4", bg: "rgba(0, 210, 180, 0.15)" };
};
