import React from 'react'
import '../ham.css';

function Navbar(props) {
  const LogocardElement=document.getElementsByClassName("LogoCard")[0];
  const  showLogoCard =()=> {
    console.log("clicked");
    if (LogocardElement.style.display==="none") {
      LogocardElement.style.display="block";
    } else {
      LogocardElement.style.display="none";
    }
  }
  return (
    <nav>
      <div className="container nav-container">
        <input className="checkbox" type="checkbox" name="" id="" />
        <div className="hamburger-lines">
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>
        <div className='NavUserDetails'>
          {props.UserName}/{props.SchoolName}
        </div>
        <div className="logo" onClick={showLogoCard}>
          <div className="d-flex widgets-icons-2 bg-gradient align-items-center"><i className="fa fa-graduation-cap"></i></div>
          <div className='logoCard'>
            Logged in as
            <h4>{props.UserName}</h4>
            <div className='logoCardRuler'></div>
            Help<br />
            Settings
            <div className='logoCardRuler'></div>
            Log out
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
