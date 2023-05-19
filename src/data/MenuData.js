import { FaHome, FaUserAlt, FaShoppingCart } from "react-icons/fa";

const MenuData = [
  {
    title: "หน้าแรก",
    path: "/",
    Icon: <FaHome />,
  },
  {
    title: "สมาชิก",
    path: "/member",
    Icon: <FaUserAlt />,
  },
  {
    title: "สินค้า",
    path: "/product",
    Icon: <FaShoppingCart />,
  },
];

export default MenuData;
