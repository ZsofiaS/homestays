import React from "react";
import Card from "./Card";

export default function Selected(props) {
  return (
    <div className="Selected">
      <h3>Your favourite homestays</h3>
      {props.description.length ===0 && <p>You have not saved anything in your favourites yet.</p>}
      <div className="container">
        {props.description.length > 0 ? (
          props.description.map((entry) => (
          <Card className="card"
                key={entry.id}
                id={entry.id}
                src={entry.pic}
                title={entry.title}
                content={entry.body}
                rating={entry.rating}
                isNew={entry.isNew}
                onClick={() => props.onClick(entry.id)} />
        ))) : null }
      </div>
    </div>
  );
}
