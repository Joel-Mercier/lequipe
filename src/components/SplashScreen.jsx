import React from 'react';
import logo from '../assets/wheel.svg';

const SplashScreen = () => {
  return (
    <div className="splashscreen">
      <div className="splashscreen__logo">
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
}

export default SplashScreen;