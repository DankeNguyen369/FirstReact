import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations</h1>
      <div className="cards__containder">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="assets/images/img-9.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="assets/images/img-2.jpg"
              text="Travel through the Island of Bali in a Private Cruise"
              label="Luxury"
              path="/services"
            />
            <CardItem
              src="assets/images/img-9.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="assets/images/img-2.jpg"
              text="Travel through the Island of Bali in a Private Cruise"
              label="Luxury"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
