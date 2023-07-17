"use client";

import { MdOutlineMenuOpen } from "react-icons/md";
import Image from "next/image";
import MENU_ITEMS from "@/shared/menuItems";
import Link from "next/link";
import ThemeChanger from "@/theme/ThemeChanger";

const Header = () => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* <!-- Menu Button (for small screens) --> */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              {/* <!-- Hamburger Icon --> */}
              {/* <!-- if menu is Open: icon should rotate and transform to left side --> */}
              <MdOutlineMenuOpen className={`w-8 h-8`} />
            </button>
          </div>

          {/* <!-- Site Links (for large screens) --> */}
          {/* <div className="hidden md:block"> */}
          <div className="hidden md:flex h-full items-center space-x-4">
            <ThemeChanger />
            {MENU_ITEMS.map((menu) => (
              <Link
                key={menu.title}
                children={menu.title}
                href={menu.url}
                className="text-gray-300 hover:bg-gray-700 hover:text-logoColor px-3 py-2 rounded-md text-sm font-medium w-24 flex items-center justify-center hover:text-lg transition-all"
              />
            ))}
          </div>
          {/* </div> */}
          {/* <!-- Logo --> */}
          <div className="flex-shrink-0 flex items-center">
            <Link href={"/"}>
              <Image
                src="/assets/images/logo.png"
                height={60}
                width={60}
                alt="fmk"
              />
            </Link>
          </div>
        </div>
      </div>
      {/* <!-- Mobile Menu (hidden by default) --/> */}
      <div className="md:hidden hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            About
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Services
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
