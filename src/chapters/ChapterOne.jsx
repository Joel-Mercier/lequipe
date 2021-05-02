import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import FloatingImages from '../components/FloatingImages';
import HitAnimation from '../components/HitAnimation';
import Spacer from '../components/Spacer';
import QuoteStack from '../components/QuoteStack';
import Carousel from '../components/Carousel';
import SkewSection from '../components/SkewSection';
import introImg1 from '../assets/intro-1.png'
import introImg2 from '../assets/intro-2.png';

const ChapterOne = () => {
  return (
    <div className="chapter-one">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="content-container">
              <h2>“3, 2, 1 … POLO !!</h2>
              <Spacer size="medium" />
              <p>
                Au pied du Parlement européen, dans le quartier du Wacken, une petite troupe rompt le silence de ce dimanche matin. À califourchon sur leurs vélos, six cyclistes s’élancent pour récupérer la balle qui trône au centre du terrain. Dans un joyeux bordel, avec force de cris et d’invectives, les joueurs tentent de pousser la balle jusque dans la cage adverse, située à l’autre bout du terrain. 
              </p>
              <Spacer size="medium" />
              <p>
                Aux bords, de la bière, du café et des croissants passent de mains en mains. Ça vanne, ça rigole, ça picole… L’ambiance est bonne enfant, caractéristique d’un match de hardcourt bike polo. Pourtant, certains de ces joueurs sont parmi les meilleurs du monde, mais peu importe, ils sont là pour le plaisir. Car si la discipline encore récente tend à s’institutionnaliser, elle crie toujours autant son désir de liberté. ”
              </p>
            </div>
          </div>
        </div>
      </div>
      <Spacer size="small" />
      <div className="cover-section" style={{height: '1200px', backgroundImage: `url(${introImg1})`}}>
        <div className="content-container">
          <Parallax className="custom-class" y={["200px", "-200px"]} tagOuter="figure">
            <blockquote className="cover-section__quote">
              « Cette discipline est très récente et descend directement du bike polo sur gazon. »
            </blockquote>
          </Parallax>
        </div>
      </div>
      <Spacer size="small" />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="content-container">
              <p>
                « Le hardcourt bike polo c’est une variante du polo à cheval, qui se pratique avec des vélos et des maillets diriger une petite balle dans les buts adverses. Cette discipline est très récente et descend directement du bike polo sur gazon. »
              </p>
            </div>
          </div>
        </div>
      </div>
      <Spacer size="medium" />
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 d-flex align-items-center">
            <p>
              « Le hardcourt bike polo c’est une variante du polo à cheval, qui se pratique avec des vélos et des maillets diriger une petite balle dans les buts adverses. Cette discipline est très récente et descend directement du bike polo sur gazon. »
            </p>
          </div>
          <div className="col-12 col-md-6">
            <Parallax className="custom-class" y={["200px", "-100px"]} tagOuter="figure">
              <img src={introImg2} alt="Intro" className="img-fluid" />
            </Parallax>
          </div>
        </div>
      </div>
      <Spacer size="medium" />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <FloatingImages />
          </div>
        </div>
      </div>
      <Spacer size="medium" />
      {/* <HitAnimation /> */}
      <Spacer size="large" />
      <QuoteStack />
      <Spacer size="large" />
      <Carousel />
      <Spacer size="large" />
      <SkewSection>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente dolor commodi molestiae ab ipsam vero! Maiores a perspiciatis, sit voluptatibus nihil, quasi esse eaque cumque possimus, reprehenderit sed eveniet optio?</p>
            </div>
          </div>
        </div>
      </SkewSection>
      <Spacer size="large" />
    </div>
  )
};

export default ChapterOne;