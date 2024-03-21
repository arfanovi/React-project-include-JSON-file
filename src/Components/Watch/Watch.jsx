import React from 'react';
import './Watch.css';
// import Sunglass from '../Sunglass/Sunglass';
const Watch = ({watch}) => {
    const {image, name,country, price} = watch;
    return (
        <div className="card-grid">
      
          <div className="card">
            <img src={image} />
            <h3>{name}</h3>
            <p>Country: {country}</p>
            <p>Price: ${price}</p>
          </div>
      </div>
    );
};

export default Watch;