import React from "react";
import "./NavItem.css";

const NavItem = (props) => {
  return (
    <div>
      <h1>{props.text}</h1>
    </div>
  );
};

export default NavItem;
