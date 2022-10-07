import React from "react";
import Link from "next/link";
import { useState } from "react";
import IconBar from "@heroicons/react/24/solid/Bars3Icon";
import { Button } from "./Button";
import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

interface Language {
  flag: string;
  name: string;
  shortname: string;
}
const Language: React.FC = () => {
  const languages: Language[] = [
    {
      flag: "../image/united-kingdom.png",
      name: "English",
      shortname: "EN",
    },
    {
      flag: "../image/cambodia.png",
      name: "khmer",
      shortname: "KH",
    },
    {
      flag: "../image/china.png",
      name: "Chines",
      shortname: "CH",
    },
    {
      flag: "../image/south-korea.png",
      name: "Korea",
      shortname: "KR",
    },
  ];

  const [lang, setLang] = useState<Language>(languages[0]);

  return (
    <div className="relative">
      <Menu>
        <Menu.Button className="flex items-center gap-2 py-1 px-1 ">
          <img src={lang.flag} alt="logo" className="lg:h-7 h-6 w-auto" />
          <p className="font-semibold text-white">{lang.shortname}</p>
          <ChevronDownIcon className="h-5 text-white" aria-hidden="true" />
        </Menu.Button>

        <Menu.Items>
          <div className="flex flex-col font-semibold text-white absolute mt-3 bg-red-600/70 ring-red-500 ring-1 px-5 rounded-md right-0">
            {languages.map((a, i) => (
              <Menu.Item key={i}>
                {({ active }) => (
                  <div
                    onClick={() => {
                      setLang(a);
                    }}
                    className={`flex flex-row items-center gap-3 p-2 justify-center hover:cursor-pointer hover:rounded-md ${
                      active && ""
                    } `}
                  >
                    <img src={a.flag} alt="" className="h-7" />
                    <p className="font-semibold text-white">{a.name}</p>
                  </div>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Menu>
    </div>
  );
};

export const Navbar: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  function handleNavBar() {
    setIsNavOpen(!isNavOpen);
  }

  return (
    <div className="bg-black/40 backdrop-blur-sm py-3 px-10 fixed z-10 w-full">
      <div className=" flex justify-between items-center">
        <Link href="/">
          <img
            className="h-10 sm:h-13 md:h-15 xl:h-16 cursor-pointer"
            src="./image/logo.png"
            alt=""
          />
        </Link>
        <nav className="hidden md:block ">
          <div className="flex items-center justify-center space-x-1 sm:space-x-2 md:space-x-4 lg:space-x-10 text-white text-sm lg:text-base font-semibold ">
            <Link href="/what_we_offer">
              <a className="hover:text-red-600 cursor-pointer">What We Offer</a>
            </Link>
            <Link href="/product">
              <a className="hover:text-red-600 cursor-pointer">
                Product & Services
              </a>
            </Link>
            <Link href="/contact">
              <a className="hover:text-red-600 cursor-pointer">Contact</a>
            </Link>

            <Button text={"REQUEST DEMO"} />
            <Language />
          </div>
        </nav>
        <div className="block md:hidden">
          <button onClick={() => handleNavBar()}>
            <IconBar className="w-5 h-5 text-white " />
          </button>
        </div>
      </div>
      <div className={`md:hidden ${isNavOpen ? "" : "hidden"}`}>
        <div className="flex flex-col items-center w-full space-y-5 mt-4 text-white text-base font-semibold ">
          <Link href="/what_we_offer">
            <a className="hover:text-red-600 cursor-pointer">What We Offer</a>
          </Link>
          <Link href="/product">
            <a className="hover:text-red-600 cursor-pointer">
              Product & Services
            </a>
          </Link>
          <Link href="/contact">
            <a className="hover:text-red-600 cursor-pointer">Contact</a>
          </Link>
          <Button  text={"REQUEST DEMO"} />
          <Language />
        </div>
      </div>
    </div>
  );
};
