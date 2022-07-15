import React from "react";
import star from "../images/star.png";



export default function Card(prop)
{

     /*
         title: "Life Lessons with Katie Zaferes",
         description: "I will share with you what I call \"Positively Impactful Moments of Disappointment.\" Throughout my career, many of my highest moments only came after setbacks and losses. But learning from those difficult moments is what gave me the ability to rise above them and reach my goals.",
         price: 136,
         coverImg: "katie-zaferes.png",
         stats: {
             rating: 5.0,
          {`${process.env.PUBLIC_URL}/images/${prop.coverImg}`}
     */
     return(
          <div className="cardBox">
               {prop.openSpots === 0 && <div className="cardBadge">SOLD OUT</div>}
               <img src={`${process.env.PUBLIC_URL}/images/${prop.coverImg}`} className="cardImage"/>
               <div className="cardStat">
                    <img src={star} className="star" />
                    <span> {prop.rating} </span>
                    <span className="gray"> ({prop.review}) • </span>
                    <span className="gray"> {prop.location} </span>
               </div>
               <p>{prop.title}</p>
               <p>From <strong>${prop.price}</strong> / person</p>
          </div>


     )


}