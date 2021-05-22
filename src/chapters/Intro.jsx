import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import LazyLoad from 'react-lazyload';
import Spacer from '../components/Spacer';
import Timeline from '../components/Timeline';
import introImg1 from '../assets/intro-1.png';
import introImg2 from '../assets/intro-2.png';
import introImg3 from '../assets/intro-3.png';
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
                Au pied du Parlement européen, dans le quartier du Wacken, à Strasbourg, six cyclistes s’élancent sur un terrain de basket. À force de cris et d'invectives, ces joueurs rompent le silence d’un dimanche matin pour faire vivre leur sport : le hardcourt bike polo - ou polo à bicyclette sur terrain dur.
              </p>
              <Spacer size="medium" />
              <p>
                Au bord du terrain, bières, cafés et croissants passent de mains en mains. Les vannes s’enchaînent et les éclats de rire fusent, l’ambiance est détendue et bon enfant. Et si certains de ces joueurs font partie des meilleurs mondiaux, tous et toutes partagent ce même plaisir ; celui de pratiquer un sport récent qui crie toujours son désir de liberté.
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
              « Cette discipline très récente  descend directement du vélo-polo sur gazon. »
            </blockquote>
          </Parallax>
        </div>
      </div>
      <Spacer size="medium" />
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-12">
            <div className="content-container">
              <p className="mr-lg-5">
                Alternatif et sans crottins, le hardcourt bike-polo se joue par équipe de trois. Cette jeune discipline descend directement du polo-vélo qui se pratique, lui, sur gazon, comme le polo traditionnel à cheval. Bien qu’en marge du milieu cycliste professionnel, cette pratique sportive s’est développée assez rapidement.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Spacer size="medium"/>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="mb-0">Historique du Bike Polo</h2>
          </div>
        </div>
      </div>
      <Timeline/>
      <Spacer size="large"/>
      <Spacer size="large"/>
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
              <figcaption>Le hardcourt bike polo se joue sur bitume avec une balle, un maillet et un vélo.</figcaption>
            </Parallax>
          </div>
          <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
            <p className="ml-lg-5">
              La légende raconte que ce seraient des coursiers à vélo de Seattle qui, en 1999, par ennui, se prennent au jeu du polo-vélo, et l’adaptent à leur environnement urbain. A partir de 2007, la pratique arrive en France, alimentée par un carburant singulier : le caractère alternatif du hardcourt bike-polo. Le sport se construit autour d’un esprit d’indépendance, mélangeant “Do-It-Yourself” (faire soi-même) et débrouillardise.
            </p>
          </div>
        </div>
      </div>
      <Spacer size="medium" />
        <div className="cover-section cover-section--is-intro">
          <div className="cover-section__inner-bg"></div>
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