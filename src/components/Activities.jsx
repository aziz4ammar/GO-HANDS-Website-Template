import React, { useState } from 'react'
import Navbar from './Navbar'
import cal from "./img/cal.png";
import guess from "./img/guess.png";
import click from "./img/click.png";
import Act from './Act';


const Activities = () => {
  const[num1,setNum1]= useState(Math.floor(Math.random()*10))
  const[num2,setNum2]= useState(Math.floor(Math.random()*10))
  var clicks = 0;
  function laclick() {
      clicks++;
      if (clicks <= 350) {
          document.getElementById("clicks").innerHTML = clicks;}
  };

  function handleRes(){
    var inpt = document.getElementById("inpt").value
    console.log(num1*num2)
    if(num1*num2 == inpt){
      alert("good job!")
    }else{
      alert("Try again!")
    }
  }
  function handlePanda(){
    var panda = document.getElementById("panda").value
    let answ=panda.toLowerCase()
    if(answ =="panda"){
      alert("Good job !")
    }else{
      alert("Try again !")
    }
  }
  function handlePause(id){
    id.style.animationPlayState = 'paused'
  }
  return (
    <div>
        <Navbar/>
        <div className='tit'><h1>Our Activities</h1></div>
        <div className='act-cont'>
          <div className='lab1'>
            <img className='imact' src={cal} alt="" />
            <button className='btn'><a href='#math'>Maths</a></button>
          </div>
          <div className='lab2'>
            <img className='imact' src={guess} alt="" />
            <button className='btn'><a href='#guess'>Guess</a></button>
          </div>
          <div className='lab3'>
            <img className='imact' src={click} alt="" />
            <button className='btn'><a href='#click'>Click</a></button>
          </div>
        </div>
        <Act/>
    </div>
  )
}

export default Activities