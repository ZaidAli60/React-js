import { MdDashboard } from "react-icons/md";
import { MdTransform } from "react-icons/md";
import { HiViewGridAdd } from "react-icons/hi";

const NavLinklist = [
  {
    id: 0,
    text: "Dashboard",
    path:"",
    icon: <MdDashboard />,
  },
  {
    id: 1,
    text: "Transaction",
    path:"transaction",
    icon: <MdTransform />,
  },
  {
    id: 2,
    text: "Add Account",
    path:"addaccount",
    icon: <HiViewGridAdd />,
  },
];

export default NavLinklist;
