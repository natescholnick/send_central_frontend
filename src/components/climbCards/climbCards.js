import React from 'react';
import '../../App.css';
import './climbCards.css'

const ClimbCards = (props) =>
  <div className="row ClimbCards">
    <h2>Climbs</h2>
    {props.climbs.map(({
      climb_name,
      climb_type,
      grade,
      color,
      climb_img_url
    }) =>
      <div className="col-md-4">
        <div className="card">
          <div className="row">
            <div className="col-md-6">
              <img src={climb_img_url} alt="Climb" />
            </div>
            <div className="col-md-6">
              <div className="climb_specs">{color} {grade}</div>
              <div className="climb_name">{climb_name}</div>
              <div className="climb_type">{climb_type}</div>
            </div>
          </div>
        </div>
      </div>
    )}
  </div>

export default ClimbCards;
