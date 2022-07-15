import React from "react";
import grid from "../images/grid.png";

export default function Hero()
{
     return(
          <div className="hero">
                    <div className="gridImg">
                    <img src={grid} className="grid"/>
                    </div>
                    <div className="quoteBox">
                         <h1>Online Experiences</h1> 
                         <div className="quote">
                              <p className="text"> Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>

                         </div>
                    </div>

          </div>


     )



}