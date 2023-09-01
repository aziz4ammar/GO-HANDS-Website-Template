import React, { useState } from 'react'
import ad1 from "./img/ad1.png"
import panda from "./img/panda.JPG"
function Act() {
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
      <div className='acts'>
      <div className='activitie1' id='guess'>
      <h2>Guess The Animal</h2>
        <div className='ad1'>
          <img src={ad1} alt="" />
        </div>
        <div className='ad2'>
          <img src={ad1} />
        </div>
        <div className='content1'>
          <img src={panda} />
          <input type="text" id='panda' />
          <button onClick={handlePanda}>Check Answer</button>
        </div>
      </div>
      <div className='activitie2' id='math'>
      <h2>Mathematics</h2>
        <div className='ad3'>
          <img src={ad1} alt="" />
        </div>
        <div className='ad4'>
          <img src={ad1} alt="" />
        </div>
        <div className='content2'>
          <p><span id='a'>{num1}</span> X <span id='b'>{num2}</span></p>
          <input type="number" id='inpt' />
          <button onClick={handleRes}>Check Answer</button>
        </div>
      </div>
      <div className='activitie3' id='click'>
      <h2>Clicker</h2>
        <div className='ad5'>
          <img src={ad1} alt="" />
        </div>
        <div className='ad6'>
          <img src={ad1} alt="" />
        </div>
        <div className='content3'>
        <p>Clicks: <a id="clicks">0</a></p>
        <button onClick={laclick}>click here!</button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Act