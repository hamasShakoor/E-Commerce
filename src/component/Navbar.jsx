import logo from "../assets/images/logo.png";
import loginImage from "../assets/images/login.png";
import { IoIosSearch } from "react-icons/io";
import { useState } from "react";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdown);
    }
  };

  return (
    <>
      <nav className="nav">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
              <a
                className="flex flex-shrink-0 items-center mr-4"
                href="/index.html"
              >
                <img className="h-10 w-auto" src={logo} alt="logo" />
                <span className="hidden md:block text-black text-2xl font-bold ml-2">
                  Logo
                </span>
              </a>
              <div className="md:ml-auto">
                <div className="flex space-x-2">
                  <a
                    href="/shop-all"
                    className="rounded-md block  px-4 py-2 text-sm text-black hover:bg-gray-100"
                  >
                    Shop All
                  </a>
                  {/* Dropdown for Brands */}
                  <div className="relative">
                    <a
                      href="#"
                      onClick={() => toggleDropdown("brands")}
                      className="rounded-md  px-4 py-2 text-sm text-black hover:bg-gray-100 flex items-center"
                    >
                      Brands
                      <svg
                        className="ml-2 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </a>
                    {activeDropdown === "brands" && (
                      <div className="absolute z-10 mt-2 w-48 origin-top-right bg-white border border-gray-300 rounded-md shadow-lg">
                        <a
                          href="/brands/item-1"
                          className="rounded-md block  px-4 py-2 text-sm text-black hover:bg-gray-100"
                        >
                          Item 1
                        </a>
                        <a
                          href="/brands/item-2"
                          className="rounded-md block  px-4 py-2 text-sm text-black hover:bg-gray-100"
                        >
                          Item 2
                        </a>
                        <a
                          href="/brands/item-3"
                          className="rounded-md block  px-4 py-2 text-sm text-black hover:bg-gray-100"
                        >
                          Item 3
                        </a>
                      </div>
                    )}
                  </div>
                  {/* Dropdown for Categories */}
                  <div className="relative">
                    <a
                      href="#"
                      onClick={() => toggleDropdown("categories")}
                      className="rounded-md  px-4 py-2 text-sm text-black hover:bg-gray-100 flex items-center"
                    >
                      Categories
                      <svg
                        className="ml-2 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </a>
                    {activeDropdown === "categories" && (
                      <div className="absolute z-10 mt-2 w-48 origin-top-right bg-white border border-gray-300 rounded-md shadow-lg">
                        <a
                          href="/categories/men"
                          className="rounded-md block  px-4 py-2 text-sm text-black hover:bg-gray-100"
                        >
                          Men
                        </a>
                        <a
                          href="/categories/women"
                          className="rounded-md block  px-4 py-2 text-sm text-black hover:bg-gray-100"
                        >
                          Women
                        </a>
                        <a
                          href="/categories/kid"
                          className="rounded-md block  px-4 py-2 text-sm text-black hover:bg-gray-100"
                        >
                          kid
                        </a>
                      </div>
                    )}
                  </div>
                  <a
                    href="/sale"
                    className="rounded-md block  px-4 py-2 text-sm text-black hover:bg-gray-100"
                  >
                    Sale
                  </a>
                  <a
                    href="/about"
                    className="rounded-md block  px-4 py-2 text-sm text-black hover:bg-gray-100"
                  >
                    About
                  </a>
                  <a
                    href="/contact"
                    className="rounded-md block  px-4 py-2 text-sm text-black hover:bg-gray-100"
                  >
                    Contact
                  </a>
                  <input
                    type="text"
                    placeholder="Search.."
                    className="outline-none border-b border-black"
                  />
                  <button className="bg-gray-100 p-2 rounded-sm	hover:bg-gray-200">
                    <IoIosSearch />
                  </button>
                  <a
                    href="/login"
                    className="rounded-md block px-4 py-2 text-sm text-black hover:bg-gray-100"
                  >
                    <img
                      className="h-5 w-5 inline-block mr-2"
                      src={loginImage}
                      alt="login"
                    />
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
