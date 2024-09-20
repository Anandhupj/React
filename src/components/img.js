import React from 'react'
import natureImage from "./nature.jpg"
import "./img.css"


function Img() {
  return (
    <div className='container'>
        <h1>Nature</h1>
        <div className='image'>
    <img src= {natureImage} alt="img" width="100%" height='300px'></img>
    </div>
    <div className='dis'>
        <h1> Description</h1>
        <p>Nature can be defined as the interaction between physical surroundings around us. Physical surroundings include living and non-living beings.Living beings include humans, animals, plants, and anything that can breathe in and out. Non-living beings are weather, climate, rocks, air,  and water</p>
    </div>

    
    </div>
  )
}

export default Img