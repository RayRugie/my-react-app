import React from 'react';
import './Footer.css';
import I4G from '../../Assets/I4G.png';
import Zuri from '../../Assets/Zuri.Internship.png';
const Footer = () => {
  return (
  <div className="footer">
    <span className='I4G'><img src={I4G} alt=''></img> </span>
    <p>HNG Internship 9 Frontend Task</p>
    <span className='Zuri'><img src={Zuri} alt=''></img> </span>
  </div>
  )
}

export default Footer
