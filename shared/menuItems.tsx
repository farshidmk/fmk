import { FaHome } from "react-icons/fa";

export type TMenuItems = {
  title: string;
  url: string;
  icon?: React.ReactElement;
};

const MENU_ITEMS: TMenuItems[] = [
  {
    title: "خانه",
    url: "/",
    icon: <FaHome />,
  },
  {
    title: "رزومه",
    url: "/resume",
    icon: <FaHome />,
  },
  {
    title: "پروژه ها",
    url: "/projects",
    icon: <FaHome />,
  },
];

export default MENU_ITEMS;
