import React from 'react'
import Navbar from './Navbar'
import aziz from "./img/aziz.png";
import bousarsar from "./img/bousarsar.png";
import triki from "./img/triki.png";

const Aboutus = () => {
  return (
    <div>
        <Navbar/>
        <h1 className='fe'>Our Team</h1>
        <div className='names'>
            <div><img id='b1' className='name' src={bousarsar} alt="" /></div>
            <div><img id='b2' className='name' src={aziz} alt="" /></div>
            <div><img id='b3' className='name' src={triki} alt="" /></div>
        </div>
    </div>
  )
}
export default Aboutus