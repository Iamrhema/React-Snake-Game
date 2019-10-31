import React from 'react';
import './App.css';
import Card from "./Components/Card";

export default function App (){
return(
  <div>
    <h2>
      Can you remember where the cards are?
    </h2>
    <Card
    id = {1}
    width= {100}
    height={100}
    back  = {"./Images/img 11.png"}
    front = {"./Images/img 10.png"}
    flipped = {flipped.includes(1)}
    handleClick = {()=> handleClick(1)}
    />
  </div>
)
}
