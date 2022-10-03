import React from "react";
import logo from "../../assets/stackoverflow_name_logo.svg";
import { RiQuestionMark, RiFileList3Line } from "react-icons/ri";
import { TbBriefcase, TbBadge } from "react-icons/tb";
// import { IoDocumentTextOutline } from "react-icons/io";
import { BsTag } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import {
  HiOutlineSpeakerphone,
  HiInbox,
  HiOutlineDocumentText,
} from "react-icons/hi";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import "./SideNav.css";

const SideNav = ({ isOpen, setIsOpen }) => {
  const routes = [
    { title: "questions", path: "/", icon: <RiQuestionMark /> },
    { title: "jobs", path: "/", icon: <TbBriefcase /> },
    { title: "documentation", path: "/", icon: <HiOutlineDocumentText /> },
    { title: "tags", path: "/", icon: <BsTag /> },
    { title: "users", path: "/", icon: <AiOutlineUser /> },
    { title: "badges", path: "/", icon: <TbBadge /> },
    { title: "ask questions", path: "/", icon: <HiOutlineSpeakerphone /> },
    { title: "stack exchange", path: "/", icon: <RiFileList3Line /> },
    { title: "inbox", path: "/", icon: <HiInbox /> },
  ];
  return (
    <div
      className={`${
        isOpen
          ? "ml-0"
          : "-ml-[103%] md:-ml-[38%] lg:-ml-[23%] "
      } fixed top-0 left-0 z-40 md:relative bg-white w-[100%] md:w-[35%] lg:w-[20%] h-screen md:h-auto bg-opacity-70 md:bg-opacity-100 backdrop-blur-md side-nav`}
    >
      <div className="w-[100%] mt-2">
        <Link to="/">
          <img
            src={logo}
            alt="StackOverflow"
            className="block w-[80%] mx-auto"
          />
        </Link>
      </div>

      <button
        className="absolute top-14 right-2 border-l border-t border-b rounded-l-full px-2 py-1 hover:text-primary hover:border-primary duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <IoIosArrowBack />
      </button>

      <div className="mt-16 flex items-start flex-col gap-4 routes-container">
        {routes?.map((route) => (
          <Link
            key={route.title}
            className={`flex items-center gap-4 hover:text-primary duration-300`}
            to={route.path}
          >
            <div
              className={`h-7 w-1 bg-primary mx-2 ${
                route.title === "questions"
                  ? "visible active-route"
                  : "invisible"
              }`}
            ></div>
            <span>{route.icon}</span>
            <span className="uppercase">{route.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
