import React from 'react';
import beacon from '../assets/beacon.png';

const Event = (props) => (
  <div>
      <p className="bubble">{props.title}</p>

    <img className="beacon" src={beacon} alt="B" />
  </div>
)

export default Event;