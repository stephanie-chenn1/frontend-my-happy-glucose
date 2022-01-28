import React from "react";
import NavItem from "./NavItem";

const NavList = () => {
  return (
    <div>
      <NavItem text={"Meals"} />
      <NavItem text={"Blood Glucose"} />
      <NavItem text={"Fitness"} />
      <NavItem text={"Sleep"} />
      <NavItem text={"Mood"} />
    </div>
  );
};

export default NavList;
