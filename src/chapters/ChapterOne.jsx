import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import LazyLoad from 'react-lazyload';
import ChapterTitle from '../components/ChapterTitle';
import Spacer from '../components/Spacer';
import PlayerFocus from '../components/PlayerFocus';
import Interview from '../components/Interview';
import Iframe from '../components/Iframe';
import ChapterOneTitleBg1 from '../assets/chapter-1-title-bg-1.png';
import ChapterOneTitleBg2 from '../assets/chapter-1-title-bg-2.png';
import introImg2 from '../assets/intro-2.png';
import chapterOneBg2 from '../assets/chapter-1-bg-2.png';
import chapterOneBg3 from '../assets/chapter-1-bg-3.png';

const ChapterOne = () => {
  return (
    <div className="chapter-one">
      <ChapterTitle
        title="Défricher la route"
        mainBackground={ChapterOneTitleBg1}
        secondaryBackground={ChapterOneTitleBg2}
      />
      <Spacer size="large"/>
      <Parallax className="page-decoration page-decoration--is-right" y={["300px", "-300px"]} tagOuter="figure">
        <LazyLoad once offset={500}>
          <img src={chapterOneBg3} alt="chapter one background"/>
        </LazyLoad>
      </Parallax>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 pr-lg-5">
            <h3>Décembre 2008, Lyon.</h3>
            <p>
              Décembre 2008, Lyon. Voilà dix ans que l’immense usine Renault du troisième arrondissement de la ville a été cédée par l’industriel français. Depuis sa fermeture, le site s’est reconverti en un espace culturel alternatif, la Friche RVI, où s’installe un atelier de réparation de vélos. 
            </p>
            <Spacer size="medium" />
            <p>
              Le soir, après le travail, ses membres s’y retrouvent pour s’initier au Hardcourt Bike Polo. Sur leurs deux roues, équipés de maillets artisanaux, les jeunes lyonnais imitent des gestes vus sur Internet. Les vélos voltigent, dérapent et s’entrechoquent. À Toulouse comme à Paris, des scènes similaires prennent place et des néophytes investissent les lieux publics pour s’adonner à la pratique. Quelques années plus tard, une poignée d’entre eux deviendront des champions internationaux.
            </p>
          </div>
          <div className="col-12 col-md-6 pl-lg-5 justify-content-center">
            <Iframe src="https://www.dailymotion.com/embed/video/x6iuck6" title="Vidéo chapitre 1" containerClass="mt-5"/>
          </div>
        </div>
      </div>
      <Spacer size="medium" />
      <PlayerFocus/>
      <Spacer size="medium" />
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 order-last order-md-first">
            <Parallax y={["200px", "-200px"]} tagOuter="figure">
              <blockquote>
                « Au début, nos vélos, c’était un peu Frankenstein »
                <br/>
                - Elodie Martini
              </blockquote>
            </Parallax>
            <Parallax y={["200px", "-200px"]} tagOuter="figure">
              <LazyLoad once offset={500}>
                <img src={introImg2} alt="Chapitre 1" className="img-fluid" />
              </LazyLoad>
            </Parallax>
          </div>
          <div className="col-12 col-md-6 order-first order-md-last">
            <Spacer size="medium" />
            <h3>
              Du pignon fixe à la roue libre
            </h3>
            <p>
              Rapidement, les joueurs comprennent que leur vélo n’est pas adapté au bike-polo. Les guidons de course et les garde-boues gênent les mouvements saccadés et brusques du sport. À force de casse et de bricolage, les joueurs inventent de nouvelles montures plus adaptées. “Au début, c'était un peu Frankenstein. On a fait des tests et on a fini par développer de bons vélos”, se souvient Elodie Martini, strasbourgeoise vice-championne du monde.
            </p>
            <Spacer size="medium" />
            <p>
              Dès lors, les pionniers ne jurent que par le pignon fixe.  “J’étais un très grand défenseur du fixie”, se souvient Morgan Hidalgo, triple champion du monde et membre de l’association Lyon Bike Polo. 
            </p>
            <Spacer size="medium" />
            <p>
              Pour lui, le pignon fixe fait perdre de l’énergie et de la concentration sur la gestion du pédalage. Cela empêcherait de conserver son entière attention sur le terrain et la balle. “J’ai souvent dit que je ne passerais jamais en roue libre [...] Disons le, j’ai menti ! », s’amuse le coursier. 
            </p>
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
            <h2 className="mb-0">Le vélo de Morgan,<br/>champion du monde en titre</h2>
          </div>
        </div>
      </div>
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