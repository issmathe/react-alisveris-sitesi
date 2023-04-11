import React from 'react'
import { Link } from 'react-router-dom'
import BannerImage from '../assets/banner.jpg'
function Home() {
  return (
    <div className='home' style={{backgroundImage:`url(${BannerImage})`}}>
      <div className='headerContainer'>
        <h1>Burger 33</h1>
        <p>Delicious Hamburgers <br/> with 33 spcic mixed</p>
        <Link to="/menu"><button>order now</button></Link>
        
      </div>
    </div>
  )
}

export default Home