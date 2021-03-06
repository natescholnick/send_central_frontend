import React from 'react';
import '../../App.css';
import './gymCards.css'

const GymCards = (props) =>
  <div className="GymCards">
    {props.gyms.map(({
      full_name,
      address,
      city,
      gym_img_url,
      description
    }) =>
      <a href='/gym/CRG_Watertown'>
        <div className="card">
          <img src={gym_img_url} alt="Gym" />
          <div className="gym-name">{full_name}</div>
          <div className="address">{address}, {city}</div>
          <p>{description}</p>
        </div>
      </a>
    )}
  </div>

export default GymCards;
