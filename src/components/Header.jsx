import React, { useCallback, useState } from 'react';
import logo from '../assets/logo-explore.png';
import { ReactComponent as MenuIcon } from '../assets/menu.svg';
import Menu from './Menu';

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const handleMenuClick = useCallback((event) => {
    if (!menuIsOpen) {
      createRipple(event);
    }
    setMenuIsOpen(!menuIsOpen);
  }, [menuIsOpen]);

  const createRipple = (event) => {
    const button = document.body;

    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add("ripple");

    const ripple = button.getElementsByClassName("ripple")[0];

    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);
  }

  return (
    <>
      <div className="header">
        <img src={logo} className="header__logo" alt="logo" />
        <div className="header__menu">
          <button className="header__menu-button" onClick={handleMenuClick}>
            <MenuIcon />
          </button>
        </div>
      </div>
      <Menu show={menuIsOpen} close={handleMenuClick} />
    </>
  );
}

export default Header;