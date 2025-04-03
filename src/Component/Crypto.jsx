import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import searchlogo from '/src/assets/search.svg'
import { useNavigate } from "react-router-dom"
import './Crypto.css'
import crypto from '/src/assets/crypto.svg'
import dogcoin from '/src/assets/dogecoin.svg'
import celestia from '/src/assets/celestia.svg'
import usd from '/src/assets/usd.svg'

function Crypto() {

  const navigate = useNavigate();

  return (
    <div className='container'>
       <div className='main'>
         <div className='pre-main'>
           <input className='input' type="text" placeholder='Search'/>
           <img src={searchlogo} className='search-logo'  alt="" />
         </div>
        <div className='para'>
          <p className='line'>Name</p>
          <p className='line'>Price</p>
          <p className='line'>Market</p>
          <p className='line'>Volume</p>
          <div>
            <img className='usd-icon' src={usd} alt="" />
          <img className='dog-icon' src={dogcoin} alt="" />
          <img className='celestia-icon' src={celestia} alt="" />
          <img className='crypto-icon' src={crypto} alt="" />
        </div>
        </div>
         </div>
         <button onClick={()=> navigate("/")} className='gotohome'>Go-home</button>
         <button onClick={()=> navigate("/Weather")} className='gotocrypto' >Go-Weather</button>
         </div>
  )
}

export default Crypto
