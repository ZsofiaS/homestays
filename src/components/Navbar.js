import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div
    className={props.isShown ? "Navbar-active" : "Navbar"}
    isShown={props.isShown}>
        <Link className="Link" to="/homestays">
          Home
        </Link>
        <Link className="Link" to="/favourites">
          Wish List
        </Link>
        <Link className="Link" to="/profile">
          My account
        </Link>
      <button
      className="Logout"
      onClick={props.onClick}>Log Out</button>
    </div>
  );
}
