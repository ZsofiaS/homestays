import React from "react";
import { Link } from "react-router-dom";
import FavoriteIcon from "@material-ui/icons/Favorite";
import StarIcon from "@material-ui/icons/Star";
import MailOutlineIcon from '@material-ui/icons/MailOutline';

export default function Card(props) {

  return (
          <div className="card"
              key={props.id}
              id={props.id}>
                <Link to={`/homestay/${props.id}`}>
              <img src={props.src} alt={props.content} />  < /Link>
            <p className="cardTitle">{props.title}</p>
            <p className="cardBody">{props.content}</p>
            <div className="cardRating">
              <StarIcon className="fa fa-star" />
              <p>{props.rating}</p>
              {props.isNew ? <div className="new">New!</div> : <div />}
            </div>
            <div>
              <MailOutlineIcon className="Message" />
              <FavoriteIcon
                onClick={() => props.onClick(props.id)}
                className="Heart"
              />
            </div>
          </div>
  );
}
