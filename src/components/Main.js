import React from "react";

export default function Main (props) {
  return (
    <div className="Main">
      <div className="Main-container">
      <h1>StayBnB</h1>
      <h2>Find the best homestays</h2>
      <button
      className="Login"
      onClick={props.onClick}>Login with Google</button>
      </div>
    </div>
  );
}
