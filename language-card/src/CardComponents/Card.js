import React, { useState } from "react";

import "Card.css";
export default function Card({ name, img, options }) {
  const [isVisible, setIsvisible] = useState(true);

  return (
    <>
      <div key={name} className='card' onClick={() => setIsvisible(!isVisible)}>
        {isVisible ? (
          <Frontcard name={name} img={img} />
        ) : (
          <Info options={options} />
        )}
      </div>
    </>
  );
}

function Info({ options }) {
  return (
    <ul className='info'>
      {options.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

function Frontcard({ img, name }) {
  return (
    <div>
      <img src={img} alt='' />
      <h4>{name}</h4>
    </div>
  );
}
