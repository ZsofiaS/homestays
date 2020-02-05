import React from "react";

export default function Profile (props) {
  return (
    <div className="Profile">
      <div>
        <img src={props.profilePhoto} alt={props.userName} className="Profile-profilePhoto"/>
      </div>
      <div>
        <h3>{props.userName}</h3>
        <p>{props.email}</p>
        <button
          className="Logout"
          onClick={props.onClick}>Log Out</button>
      </div>
    </div>
  );
}
