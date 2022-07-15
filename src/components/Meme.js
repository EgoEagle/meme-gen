import React from "react";
import memesData from "../data.js";


export default function Meme()
{
     const[image, setUrl] = React.useState("")

     function GetMemeImage(){
          const memesArray = memesData.data.memes;
          const randomNumber = Math.floor(Math.random() * memesArray.length);
          const url = memesArray[randomNumber].url;

          setUrl(url);

     }
        
     return(
          <div className="memebox">
               <div className="inputDiv">
                    <input className="input1" placeholder="    Top Text"></input>
                    <input className="input2" placeholder="    Bottom Text"></input>
               </div>
                    <button className="generateButton" onClick={GetMemeImage}> Get a new meme image 🖼</button>
               <div>
                    <p className="toptext"> </p>
                    <img className="memeImg" src={image}></img>
                    <p className="bottext"> </p>
               </div>
          </div>


     )



}