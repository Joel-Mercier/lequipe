import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import ChapterTitle from '../components/ChapterTitle';
import FloatingImages from '../components/FloatingImages';
import HitAnimation from '../components/HitAnimation';
import QuoteStack from '../components/QuoteStack';
import Carousel from '../components/Carousel';
import SkewSection from '../components/SkewSection';
import Spacer from '../components/Spacer';
import ChapterOneTitleBg1 from '../assets/chapter-1-title-bg-1.png';
import ChapterOneTitleBg2 from '../assets/chapter-1-title-bg-2.png';
import introImg2 from '../assets/intro-2.png';

const ChapterOne = () => {
  return (
    <div className="chapter-one">
      <ChapterTitle
        title="Underground"
        mainBackground={ChapterOneTitleBg1}
        secondaryBackground={ChapterOneTitleBg2}
      />
      <Spacer size="medium"/>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 pr-lg-5">

          </div>
          <div className="col-12 col-md-6 pl-lg-5">
            <p>
              2008. Des Lyonnais, membres d’un atelier de réparation de vélos se retrouvent le soir, au sein de l’ancienne usine Renault du troisième arrondissement de la ville. L’endroit est réhabilité en un centre artistique. Sur leurs engins à deux roues, équipés de maillets artisanaux, ils imitent des gestes vus sur Internet. 
            </p>
            <Spacer size="medium" />
            <p>
              Au même moment, à Toulouse ou à Paris, des scènes similaires apparaissent place de l’Europe ou esplanade du palais de Tokyo. Les néophytes français du Bike Polo investissent des lieux publics pour tester le sport. 
            </p>
          </div>
          <div className="col-12 col-md-6">
            <Spacer size="medium" />
            <p>
              2008 rime aussi avec la fin de l’âge d’or du fixie, cette mentalité qui prône un retour aux origines du vélo. La bicyclette est dépouillée, elle n’a plus de roue libre à l’arrière, et généralement ni freins, ni vitesses. Puristes des deux roues, les premiers joueurs de bike polo ne jurent que par ça. 
            </p>
            <Spacer size="medium" />
            <p>
              <q>“J’étais un très grand défenseur du pignon fixe. J’ai dit que jamais je ne passerais en roue libre”</q>, se souvient Morgan, membre de l’association Lyon Bike polo et triple champion du monde de la discipline.
            </p>
            <Spacer size="medium" />
            <p>
              À la manière du fixie, le hardcourt bike polo attire les fans purs et durs de vélo. <q>“J’ai toujours été passionné de vélo”</q>, admet Paul. Après avoir découvert la pratique sur Internet, il est devenu l’un des pionniers de ce sport alors quasi-inexistant en Europe. <q>“Le fait de me dire que je faisais un sport qui n’existait pas, pratiqué par 50 personnes, m’a séduit.”</q>
              <br/>
              Si avec le temps, le pignon fixe a disparu des tournois de bike polo, certains pionniers, eux, demeurent. Parmi eux : Morgan, Paul et Élodie.
            </p>
          </div>
          <div className="col-12 col-md-6">
            <Parallax y={["200px", "-200px"]} tagOuter="figure">
              <blockquote>
                “On prenait des bâtons de ski sur lesquels on mettait des caps de tuyaux”
              </blockquote>
            </Parallax>
            <Parallax y={["200px", "-100px"]} tagOuter="figure">
              <img src={introImg2} alt="Chapitre 1" className="img-fluid" />
            </Parallax>
          </div>
        </div>
      </div>
      <Spacer size="medium" />
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <Parallax y={["200px", "-200px"]} tagOuter="figure">
              <blockquote>« Au début, c’était Frankenstein »</blockquote>
            </Parallax>
          </div>
          <div className="col-12 col-md-6">
            <p>
              Les cyclistes jouent au départ avec leurs vélos de ville. Guidons de course, cocottes, gardes-boues… rien de très pratique pour les mouvements saccadés et brusques du bike polo.
            </p>
            <Spacer size="medium" />
            <p>
              À force de bricolage, ils s’inventent de nouvelles montures plus adaptées :
              <br/>
              <q>“Au début, c'était Frankenstein. On a fait des tests et c’est comme ça qu’on a développé des bons vélos de bike polo”</q>, se souvient Elodie.
            </p>
          </div>
        </div>
      </div>
      <Spacer size="medium" />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>Focus Morgan ?</h2>
          </div>
          <div className="col-12 col-md-6">
            <p>
              Hauteurs de pédales plus courtes, protections de disque et roue libre, Morgan nous fait faire le tour de sa bête de concours.
            </p>
          </div>
          <div className="col-12 col-md-6">

          </div>
        </div>
      </div>
      <Spacer size="large" />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <FloatingImages />
          </div>
        </div>
      </div>
      <Spacer size="medium" />
      <HitAnimation />
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
    </div>
  );
};

export default ChapterOne;