import React from 'react';
import {useState} from 'react';

import {categories} from'../CardComponents/data';

import Info from './Info';
const Cards = () => {
    const[cards,setCards]=useState(categories);
     

   
        
 
    
  return (
   <div >
      {cards.map((card) => {
        const { img, name} = card;
        return (
          <div
            key={name}
            className='Card'
           >
       

            <img src={img} alt={name} className='Image' />
            <h4>{name}</h4>
          </div>
        );
      })}
     
    </div>
  );
}

export default Cards;
