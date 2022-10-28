import React from 'react';
import './Icons.css';
import Slack from '../../Assets/slack.png';
import Github from '../../Assets/Icon.png';
const Icons = () => {
  return (
    <div className="icons">
        <span className="icon">
            <a href="/" id='Slack'><img src={Slack} alt='' className='Slack'></img> </a>
        </span>
        <span className="icon">
            <a href="https://github.com/RayRugie" id='Github'><img src={Github} alt='' className='Github'></img> </a>
        </span>
    </div>
  )
}

export default Icons
