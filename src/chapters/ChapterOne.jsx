import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import LazyLoad from 'react-lazyload';
import ChapterTitle from '../components/ChapterTitle';
import Spacer from '../components/Spacer';
import PlayerFocus from '../components/PlayerFocus';
import Interview from '../components/Interview';
import ChapterOneTitleBg1 from '../assets/chapter-1-title-bg-1.png';
import ChapterOneTitleBg2 from '../assets/chapter-1-title-bg-2.png';
import introImg2 from '../assets/intro-2.png';
import chapterOneBg2 from '../assets/chapter-1-bg-2.png';

const ChapterOne = () => {
  return (
    <div className="chapter-one">
      <ChapterTitle
        title="Défricher la route"
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
        </div>
      </div>
      <Spacer size="medium" />
      <PlayerFocus/>
      <Spacer size="medium" />
      <div className="container">
        <div className="row">
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
                « On prenait des bâtons de ski sur lesquels on mettait des caps de tuyaux »
              </blockquote>
            </Parallax>
            <Parallax y={["200px", "-200px"]} tagOuter="figure">
              <LazyLoad once offset={500}>
                <img src={introImg2} alt="Chapitre 1" className="img-fluid" />
              </LazyLoad>
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
            <h2>Le vélo de Morgan,<br/>champion du monde en titre</h2>
          </div>
        </div>
      </div>
      <Spacer size="medium" />
      <Interview />
      <Spacer size="medium" />
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <p>
              Hauteurs de pédales plus courtes, protections de disque et roue libre, Morgan nous fait faire le tour de sa bête de concours.
            </p>
          </div>
          <div className="col-12 col-md-6">

          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">

          </div>
          <div className="col-12 col-md-6">
            <p>
              Sans matériel, les premiers joueurs se sont découverts des talents de bricoleurs. Les maillets sont fabriqués à partir de bâtons de ski “achetés chez Emmaüs” et les têtes sont découpées dans des tubes de canalisations, raconte Paul. Certains joueurs s’introduisent sur les chantiers la nuit pour récupérer la matière première. La réutilisation est partout, jusqu’aux filets des cages, parfois fixés avec des vieilles chambres à air. 
            </p>
          </div>
          <div className="col-12 col-md-6">
            <Spacer size="medium" />
            <p>
              Créé début 2020, l’association de Marseille en est encore à ce stade balbutiant.  Elle n’a pas encore les moyens de se procurer du matériel : « Tout ce qu'on possède, on le fait nous-même avec les moyens du bord. » explique Gabriel, cofondateur du club phocéen. Ils squattent un terrain de roller. Jour de pluie la veille, l’équipe racle l’eau sur le terrain avant de poser deux pierres et deux gourdes pour faire les buts. “On nous a enlevé les planches de plexiglass qu’on utilisait.”
            </p>
            <Spacer size="medium" />
            <p>
              Au niveau des vélos, la débrouille est également de mise. Enrico, joueur de l'équipe de Marseille, se charge de la réparation des engins de l’équipe : “Si une pièce se casse, on ne va pas de suite voir dans un magasin, on cherche à le réparer nous-même”. Originaire d'Italie, il a monté avec un ami son atelier d’auto-réparation de vélo, partenaire de Marseille Bike Polo. 
            </p>
          </div>
          <div className="col-12 col-md-6">
            <Spacer size="medium"/>
            <Parallax y={["200px", "-200px"]} tagOuter="figure">
              <blockquote className="text-center">« Deux pierres et deux gourdes pour un but »</blockquote>
            </Parallax>
            <Spacer size="medium"/>
            <Parallax x={["-100px", "100px"]} y={["200px", "-200px"]} tagOuter="figure">
              <LazyLoad once offset={500}>
                <img src={introImg2} alt="Chapitre 1" className="img-fluid" />
              </LazyLoad>
            </Parallax>
          </div>
        </div>
      </div>
      <Spacer size="large"/>
      <div className="cover-section" style={{height: '1060px', backgroundImage: `url(${chapterOneBg2})`}}>
        <div className="container">
          <Parallax opacity={["200px", "-200px"]} tagOuter="figure">
            <h2>La guerre des terrains</h2>
          </Parallax>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <p>
              Chacun fait avec ses moyens, loin de ceux d’un club comme Lyon qui peut avoir du vrai bon matériel grâce au sponsoring. A tel point que la plupart des joueurs sont aujourd’hui autodidacte et gèrent leur matériel eux-même. C’est aussi le cas d’Elodie à Strasbourg, qui a beaucoup évolué dans sa pratique, tant dans son jeu que dans son matériel.
            </p>
            <Spacer size="medium"/>
            <p>
              Isdem diebus Apollinaris Domitiani gener, paulo ante agens palatii Caesaris curam, ad Mesopotamiam missus a socero per militares numeros immodice scrutabatur, an quaedam altiora meditantis iam Galli secreta susceperint scripta, qui conpertis Antiochiae gestis per minorem Armeniam lapsus Constantinopolim petit exindeque per protectores retractus artissime tenebatur.
            </p>
          </div>
          <div className="col-12 col-md-6">
            <Spacer size="medium"/>
            <Parallax y={["200px", "-200px"]} tagOuter="figure">
              <LazyLoad once offset={500}>
                <img src={introImg2} alt="Chapitre 1" className="img-fluid" />
              </LazyLoad>
            </Parallax>
          </div>
        </div>
      </div>
      <Spacer size="medium"/>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <Parallax y={["200px", "-200px"]} tagOuter="figure">
              <blockquote className="text-center">« Citation Elodie tirée de la vidéo »</blockquote>
            </Parallax>
          </div>
        </div>
      </div>
      <Spacer size="medium"/>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">

          </div>
          <div className="col-12 col-md-6">
            <p>
              Isdem diebus Apollinaris Domitiani gener, paulo ante agens palatii Caesaris curam, ad Mesopotamiam missus a socero per militares numeros immodice scrutabatur, an quaedam altiora meditantis iam Galli secreta susceperint scripta, qui conpertis Antiochiae gestis per minorem Armeniam lapsus Constantinopolim petit exindeque per protectores retractus artissime tenebatur.
            </p>
          </div>
        </div>
      </div>
      <Spacer size="medium"/>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <p>
              Isdem diebus Apollinaris Domitiani gener, paulo ante agens palatii Caesaris curam, ad Mesopotamiam missus a socero per militares numeros immodice scrutabatur, an quaedam altiora meditantis iam Galli secreta susceperint scripta, qui conpertis Antiochiae gestis per minorem Armeniam lapsus Constantinopolim petit exindeque per protectores retractus artissime tenebatur.
            </p>
          </div>
          <div className="col-12 col-md-6">
            <Parallax y={["200px", "-200px"]} tagOuter="figure">
              <LazyLoad once offset={500}>
                <img src={introImg2} alt="Chapitre 1" className="img-fluid" />
              </LazyLoad>
            </Parallax>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChapterOne;