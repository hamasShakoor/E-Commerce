import logo from "../assets/images/logo.png";
import loginImage from "../assets/images/login.png";
import { IoIosSearch } from "react-icons/io";
import { useEffect, useState } from "react";
import { getCategories } from "../api/categories/getCategories";

const Navbar = ({ setSelectedCategoryId, setError }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategoriesCaller();
    // getProductsCaller();
  }, []);
  const getCategoriesCaller = async () => {
    try {
      const res = await getCategories();
      setCategories(res.data);
      setError("");
    } catch (e) {
      console.log("==============================error: ", e.message);
      setError(e.message);
      setCategories([]);
    }
  };

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
        <div className="nav-container">
          <div className="nav-bar">
            <div className="nav-left">
              <a href="/index.html" className="nav-logo">
                <img src={logo} alt="logo" />
                <span>Logo</span>
              </a>
              <input
                type="text"
                placeholder="Search.."
                className="search-input"
              />
              <button className="search-button">
                <IoIosSearch />
              </button>
              <div className="md:ml-auto">
                <div className="nav-links">
                  <a href="/shop-all" className="nav-link">
                    Shop All
                  </a>
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
                      <div className="absolute z-10 mt-2 w-48 origin-top-right bg-white border border-gray-300 rounded-md shadow-lg h-32 overflow-auto">
                        {categories.map((category) => (
                          <a
                            key={category.id}
                            href={`/shop-all/${category.name}`} // URL will look like: /categories/men-41
                            onClick={(e) => {
                              e.preventDefault();
                              setSelectedCategoryId(category.id);
                            }} // Update selected category ID on click
                            className="rounded-md block px-4 py-2 text-sm text-black hover:bg-gray-100"
                          >
                            {category.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                  <a href="/sale" className="nav-link">
                    Sale
                  </a>
                  <a href="/about" className="nav-link">
                    About
                  </a>
                  <a href="/contact" className="nav-link">
                    Contact
                  </a>
                  <a href="/login" className="login-link">
                    <img src={loginImage} alt="login" />
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
