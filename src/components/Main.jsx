import React  from 'react'
import logo from "./img/logo.png";
import slogon from "./img/slogon.png";
import donation from "./img/slogon2.png";
import cont from "./img/cont.png";

const Main = () => {
  return (
    <div>
                  <div className='title'>
                <img id='ti' src={logo} alt="" />
            </div>
            <div>
              <img id='ti2' src={slogon} alt="" />
            </div>
            <div className='whatis'>
        <img src={donation} alt="" />
            <h2>What is GO-HANDS ?</h2>
            <br />
            <p><span style={{
                fontWeight:"bold"
            }}>GO-HANDS</span> is a website that you can play activities automatically generates donations from ads for charities whom helps to avoid poverty. <br />
            </p>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
        <div id='a1' className='contact'>
        <h2 id='contact-text'>Contact Us!</h2>
        <div className='inpts'>
        <input type="text" placeholder='Full Name'/>
        <input type="number" placeholder='Phone Number' />
        <input type="email" placeholder='E-Mail' />
        <textarea name="" id="" placeholder='Your Message' cols="20" rows="5"></textarea>
        <button>Send !</button>
        </div>
        <div className='socials'>
          <h3>Our Socials:</h3>
          <p>E-mail: go_hands@fake.com</p>
          <p>Phone: +216 23 456 789</p>
          <p>Address:Route De Tunis Km6,<br/>Sakiet Ezzit,<br/>Sfax, Tunisia</p>
        </div>
        <div className='contact-logo'>
          <img className='imgm' src={cont} alt="" />
        </div>
        </div>
    </div>
  )
}

export default Main