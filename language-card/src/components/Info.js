import React from 'react';
import { useState } from "react";

import { categories } from "../CardComponents/data";

const Info = () => {
    const[cards,setCards]=useState(categories);
    cards.map((card)=>{
    const{options}=card;
         return setCards({ options });
    });
  return (  <div>
       {cards.map((card)=>{
           const {name,options}=card;
  return(
      <div key={name}>
         <ul className='info'>
       
            <li>{options[0]}</li>
              <li>{options[1]}</li>
              <li>{options[2]}</li>
 </ul>
              </div>
  );
       })}
          
           
    </div>
       
    );
    }


export default Info;
