import React from "react";
import memesData from "../data.js";


export default function Meme()
{

     function GetMemeImage(){
          const memesArray = memesData.data.memes;
          const randomNumber = Math.floor(Math.random() * memesArray.length);
          const url = memesArray[randomNumber].url;
     }
        
     return(
          <div className="memebox">
               <div className="inputDiv">
                    <input className="input1" placeholder="    Top Text"></input>
                    <input className="input2" placeholder="    Bottom Text"></input>
               </div>
                    <button className="generateButton" onClick={GetMemeImage}> Get a new meme image 🖼</button>
               <div></div>
          </div>


     )



}