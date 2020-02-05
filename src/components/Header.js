import React from "react";
import Navbar from "./Navbar";

const Header = props => {
  return (
    <div className="Header">
    <div className="Header-container">
    <div className="Header-logo">
      <h1>StayBnB</h1>
      <div>
        <img src={props.profilePhoto} alt={props.userName} className="profilePhoto"/>
      </div>
    </div>
    <div className="Header-menu" onClick={props.onClickMenu}>
      <div className="Header-menu-line"></div>
    </div>
    </div>
    <Navbar isShown={props.isShown} onClick={props.onClick} userName={props.userName}/>
    </div>
  );
};

export default Header;
