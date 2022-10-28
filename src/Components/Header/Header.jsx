import React from 'react';
import './Header.css';
import hero from '../../Assets/profile__img.png';
import share from '../../Assets/_Avatar share button.png';
import share2 from '../../Assets/_Avatar share button (2).png';




const Header = () => {
  
  return (
    <div className="Profile">
        <div className="left-p">
            <img src={hero} alt="" className="profilepic" />
        <div className="twitter">Annette Black</div>
        </div>
        <div className="right-p">
            <img src={share} alt="Twitter" className="share" />
            <img src={share2} alt="Twitter" className="share2" />
        </div>
        
    </div>

  )
}

export default Header