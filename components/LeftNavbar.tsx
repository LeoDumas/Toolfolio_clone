"use client";
import React, { useState } from "react";

// Icons imports
import {
  CiYoutube,
  CiDesktop,
  CiMoneyBill,
  CiGlobe,
  CiCompass1,
  CiMenuBurger,
} from "react-icons/ci";
import { PiBrainThin } from "react-icons/pi";
import { GoStack } from "react-icons/go";
import { RxCardStack } from "react-icons/rx";
import { title } from "process";

const MainList = [
  { title: "Discover", href: "/", icon: <CiCompass1 /> },
  { title: "Libraries", href: "/libraries", icon: <RxCardStack /> },
];

const CategoriesList = [
  { title: "Design", href: "/categories/design", icon: <CiDesktop /> },
  {
    title: "YouTube",
    href: "categories/youtube",
    icon: <CiYoutube />,
  },
  { title: "Startups", href: "categories/startups", icon: <CiMoneyBill /> },
  {
    title: "Artificial Intelligence",
    href: "categories/artificial-intelligence",
    icon: <PiBrainThin />,
  },
  {
    title: "Social Media",
    href: "categories/social-media",
    icon: <CiGlobe />,
  },
  { title: "Websites", href: "categories/websites", icon: <GoStack /> },
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      {/* Burger menu for small screen */}
      <button
        onClick={toggleMenu}
        className="fixed top-4 left-4 z-50 lg:hidden bg-black p-2 rounded-md"
      >
        <CiMenuBurger className="text-white" size={24} />{" "}
      </button>

      {/* Navigation */}
      <nav
        className={`fixed left-0 top-0 w-80 bg-black text-white h-full border-r border-gray-400/20 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:block`}
      >
        <div className="px-6">
          <h1 className="text-6xl font-semibold pt-10 select-none">
            <a href="/">Toolfolio</a>
          </h1>

          <NavbarList itemList={MainList} />

          <Separator title="Categories" />

          <NavbarList itemList={CategoriesList} />

          <Separator />
        </div>
      </nav>

      {/* Overlay to close menu on small screen */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleMenu}
        ></div>
      )}
    </>
  );
};

export default LeftNavbar;
