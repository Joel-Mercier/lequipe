import React from 'react';
import classNames from 'classnames';

const Iframe = ({src, title, containerClass}) => {
  return (
    <div className={classNames("iframe-container", containerClass)}>
      <iframe frameborder="0" type="text/html" src={src} width="100%" height="100%" allowfullscreen allow="fullscreen" title={title}></iframe>
    </div>
  );
};

export default Iframe;