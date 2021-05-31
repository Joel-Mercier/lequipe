import React, { useCallback, useState } from 'react';
import LazyLoad from 'react-lazyload';
import classNames from 'classnames';
import playerFocusMorganGif from '../assets/player-focus-morgan.gif';
import playerFocusMorgan from '../assets/player-focus-morgan.png';
import playerFocusElodieGif from '../assets/player-focus-elodie.gif';
import playerFocusElodie from '../assets/player-focus-elodie.png';
import playerFocusPaulGif from '../assets/player-focus-paul.gif';
import playerFocusPaul from '../assets/player-focus-paul-2.png';

const players = [
  {
    name: "Morgan",
    job: "coursier à vélo",
    city: "Lyon",
    age: "32",
    team: "Mongrels",
    title: "Triple champion du monde (2016, 2017, 2019)",
    description: "Coupe mulet, tatouages et écarteurs, look un peu punk, ce trentenaire est l’un des membres fondateurs du bike polo lyonnais. D’abord membre d’un atelier de réparation de vélo, il est aujourd’hui coursier. Tenant du titre de champion du monde les trois dernières années, il entretient une franche concurrence avec l’équipe parisienne “Call Me Daddy”.",
    portrait: playerFocusMorgan,
    animation: playerFocusMorganGif,
  },
  {
    name: "Elodie",
    job: "graphiste",
    city: "Strasbourg",
    age: "30",
    team: "Ruckus",
    title: "Vice-championne du monde (2016 Lady’s Army), championne d’Europe (2018)",
    description: "Elodie estime s’être trouvée grâce au Bike Polo. Comme pour d’autres joueurs, ses voyages pour les compétitions lui ont permis de vivre aventures, rencontres et amours. Initiée au Bike Polo via le monde du fixie, elle s’est lancée dans la création du club strasbourgeois. Après de belles victoires en tournois, elle se concentre dorénavant à l'accueil des nouveaux joueurs et au développement du club de la capitale européenne.",
    portrait: playerFocusElodie,
    animation: playerFocusElodieGif,
  },
  {
    name: "Paul",
    job: "entrepreneur",
    city: "Pantin",
    age: "33",
    team: "Call Me Daddy",
    title: "Double champion du monde (2012, 2014)",
    description: "Paul fait partie des pionniers de ce sport en France. Il en tombe amoureux pendant ses études de management. Il est l’un des joueurs qui a permis au bike-polo de prendre son élan au niveau national avec l’organisation du premier championnat de France, à Toulouse en 2012. Depuis, vélo et polo n’ont cessé de rythmer son quotidien, et cela même si la naissance de son fils ait freiné son engagement purement sportif.",
    portrait: playerFocusPaul,
    animation: playerFocusPaulGif,
  },
];

const PlayerFocus = () => {
  const [active, setActive] = useState(0);

  const handleMenuClick = useCallback((index) => {
    setActive(index)
  }, [setActive]);

  return (
    <div className="player-focus cover-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="player-focus__nav">
              {players.map((player, index) => (
                <div className={classNames("player-focus__nav-item", {"player-focus__nav-item--is-active": active === index})} key={index} onClick={() => {handleMenuClick(index)}}>{player.name}</div>
              ))}
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="player-focus__infos-container">
              {players.map((player, index) => ( 
                <ul className={classNames("player-focus__infos", {"player-focus__infos--is-active": active === index})} key={index}>
                  <li>Profession : <span>{player.job}</span></li>
                  <li>Ville : <span>{player.city}</span></li>
                  <li>Âge : <span>{player.age}</span></li>
                  <li>Equipe : <span>{player.team}</span></li>
                  <li>Palmarès : <span>{player.title}</span></li>
                </ul>
              ))}
            </div>
            <div className="player-focus__picture-container">
              {players.map((player, index) => (
                <div className={classNames("player-focus__picture", {"player-focus__picture--is-active": active === index})} key={index}>
                  <LazyLoad once key={index}>
                    <img src={player.portrait} className={classNames("img-fluid")} alt={player.name} />
                  </LazyLoad>
                </div>
              ))}
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="player-focus__animation-container">
              {players.map((player, index) => (
                <LazyLoad once key={index}>
                  <img src={player.animation} className={classNames("player-focus__animation", {"player-focus__animation--is-active": active === index})} alt={player.name} />
                </LazyLoad>
              ))}
            </div>

            <div className="player-focus__description-container">
              {players.map((player, index) => (
                <p className={classNames("player-focus__description", {"player-focus__description--is-active": active === index})} key={index}>{player.description}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerFocus;