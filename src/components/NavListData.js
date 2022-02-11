import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as GiIcons from "react-icons/gi";

export const NavListData = [
  {
    title: "Home",
    path: "/dashboard",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Meals",
    path: "/meals",
    icon: <GiIcons.GiMeal />,
    cName: "nav-text",
  },
  {
    title: "Glucose Levels",
    path: "/glucose",
    icon: <FaIcons.FaFileMedical />,
    cName: "nav-text",
  },
  {
    title: "Fitness",
    path: "/fitness",
    icon: <IoIcons.IoMdFitness />,
    cName: "nav-text",
  },
  {
    title: "Sleep",
    path: "/sleep",
    icon: <GiIcons.GiNightSleep />,
    cName: "nav-text",
  },
  {
    title: "Mood",
    path: "/mood",
    icon: <IoIcons.IoMdHappy />,
    cName: "nav-text",
  },
];
