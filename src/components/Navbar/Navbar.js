import React from "react";
import logo from "../../assets/stackoverflow_name_logo.svg";
import user from "../../assets/user.png";
import { HiMenuAlt1 } from "react-icons/hi";
import { IoMdHelpBuoy, IoIosArrowDown } from "react-icons/io";
import { FaTv, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <nav className="flex items-center justify-between py-4 mx-4 ">
        <div className="flex items-center gap-4">
          <button
            className="hover:text-primary duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            <HiMenuAlt1 />
          </button>
          <div className={`${isOpen ? "hidden" : "block"}`}>
            <Link to="/">
              <img
                src={logo}
                alt="StackOverflow"
                className="inline-block h-8"
              />
            </Link>
          </div>
          <div className="search-container hidden md:block">
            <span className="search-icon">
              <FaSearch />
            </span>
            <input type="text" name="search" id="search" className="search-field" />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="hidden md:flex items-center gap-1 hover:text-primary duration-300"
          >
            <span>
              <IoMdHelpBuoy />
            </span>
            <span>Help</span>
          </Link>
          <Link
            to="/"
            className="hidden md:flex items-center gap-1 hover:text-primary duration-300"
          >
            <span>
              <FaTv />
            </span>
            <span>Tour</span>
          </Link>
          <Link
            to="/"
            className="flex items-center gap-1 hover:text-primary duration-300 nav-user"
          >
            <span>
              <img src={user} alt="User" className="rounded-full w-8 h-8" />
            </span>
            <span className="user-arrow">
              <IoIosArrowDown />
            </span>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
