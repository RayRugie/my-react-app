import React from 'react';
import './Linksto.css'
import { Link } from 'react-router-dom';

const Linksto = () => {
  return (
    <div className='linkto'>
      <div className="dlink">
      <a href='https://twitter.com/OOmorugie?t=_Qwg11BYCTxk6PamVHvYng&s=09' id='twitter'>Twitter link</a>
      </div>
      <div className="dlink">
      <a href='https://training.zuri.team/' id='btn__zuri'>Zuri Team</a>
      </div>
      <div className="dlink">
      <a href='https://books.zuri.team/' id='books'>Zuri Books</a>
      </div>
      <div className="dlink">
      <a href='https://books.zuri.team/python-for-beginners?ref_id=<omorugieoyibotha>' id='book__python'>Python Books</a>
      </div>
      <div className="dlink">
      <a href='https://background.zuri.team' id='pitch'>Background Check for Coders</a>
      </div>
      <div className="dlink">
      <a href='https://books.zuri.team/design-rules' id='book__design'>Design Books</a>
      </div>
         <Link
          to='/contact'
          className='contact-link'
          id='contact'
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}>
           
               Contact Me
          
         
        </Link>
    </div >
  )
}

export default Linksto
