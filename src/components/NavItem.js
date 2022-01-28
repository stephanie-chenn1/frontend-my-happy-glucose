import React from "react";
import "./NavItem.css";

const NavItem = (props) => {
  return (
    <div className="border border-danger border-2">
      <h1>{props.text}</h1>
    </div>
  );
};

export default NavItem;
