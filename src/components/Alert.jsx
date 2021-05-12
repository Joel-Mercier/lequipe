import React from 'react';
import classNames from 'classnames';
import { ReactComponent as Bullhorn } from '../assets/bullhorn.svg';

const Alert = ({ open, content, cta, onClick }) => {
  return (
    <div className={classNames("alert", {"alert--is-open": open})}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="alert__content">
              <div className="alert__icon">
                <Bullhorn />
              </div>
              <p>{content}</p>
              {cta && onClick &&
                <button
                  className="btn transparent"
                  onClick={(e) => {
                    e.preventDefault();
                    onClick();
                  }}
                >
                  <p>
                    <span className="bg"/>
                    <span className="base"/>
                    <span className="text">{cta}</span>
                  </p>
                </button>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alert;