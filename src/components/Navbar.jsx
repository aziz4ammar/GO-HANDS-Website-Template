import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo1 from "./img/logo1.png";
import logo from "./img/logo.png";





const linkStyle = {
    textDecoration: 'none'
};
const Navbar = () => {
    const [isChecked, setIsChecked] = useState(false);
  const [className, setClassName] = useState('App area');

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    setClassName(isChecked ? 'App area' : 'app new-class');
  };
  return (
        <div className= {className}>
      <label id='s' className="switch">
          <input id="check" type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
          <span className="slider round"></span>
      </label>
    <nav class="navbar">
                <Link to="/" >
                    <img id='i1' src={logo} alt="" />
                </Link>
                <Link className='link' to="/Activities" style={linkStyle}>
                    <span id='t1' className="logo-text" >Activities</span>
                </Link>
                <Link to="/">
                    <img id='i2' src={logo1} alt="" />
                </Link>
                <Link className='link' to="/Aboutus" style={linkStyle}>
                    <span id='t2' className="logo-text">About us</span>
                </Link>
                
            </nav>
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>

</div>
  )
}

export default Navbar