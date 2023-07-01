import React, { useContext } from 'react';
import '../css/NewsLetter.css';
import { NavigationContext } from '../contexts/HomePageContext';

export default function NewsLetter() {
    const {setPopup} = useContext(NavigationContext);

    function closePopup() {
        setPopup(false);
    }

  return (
    <>
      <div className="newsletter">
        <button className='closePopupBtn' onClick={closePopup}>X</button>
        <h2>Join our Newsletter for Exclusive Rewards!</h2>
        <input type="email" placeholder="Your Email.." />
        <button className='submitBtn' onClick={closePopup}>Sign Up!</button>
      </div>
    </>
  );
}
