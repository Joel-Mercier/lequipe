import React, { useEffect } from 'react';
import classNames from 'classnames';
import { ReactComponent as CloseIcon } from '../assets/close.svg';

const Menu = ({ show, close }) => {

  useEffect(() => {
    if (show) {
      document.body.classList.add('menu-is-open');
    } else {
      document.body.classList.remove('menu-is-open');
    }
  }, [show])
  return (
    <div className={classNames("menu", {"menu--is-open": show})}>
      <div className="menu__header">
        <div></div>
        <button className="menu__header-button" onClick={close}>
          <CloseIcon />
        </button>
      </div>
    </div>
  )
};

export default Menu;