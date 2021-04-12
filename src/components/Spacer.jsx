import React from 'react';
import classNames from 'classnames';

const Spacer = ({ size }) => {
  return (
    <div className={classNames(`spacer spacer--is-${size}`)}></div>
  );
};

export default Spacer;