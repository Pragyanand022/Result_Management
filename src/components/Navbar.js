import React from 'react'
import '../ham.css';

function Navbar({UserName,SchoolName,toggleSidebar}) {
  
  return (
    <nav>
      <div className="container nav-container">
        <input className="checkbox" type="checkbox" name="" id="checkbox1"  onClick={toggleSidebar}/>
        <div className="hamburger-lines">
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>
        <div className='NavUserDetails'>
          {UserName}/{SchoolName}
        </div>
        <div className="logo">
          <input className="checkbox" type="checkbox" name="" id="checkbox2" />
          <div className="d-flex widgets-icons-2 bg-gradient align-items-center"><i className="fa fa-graduation-cap"></i></div>
          <div className='logoCard'>
            Logged in as
            <h4>{UserName}</h4>
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
