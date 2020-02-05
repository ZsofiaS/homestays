import React, { useState } from "react";
import Card from "./Card";

function Homestays(props) {
  const [location, setLocation] = useState("All");

function handleChange (e) {
  let location = e.target.value;
  setLocation(location);
  console.log(location);
}

  return (
    <div className="Homestays">
    <h3>Welcome {props.username}!</h3>

    <form >
    <div className="input">
      <input
        type="radio"
        checked={location === "Uros, Peru"}
        onChange={handleChange}
        value="Uros, Peru" />
        <label htmlFor="Uros">Homestays in Uros, Peru</label>
    </div>
    <div className="input">
      <input
        type="radio"
        checked={location === "Aguas Calientes, Peru"}
        onChange={handleChange}
        value="Aguas Calientes, Peru" />
        <label htmlFor="Aguas, Peru">Homestays in Aguas Calientes, Peru</label>
    </div>
    <div className="input">
      <input
        type="radio"
        checked={location === "All"}
        onChange={handleChange}
        value="All" />
        <label htmlFor="All">Select all</label>
    </div>
    </form>
      { location === "All" ? <h2>Top-rated homestays</h2> : <h2>Top-rated homestays in {location}</h2>}
      <div className="container">
        { location === "All" ?
        (props.description.map((entry) => (
            <Card className="card"
                  key={entry.id}
                  id={entry.id}
                  src={entry.pic}
                  title={entry.title}
                  content={entry.body}
                  rating={entry.rating}
                  isNew={entry.isNew}
                  onClick={() => props.onClick(entry.id)} />
          ))
        ) :
          ([...props.description].filter(i => i.location === location).map((entry) => (
          <Card className="card"
                key={entry.id}
                id={entry.id}
                src={entry.pic}
                title={entry.title}
                content={entry.body}
                rating={entry.rating}
                isNew={entry.isNew}
                onClick={() => props.onClick(entry.id)} />
        )))}
      </div>
    </div>
  );
}

export default Homestays;
