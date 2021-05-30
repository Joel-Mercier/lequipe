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
import chapterOneBg2 from '../assets/chapter-1-bg-2.png';
import chapterOneBg3 from '../assets/chapter-1-bg-3.png';
import chapterOneBg4 from '../assets/chapter-1-bg-4.png';
import chapterOneBg5 from '../assets/chapter-1-bg-5.png';
import chapterOneBg6 from '../assets/chapter-1-bg-6.png';
import chapterOneBg7 from '../assets/chapter-1-bg-7.png';
import chapterOneBg8 from '../assets/chapter-1-bg-8.png';
import chapterOneBg9 from '../assets/chapter-1-bg-9.png';
import chapterOneCircle1 from '../assets/intro-circle-1.png';
import chapterOneImg1 from '../assets/chapter-1-img-1.png';
import chapterOneImg2 from '../assets/chapter-1-img-2.png';
import chapterOneImg3 from '../assets/chapter-1-img-3.png';
import chapterOneImg4 from '../assets/chapter-1-img-4.png';
import chapterOneImg5 from '../assets/chapter-1-img-5.png';
import chapterOneImg6 from '../assets/chapter-1-img-6.png';

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
          <img src={chapterOneBg3} alt="chapter one background" className="img-fluid"/>
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
          <div className="col-12 col-md-6 justify-content-center">
            <Iframe src="https://www.youtube.com/embed/eIwAAzkR3zM" title="Vidéo chapitre 1" containerClass="mt-5"/>
          </div>
        </div>
      </div>
      <Spacer size="medium" />
      <PlayerFocus/>
      <Spacer size="large" />
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 pr-lg-5 order-last order-md-first">
            <Parallax y={["200px", "-200px"]} tagOuter="figure">
              <blockquote>
                « Au début, nos vélos, c’était un peu Frankenstein »
                <br/>
                <cite title="Elodie Martini">- Elodie Martini</cite>
              </blockquote>
            </Parallax>
            <Parallax y={["200px", "-200px"]} tagOuter="figure">
              <div className="decorated-content decorated-content--first" style={{height: "437px"}}>
                <LazyLoad once offset={500}>
                  <img src={chapterOneBg4} alt="Chapitre 1" />
                </LazyLoad>
                <div className="decorated-content__content">
                  <p>
                    <strong>Pignon Fixe vs Roue Libre :</strong> Un pignon fixe reste solidaire d’une roue en mouvement. Celle-ci s’arrête avec le pédalier. Sur un vélo dit à “roue libre”, comme sur un vélo de ville ou un VTT, un mécanisme désolidarise le pignon de la roue. Ceci permet au cycliste l’arrêt du pédalage, alors que la roue, elle, continue de tourner.
                  </p>
                </div>
              </div>
            </Parallax>
          </div>
          <div className="col-12 col-md-6 pl-lg-5 order-first order-md-last">
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
            <Spacer size="medium" />
            <Iframe src="https://www.youtube.com/embed/kI1Gb-E-sMQ" title="Vidéo chapitre 1" containerClass="mt-5" />
          </div>
        </div>
      </div>
      <Spacer size="medium" />
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 pr-lg-5">
            <Parallax className="position-absolute parallax-item--first" y={["100px", "-100px"]} tagOuter="figure">
              <LazyLoad once offset={500}>
                <img src={chapterOneCircle1} alt="" className="img-fluid" />
              </LazyLoad>
            </Parallax>
            <Parallax y={["200px", "-200px"]} tagOuter="figure">
              <LazyLoad once offset={500}>
                <img src={chapterOneImg1} alt="Chapitre 1" className="img-fluid" />
              </LazyLoad>
              <figcaption>Morgan Hidalgo est un des meilleurs joueurs du monde de Hardcourt BikePolo. Ce lyonnais recouvert de tatouages a gagné les derniers championnats du monde avec son équipe les Mongrels.</figcaption>
            </Parallax>
          </div>
          <div className="col-12 col-md-6 pl-lg-5">
            <Spacer size="large" />
            <Parallax y={["200px", "-200px"]} tagOuter="figure">
              <blockquote>
                « J’ai dit que je ne passerais jamais en roue libre... »
                <br/>
                <cite title="Morgan Hidalgo">- Morgan Hidalgo</cite>
              </blockquote>
            </Parallax>
          </div>
        </div>
      </div>
      <Spacer size="large" />
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
            <Parallax y={["200px", "-200px"]} tagOuter="figure">
              <blockquote className="text-center">
                « On fait tout nous-même. »
                <br/>
                <cite title="Gabriel, MarseilleBikePolo">- Gabriel, MarseilleBikePolo</cite>
              </blockquote>
            </Parallax>
          </div>
          <div className="col-12 col-md-6 pl-lg-5">
            <p>
              Outre les seuls vélos, les joueurs suivent également cette logique de bricolage pour le reste du matériel. Les premiers maillets sont fabriqués à partir de bâtons de ski d’occasion et des tubes de canalisations parfois récupérés sur des chantiers la nuit. Aujourd’hui encore, de nombreux joueurs fabriquent et personnalisent leur matériel de jeu.
            </p>
          </div>
        </div>
      </div>
      <Spacer size="medium"/>
      <div className="page-decoration page-decoration--is-right">
        <LazyLoad once offset={500}>
          <img src={chapterOneBg5} alt="chapter one background" className="img-fluid"/>
        </LazyLoad>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 pr-lg-5">
            <h3>Récup et autoréparation</h3>
            <p>
              « Tout ce qu'on fait, on le fait nous-même avec les moyens du bord » affirme Gabriel Bercolano, cofondateur de l’association Marseille Bike Polo, un club lancé au début de l’année 2020. Cette débrouille se retrouve jusqu’aux filets des cages, fixés avec de vieilles chambres à air. Introuvables lors de l’entraînement suivi en avril dernier, les poloïstes s’arrangent : pierres et gourdes font office de buts ce jour-là. Encore à un stade embryonnaire, une partie du matériel du club est issu du don d’un joueur lyonnais de passage.
            </p>
            <Spacer size="medium" />
            <p>
              Autre membre du club phocéen, Enrico est tantôt joueur, tantôt mécano. Il se charge parfois de la réparation des engins de ses partenaires. “Si une pièce se casse, on ne se rend pas de suite dans un magasin, explique le jeune marseillais, on cherche d’abord à réparer par nous-même”. Il a récemment lancé un atelier d’auto-réparation de vélo engagé Plan B, partenaire de Marseille Bike Polo.   
            </p>
            <Spacer size="medium" />
            <Iframe src="https://www.youtube.com/embed/ROwnGmtBvkQ" title="Vidéo chapitre 1" containerClass="mt-5"/>
          </div>
          <div className="col-12 col-md-6 pl-lg-5">
            <Parallax y={["200px", "-200px"]} tagOuter="figure">
              <LazyLoad once offset={500}>
                <img src={chapterOneImg2} alt="Chapitre 1" className="img-fluid" />
              </LazyLoad>
              <figcaption>A Marseille, les joueurs squattent un terrain de roller. Parfois la situation oblige quelques improvisations pour le matériel : ici des pierres et des gourdes pour situer les buts.</figcaption>
            </Parallax>
            <Parallax y={["200px", "-200px"]} tagOuter="figure">
              <LazyLoad once offset={500}>
                <img src={chapterOneImg3} alt="Chapitre 1" className="img-fluid" />
              </LazyLoad>
              <figcaption>Le logo de Marseille Bike Polo est fait par un membre graphiste. Gabriel le fondateur du club, l’a ensuite sérigraphié lui même sur des Tshirts pour son équipe.</figcaption>
            </Parallax>
            <Parallax y={["200px", "-200px"]} tagOuter="figure">
              <LazyLoad once offset={500}>
                <img src={chapterOneImg4} alt="Chapitre 1" className="img-fluid" />
              </LazyLoad>
              <figcaption>Gabriel (à droite) et Enrico (à gauche), deux membres fondateurs de Marseille Bike Polo se reposent en attendant le prochain match.</figcaption>
            </Parallax>
          </div>
        </div>
      </div>
      <Spacer size="large"/>
      <div className="cover-section" style={{height: '1060px', backgroundImage: `url(${chapterOneBg2})`}}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <Parallax y={["200px", "-200px"]} tagOuter="figure">
                <div className="decorated-content decorated-content--second" style={{height: "450px"}}>
                  <LazyLoad once offset={500}>
                    <img src={chapterOneBg6} alt="Chapitre 1" />
                  </LazyLoad>
                  <div className="decorated-content__content">
                    <p>
                      <strong>DIY :</strong> L’émergence de la scène punk dans les années 1970 amène un nouveau mode de production : le Do It Yourself (DIY), littéralement « fais-le par toi-même ». Construit autour de trois grands piliers (refus du consumérisme, refus d’un ordre établi et volonté d’émancipation personnelle et collective), le DIY se comprend comme un régime d’engagement soutenu par des pratiques culturelles, des modes organisationnels et des revendications sociales et politiques.
                    </p>
                  </div>
                </div>
              </Parallax>
            </div>
            <div className="col-12 col-md-6">
              <Parallax y={["200px", "-200px"]} tagOuter="figure">
                <div className="decorated-content decorated-content--third" style={{height: "661px"}}>
                  <LazyLoad once offset={500}>
                    <img src={chapterOneBg7} alt="Chapitre 1" />
                  </LazyLoad>
                  <div className="decorated-content__content">
                    <p>
                      <strong>Engagement :</strong> le Bike Polo peut également être une démarche politique. Au-delà de l’esprit de récup’ et d’auto-réparation, les luttes contre les discriminations sont aussi très importantes pour certains clubs. A Marseille, cette démarche est inscrite dans une charte publiée sur; leur page Facebook. Plusieurs membres du club participent régulièrement aux Vélorutions féministes de la ville et considèrent le vélo aussi comme un outil politique. Le sport est essentiellement mixte avec des compétitions féminines comme les tournois Lady's Army.
                    </p>
                  </div>
                </div>
              </Parallax>
            </div>
          </div>
        </div>
      </div>
      <Spacer size="large"/>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <Parallax y={["200px", "-200px"]} tagOuter="figure">
              <LazyLoad once offset={500}>
                <img src={chapterOneImg5} alt="Chapitre 1" className="img-fluid" />
              </LazyLoad>
              <figcaption>À Strasbourg, le terrain de basket est transformé en terrain de Bike Polo grâce au bricolage des membres du club. Des planches de bois achetées et retapées font office de délimitation.</figcaption>
            </Parallax>
          </div>
          <div className="col-12 col-md-6">
            <Parallax y={["200px", "-200px"]} tagOuter="figure">
              <blockquote>
                « On a fait des tournois à même les parkings ou une place goudronnée »
                <br/>
                <cite title="Quentin, LyonBikePolo">- Quentin, LyonBikePolo</cite>
              </blockquote>
            </Parallax>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <Parallax y={["200px", "-200px"]} tagOuter="figure">
              <LazyLoad once offset={500}>
                <img src={chapterOneImg6} alt="Chapitre 1" className="img-fluid" />
              </LazyLoad>
              <figcaption>Paul Vergnaud, double champion du monde, montre des trophés qu’il a remporté, fabriqués par des joueurs. A gauche, une affiche des championnats de France, également réalisée par un joueur.</figcaption>
            </Parallax>
          </div>
          <div className="col-12 col-md-6">
           <p>
            Les tournois sont, eux aussi, mis en place avec les moyens du bord. Lorsque des
            compétitions internationales sont prévues, les clubs participants s’arrangent
            entre eux pour l’organisation.
          </p>
          <Spacer size="medium"/>
          <p>
            Certains de ces rendez-vous compétitifs se font “à même les parkings ou sur une place vide goudronnée” détaille Quentin Bouchard, de Lyon Bike Polo. Des flyers aux trophées, beaucoup d’éléments du hardcourt bike polo sont le fruit de la créativité de ses joueurs et de ses joueuses.
           </p>
          </div>
        </div>
      </div>
      <Spacer size="large"/>
      <div className="cover-section" style={{height: '1098px', background: `url(${chapterOneBg8}), linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0) 30%, rgba(243,235,231,1) 100%)`}}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Parallax y={["200px", "-200px"]} tagOuter="figure">
                <LazyLoad once offset={500}>
                  <img src={chapterOneBg9} alt="Chapitre 1" className="img-fluid" />
                </LazyLoad>
              </Parallax>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChapterOne;