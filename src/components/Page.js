import React from "react";
import Header from '../components/Header.js';
import Meme from '../components/Meme.js';

export default function Page()
{

     const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]


     const paragraphs = pokemon.map(mon => `<p>${mon}</p>`)
    /* const dataElements = data.map( element => {
          return <Card title={element.title} openSpots={element.openSpots} review={element.stats.reviewCount} location={element.location}price={element.price} rating={element.stats.rating} coverImg={element.coverImg} />
        })*/

     return(
          <div>
               <Header />
               <Meme />
          </div>


     )



}