import React, { useState, useCallback } from 'react';
import classNames from 'classnames';
import LazyLoad from 'react-lazyload';
import Iframe from './Iframe';

const stats = [
  {
    title: "Profession",
    iFrameTitle: "Situation professionnelle des licenciés BP (en %)",
    height: "683",
    src: "https://datawrapper.dwcdn.net/XNirT/9/",
  },
  {
    title: "Genre",
    iFrameTitle: "Profil des joueurs (en %)",
    height: "409",
    src: "https://datawrapper.dwcdn.net/fz4h2/2/",
  },
  {
    title: "Niveau",
    iFrameTitle: "Niveaux des joueurs de BP",
    height: "435",
    src: "https://datawrapper.dwcdn.net/63Yvr/2/",
  },
  {
    title: "Club",
    iFrameTitle: "Evolution du nombre de pratiquants de BP par club",
    height: "431",
    src: "https://datawrapper.dwcdn.net/uLdQx/3/",
  },
];

const Stats = () => {
  const [active, setActive] = useState(0);
  const handleNavItemClick = useCallback((index) => {
    setActive(index)
  }, []);
  return (
    <div className="stats-container">
      <div className="row">
        <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
          <div className="stats__nav flex-md-column">
            {stats.map((stat, i) => (
              <div onClick={() => {handleNavItemClick(i)}} key={i} className={classNames("stats__nav-item", {"stats__nav-item--is-active": active === i})}>{stat.title}</div>
            ))}
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="stats__content-container">
            {stats.map((stat, i) => (
              <div className={classNames("stats__content", {"stats__content--is-active": active === i})} key={i}>
                <LazyLoad once offset={500} key={i}>
                  <iframe title={stat.iFrameTitle} aria-label="chart" src={stat.src} scrolling="no" frameBorder="0" style={{minWidth: "100% !important", border: "none"}} height={stat.height}></iframe>
                </LazyLoad>
              </div>
            ))}
          </div>        
        </div>
      </div>
    </div>
  );
};

export default Stats;