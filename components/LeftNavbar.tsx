import React from "react";

// Icons imports
import {
  CiYoutube,
  CiDesktop,
  CiMoneyBill,
  CiGlobe,
  CiCompass1,
} from "react-icons/ci";
import { PiBrainThin } from "react-icons/pi";
import { GoStack } from "react-icons/go";
import { RxCardStack } from "react-icons/rx";
import { title } from "process";

const MainList = [
  { title: "Discover", href: "/Categories/discover", icon: <CiCompass1 /> },
  { title: "Libraries", href: "/Categories/libraries", icon: <RxCardStack /> },
];

const CategoriesList = [
  { title: "Design", href: "/Categories/design", icon: <CiDesktop /> },
  {
    title: "YouTube",
    href: "Categories/youtube",
    icon: <CiYoutube />,
  },
  { title: "Startups", href: "Categories/startups", icon: <CiMoneyBill /> },
  {
    title: "Artificial Intelligence",
    href: "Categories/artificial-intelligence",
    icon: <PiBrainThin />,
  },
  {
    title: "Social Media",
    href: "Categories/social-media",
    icon: <CiGlobe />,
  },
  { title: "Websites", href: "Categories/websites", icon: <GoStack /> },
];

type NavItem = {
  title: string;
  href: string;
  icon: React.ReactNode;
};

type NavbarListProps = {
  itemList: NavItem[];
};

const NavbarList = ({ itemList }: NavbarListProps) => {
  return (
    <ul className="mt-5 select-none">
      {itemList.map((item) => (
        <li key={item.title} className="text-lg w-full">
          <a
            href={item.href}
            className="w-full flex items-center px-2 py-2 gap-x-3 hover:bg-gray-200/10 rounded-md transition-colors duration-200"
          >
            {item.icon}
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

type SeparatorProps = {
  title?: string;
};

const Separator = ({ title }: SeparatorProps) => {
  return (
    <div className="relative flex mt-5 items-center">
      {title && (
        <span className="flex-shrink mr-4 text-white text-xs">{title}</span>
      )}
      <div className="flex-grow border-t border-gray-400/20"></div>
    </div>
  );
};

const LeftNavbar = () => {
  return (
    <nav className=" fixed left-0 top-0 w-80 bg-black text-white h-full border-r border-gray-400/20 ">
      <div className="  px-6">
        <h1 className="text-6xl font-semibold pt-10 select-none">
          <a href="/">Toolfolio</a>
        </h1>

        <NavbarList itemList={MainList} />

        <Separator title="Categories" />

        <NavbarList itemList={CategoriesList} />

        <Separator />
      </div>
    </nav>
  );
};

export default LeftNavbar;
