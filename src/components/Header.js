import React from "react";
import trollface from "../images/trollface.png";


export default function Header()
{

        
     return(
          <div>
               <header className="header">
                    <img className="trollface" src={trollface} ></img>
                    <h1 className="title"> Meme Generator </h1>
               </header>
          </div>


     )



}