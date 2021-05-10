import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import LazyLoad from 'react-lazyload';
import Spacer from '../components/Spacer';
import introImg1 from '../assets/intro-1.png'
import introImg2 from '../assets/intro-2.png';
import introImg3 from '../assets/intro-3.png';
import introBg from '../assets/intro-bg-1.png';
import introCircle1 from '../assets/intro-circle-1.png';

const Intro = () => {
  return (
    <div className="intro">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="content-container">
              <h2>“3, 2, 1 … POLO !”</h2>
              <Spacer size="medium" />
              <p>
                Au pied du Parlement européen strasbourgeois, dans le quartier du Wacken, une petite troupe rompt le silence de ce dimanche matin. À califourchon sur leurs vélos, six cyclistes s’élancent. Avec force de cris et d’invectives, les joueurs tentent de récupérer la balle qui trône au centre du terrain et de la pousser jusque dans la cage adverse, située à l’autre extrémité.
              </p>
              <Spacer size="medium" />
              <p>
                Au bord, bière, café et croissants passent de mains en mains. Ça vanne, ça rigole, ça picole… L’ambiance est bon enfant. Pourtant, ces cyclistes sont parmi les meilleurs joueurs de bike polo du monde. Peu importe, ils sont ici pour le plaisir. Car si la discipline, encore récente, tend à s’institutionnaliser, elle crie toujours autant son désir de liberté.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Spacer size="small" />
      <div className="cover-section" style={{height: '1200px', backgroundImage: `url(${introImg1})`}}>
        <div className="content-container">
          <Parallax y={["200px", "-200px"]} tagOuter="figure">
            <blockquote className="cover-section__quote">
              « Cette discipline très récente  descend directement du bike polosur gazon. »
            </blockquote>
          </Parallax>
        </div>
      </div>
      <Spacer size="medium" />
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 pr-lg-5">
            <p className="mr-lg-5">
              Alternatif et sans crottins, le hardcourt bike-polo -polo à bicyclette sur terrain dur- est une variante du polo à cheval. Il se joue sur terrain dur, par équipe de trois, les fesses posées sur une selle… de vélo. Cette jeune discipline descend directement du polo-vélo qui se pratique  sur gazon.
            </p>
          </div>
          <div className="col-12 col-md-6 d-flex align-items-center">
            <Parallax y={["200px", "-200px"]} tagOuter="figure">
              <blockquote>
                « On prenait des bâtons de ski sur lesquels on mettait des caps de tuyaux »
              </blockquote>
            </Parallax>
          </div>
        </div>
      </div>
      <Spacer size="medium" />
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 pr-lg-5 d-flex align-items-center position-relative">
            <Parallax className="position-absolute parallax-item--first" y={["100px", "-100px"]} tagOuter="figure">
              <LazyLoad once offset={500}>
                <img src={introCircle1} alt="" className="img-fluid" />
              </LazyLoad>
            </Parallax>
            <Parallax y={["200px", "-100px"]} tagOuter="figure">
              <LazyLoad once offset={500}>
                <img src={introImg2} alt="Intro" className="img-fluid" />
              </LazyLoad>
            </Parallax>
          </div>
          <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
            <p className="ml-lg-5">
              Dans la fin des années 2000,  premières équipes naissent dans les agglomérations de Paris, Lyon, Grenoble, et Toulouse.
            </p>
            <p className="ml-lg-5">
              La machine est alors lancée, alimentée d’un carburant particulier : le caractère alternatif d’un sport naissant
            </p>
          </div>
        </div>
      </div>
      <Spacer size="medium" />
        <div className="cover-section" style={{height: '970px', backgroundImage: `url(${introBg})`}}>
          <div className="content-container">
            <Parallax y={["200px", "-200px"]} tagOuter="figure">
              <LazyLoad once offset={500}>
                <img src={introImg3} className="img-fluid" alt="Intro" />
              </LazyLoad>
            </Parallax>
          </div>
        </div>
      <Spacer size="medium" />
      
      <Spacer size="large" />
    </div>
  )
};

export default Intro;