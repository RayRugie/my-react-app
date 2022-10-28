import React from 'react';
import './Header.css';
import hero from '../../Assets/profile__img.png';
import share from '../../Assets/_Avatar share button.png';




const Header = () => {
  
  return (
    <div className="Profile">
        <div className="left-p">
            <img src={hero} alt="" className="profilepic" />
        <div className="twitter">Annette Black</div>
        </div>
        <div className="right-p">
            <img src={share} alt="" className="share" />
        </div>
        
    </div>

  )
}

export default Header