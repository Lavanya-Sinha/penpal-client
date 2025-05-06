import React from 'react'
import './Homepage.css'
import { FaArrowRight } from 'react-icons/fa';
function Homepage() {
  return (
    <div>
      <div className="homepage-container">
      <video autoPlay muted loop>
          <source src="../assets/homepage.mp4" type="video/mp4" />
        </video>
        <div className="main-container">
            <h1>Explore Your Interests With Pals!</h1>
            <div className="buttons">
         <button className='create but'>
           Create Your Own Story <FaArrowRight className='arrows'/>
         </button>
         <button className='share but'> 
           See What Your Friends Are Up To
           <FaArrowRight className='arrows'/>
         </button>
         <button className='books but'>
         Book Collection Up Ahead
         <FaArrowRight className='arrows'/>
         </button>
            </div>
        </div>
      </div>
      
    </div>
  )
}

export default Homepage

