import React, {useState, useEffect} from "react";
import {  Link } from "react-router-dom";
import DatePicker from 'react-datepicker';
import StarIcon from "@material-ui/icons/Star";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import HomeIcon from '@material-ui/icons/Home';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import description from "../data.js";
import "react-datepicker/dist/react-datepicker.css";

export default function Homestay(props) {

  const homestayID = props.match.params.id;
  const homestay = description[homestayID];
  const [fromDate, setFrom] = useState(new Date());
  const [toDate, setTo] = useState(new Date());
  const [guest, setGuest] = useState(1);
  const [nights, setNights] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);

  useEffect(() => {
      setNights(prev => Math.ceil(Math.abs(toDate.getTime() - fromDate.getTime()) / (1000 * 3600 * 24)));
}, [fromDate, toDate]);

  function onChangeDateFrom(date) {
    setFrom(prev => date);
    // setNights(prev => Math.ceil(Math.abs(toDate.getTime() - fromDate.getTime()) / (1000 * 3600 * 24)));
  }
  function onChangeDateTo(date) {
    setTo(prev => date);
    // setNights(prev => Math.ceil(Math.abs(toDate.getTime() - fromDate.getTime()) / (1000 * 3600 * 24)));
  }
  function handleChangeGuest(e) {
    setGuest(e.target.value);
  }
  function handlePrice() {
    setNights(prev => Math.ceil(Math.abs(toDate.getTime() - fromDate.getTime()) / (1000 * 3600 * 24)));
    console.log("from: " + fromDate);
    console.log("to: " + toDate);
    console.log("nights: " + nights);
    setFinalPrice(prev => nights * guest * Number(homestay.price));
  }

  return (
    <div>
      <div className="Homestay">
        <div className="Homestay-content-left">
            <Link to="/homestays" className="Exit"><ExitToAppIcon className="Exit-icon"/></Link>
            <h1>{homestay.body}</h1>
            <p className="Homestay-title">{homestay.location}</p>
            <p><HomeIcon className="Home"/>{homestay.title}</p>

            <div className="Homestay-features">
            <div className="cardRating">
              <StarIcon className="fa fa-star" />
              <p>{homestay.rating}</p>
              {props.isNew ? <div className="new">New!</div> : <div />}
            </div>
            <p><LocalOfferIcon className="Price"/>£{homestay.price}/night</p>
            <MailOutlineIcon className="Homestay-message" />
            </div>
            <p className="Homestay-content">ABOUT THE HOMESTAY:</p>
            <p className="Homestay-content">{homestay.content}</p>
            <img className="Homestay-image" src={homestay.pic} alt={homestay.content} />
          </div>
          <div className="Homestay-content-right">
              <h3>Add dates</h3>
              <p>Dates</p>
              <DatePicker
                selected={fromDate}
                onChange={onChangeDateFrom}
                dateFormat="d MMMM, yyyy"
              />
              <DatePicker
                selected={toDate}
                onChange={onChangeDateTo}
                dateFormat="d MMMM, yyyy"
              />
              <p>Guests</p>
              <select value={guest} onChange={handleChangeGuest}>
                <option
                  value="1">1</option>
                <option
                  value="2">2</option>
                <option
                  value="3">3</option>
                <option
                  value="4">4</option>
                <option
                  value="5">5</option>
                <option
                  value="6">6</option>
                <option
                  value="7">7</option>
                <option
                  value="8">8</option>
                <option
                  value="9">9</option>
                <option
                  value="10">10</option>
              </select>
              <button className="Homestay-button" onClick={handlePrice}>Calculate price</button>
              <p>Nights: {nights}</p>
              <p>Guests: {guest}</p>
              <p>Total: £{finalPrice}</p>
              <button className="Homestay-button">Select and pay</button>
            </div>
            </div>

    </div>
  );
}
