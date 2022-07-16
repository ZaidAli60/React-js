import { MdDashboard } from "react-icons/md";
import { MdTransform } from "react-icons/md";
import { HiViewGridAdd } from "react-icons/hi";

const NavLinklist = [
  {
    id: 0,
    text: "Dashboard",
    icon: <MdDashboard />,
  },
  {
    id: 1,
    text: "Transaction",
    icon: <MdTransform />,
  },
  {
    id: 2,
    text: "Add Account",
    icon: <HiViewGridAdd />,
  },
];

export default NavLinklist;
