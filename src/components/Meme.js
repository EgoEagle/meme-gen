import React from "react";


export default function Meme()
{
     const[allMemes, setAllMemes] = React.useState([])
     const[image, setUrl] = React.useState("http://i.imgflip.com/1bij.jpg")
     const[formData,setFormData] = React.useState(
          {topText:"" , botText:""}
     )
     

     function GetMemeImage(){

          const randomNumber = Math.floor(Math.random() * allMemes.length);
          const url = allMemes[randomNumber].url;

          setUrl(url);

     }

     React.useEffect(() =>{
          fetch("https://api.imgflip.com/get_memes")
               .then(res => res.json())
               .then(data => setAllMemes(data.data.memes))
     },[])



     function handleChange(event){
          setFormData(prevFormData => {
               return {
                   ...prevFormData,
                   [event.target.name]: event.target.value
               }
          })

     }

        
     return(
          <div className="memebox">
               <div className="inputDiv">
                    <form>
                         <input className="input1" placeholder="    Top Text" onChange={handleChange} name="topText" value={formData.topText}></input>
                         <input className="input2" placeholder="    Bottom Text" onChange={handleChange} name="botText" value={formData.botText}></input>
                    </form>
               </div>
                    <button className="generateButton" onClick={GetMemeImage}> Get a new meme image 🖼</button>
               <div>
                    <p className="topText"> {formData.topText} </p>
                    <img className="memeImg" src={image}></img>
                    <p className="botText"> {formData.botText}</p>
               </div>
          </div>


     )



}