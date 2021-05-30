import React from 'react';
import classNames from 'classnames';
import LazyLoad from 'react-lazyload';

const Iframe = ({src, title, containerClass}) => {
  return (
    <LazyLoad once offset={500}>
      <div className={classNames("iframe-container", containerClass)}>
        <iframe frameBorder="0" type="text/html" src={src} width="100%" height="100%" allowFullScreen allow="fullscreen" title={title}></iframe>
      </div>
    </LazyLoad>
  );
};

export default Iframe;