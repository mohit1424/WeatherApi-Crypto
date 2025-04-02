import React from 'react'
import './Home.css'
import sun from '/src/assets/sun.svg'
import crypto from '/src/assets/crypto.svg'
import dogcoin from '/src/assets/dogecoin.svg'
import celestia from '/src/assets/celestia.svg'
import usd from '/src/assets/usd.svg'
import taj from '/src/assets/tajmahal.svg'
import paris from '/src/assets/paris.svg'
import london from '/src/assets/london.svg'

function Home() {
  return (
    <>
    <h1 style={{"textAlign":"center"}}>Welcome!</h1>
    <div className='home-container'>
       
     <div className="home-main">
           <h2>See here the world's weather</h2>
           <img className='sun' src={sun} alt="" />
         <img className='sun1' src={paris} alt="" />
         <img className='sun2' src={london} alt="" />
         <button className='market-btn'>click here to see weather</button>
     </div>

     <div className="home-main2">
     <h2>See here the Crypto market</h2>
     <img className='crypto' src={crypto} alt="" />
     <div>
     <img className='crypto1' src={usd} alt="" />
     <img className='crypto2' src={dogcoin} alt="" />
     </div>
     <button className='market-btn'>click here to see market</button>
     </div>
    </div>
    </>
  )
}

export default Home
