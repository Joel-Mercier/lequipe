import React, { useState, useCallback } from 'react';
import classNames from 'classnames';
import timelineBg from '../assets/timeline-bg.jpeg';
import timelineBgTop from '../assets/timeline-bg-top.png';
import Carousel3 from '../assets/carousel-3.jpeg';

const Timeline = () => {
  const [active, setActive] = useState(0);
  const timeline = [
    {
      year: "1891",
      title: "Une idée venue d’Irlande",
      content: "L’ancêtre du Bike Polo, le Vélo Polo, voit le jour en 1891, grâce à Richard J. Mercredy. Ce cycliste irlandais décide de remplacer le cheval par un vélo, afin de démocratiser la pratique de la discipline. Comme pour son aîné, les matchs se jouent sur gazon. Le premier, auquel participe l’équipe de Mercredy, a lieu la même année.",
      background: timelineBg,
    },
    {
      year: "1908",
      title: "Apparition aux Jeux Olympiques",
      content: "Très vite, l’Angleterre se retrouve également piquée par cette jeune discipline. En 1897, la première fédération de Bike-Polo y est créée. Quelques années plus tard, la capitale britannique accueille les Jeux Olympiques de 1908. À cette occasion, une rencontre de démonstration a lieu devant le roi d’Angleterre Edouard VII. L’Irlande bat l’Allemagne 3 buts à 1.",
      background: Carousel3,
    },
    {
      year: "1920",
      title: "Envol français",
      content: "Arrivé en 1900, le polo-vélo connaît un franc succès à Paris vingt ans plus tard. En 1928, un premier championnat est organisé entre huit équipes. Quelques années plus tard, la discipline s’exporte hors de la capitale et séduit à l’échelle nationale, jusqu’à avoir sa première définition dans l’édition de 1932 du dictionnaire Larousse.",
      background: timelineBg,
    },
    {
      year: "1999",
      title: "Naissance du hardcourt bike polo",
      content: "C’est à Seattle que le bike-polo passe du gazon au bitume. Profitant du développement des fixies, les livreurs et coursiers de la ville vont adapter le jeu à leur environnement en créant un cadre unique à cette pratique. C’est cette formule qui est aujourd’hui une des plus pratiquée dans le monde.",
      background: Carousel3,
    },
    {
      year: "2001",
      title: "Le premier club de Bike Polo naît ",
      content: "Il s’agit des Axles of Evil, basé à Portland, une ville de l’Oregon, aux Etats-Unis. Ce sont eux qui vont commencer à cadrer la pratique du sport en imposant les premières règles comme la taille de la surface de jeu, la balle à utiliser ou les conditions pour marquer un but.",
      background: timelineBg,
    },
    {
      year: "2008",
      title: "Premier championnat du monde",
      content: "Le Hardcourt Bike Polo prend une dimension internationale à partir de 2008 et l’organisation de son premier championnat du monde. Le tournoi se déroule à Toronto et réunit des équipes nord-américaines et européennes. Le premier championnat du Vieux Continent se déroule l’année suivante à Londres.",
      background: Carousel3,
    },
  ];

  const handleNavItemClick = useCallback((index) => {
    setActive(index)
  }, [])

  return (
    <div className="timeline cover-section" style={{height: "920px"}}>
      <div className={classNames("timeline__bg timeline__bg-top timeline__bg--is-active")}/>
      <div className={classNames("timeline__bg timeline__bg-bottom timeline__bg--is-active")}/>
      {timeline.map((timeline, i) => (
        <div key={i} className={classNames("timeline__bg", {"timeline__bg--is-active": active === i})} style={{backgroundImage: `url(${timeline.background})`}} />
      ))}
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="timeline__nav flex-md-column">
              {timeline.map((timeline, i) => (
                <div onClick={() => {handleNavItemClick(i)}} key={i} className={classNames("timeline__nav-item", {"timeline__nav-item--is-active": active === i})}>{timeline.year}</div>
              ))}
            </div>
            
          </div>
          <div className="col-12 col-md-6">
            <div className="timeline__content">
              {timeline.map((timeline, i) => (
                <div key={i} className={classNames("timeline__content-inner", {"timeline__content-inner--is-active": active === i})}>
                  <h3 className="timeline__content-title">{timeline.title}</h3>
                  <p className="timeline__content-body">{timeline.content}</p>
                  <div className="timeline__content-year">{timeline.year}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;