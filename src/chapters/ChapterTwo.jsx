import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import LazyLoad from 'react-lazyload';
import ChapterTitle from '../components/ChapterTitle';
import Spacer from '../components/Spacer';
import Iframe from '../components/Iframe';
import QuoteStack from '../components/QuoteStack';
import ChapterTwoTitleBg2 from '../assets/chapter-2-title-bg-2.png';
import ChapterTwoImg1 from '../assets/chapter-2-img-1.png';
import ChapterTwoImg2 from '../assets/chapter-2-img-2.png';
import ChapterTwoImg3 from '../assets/chapter-2-img-3.png';
import ChapterTwoImg4 from '../assets/chapter-2-img-4.png';
import ChapterTwoImg5 from '../assets/chapter-2-img-5.png';
import ChapterTwoImg6 from '../assets/chapter-2-img-6.png';
import ChapterTwoImg7 from '../assets/chapter-2-img-7.png';
import ChapterTwoImg10 from '../assets/chapter-2-img-10.jpeg';
import ChapterTwoImg11 from '../assets/chapter-2-img-11.png';
import ChapterTwoImg12 from '../assets/chapter-2-img-12.png';
import ChapterTwoImg13 from '../assets/chapter-2-img-13.png';
import ChapterTwoImg14 from '../assets/chapter-2-img-14.png';
import ChapterTwoBg2 from '../assets/chapter-2-bg-2.png';
import ChapterTwoBg3 from '../assets/chapter-2-bg-3.png';
import ChapterTwoBg4 from '../assets/chapter-2-bg-4.png';
import ChapterTwoBg5 from '../assets/chapter-2-bg-5.png';
import ChapterTwoBg7 from '../assets/chapter-2-bg-7.png';
import ChapterTwoBg9 from '../assets/chapter-2-bg-9.png';
import ChapterTwoBg10 from '../assets/chapter-2-bg-10.png';
import introCircle1 from '../assets/intro-circle-1.png';
import ChapterThreeCirlce1 from '../assets/chapter-3-circle-1.png';

const ChapterTwo = () => {
  return (
    <div className="chapter-two">
      <ChapterTitle
        title="Définir le cadre"
        secondaryBackground={ChapterTwoTitleBg2}
      />
      <Spacer size="medium"/>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 pr-lg-5">
            <h3>
              Strasbourg, 
              <br/>
              Février 2021. 
            </h3>
            <p>
              Chronomètre à la main, Nicolas, dit P.Q., donne le coup d’envoi. Contrairement aux autres sports cadrés avec “licences, cotisations et entraînements”, ce joueur itinérant explique que les clubs de bike polo l’ont accueilli sans contraintes ni réticences. Quand il visitait une ville, P.Q. jouait avec l’association locale et dormait chez l’un de ses membres. Depuis, il a élu domicile dans la capitale européenne et s’est inscrit comme membre à part entière de l’association strasbourgeoise. 
            </p>
            <Spacer size="medium"/>
            <p>
              “C’est vraiment une communauté. On est une famille”, affirme avec enthousiasme Élodie Martini, présidente de Strasbourg Bike Polo. Ayant voyagé pour de nombreuses compétitions, elle se souvient des soirées folles pendant les tournois, ainsi que des rencontres à l’autre bout du monde, grâce à un simple message sur les réseaux sociaux. 
            </p>
          </div>
          <div className="col-12 col-md-6 pl-lg-5">
            <Parallax y={["400px", "-100px"]} tagOuter="figure">
              <LazyLoad once offset={500}>
                <img src={ChapterTwoImg1} alt="Chapitre 2" className="img-fluid" />
              </LazyLoad>
            </Parallax>
            <Parallax y={["200px", "-200px"]} tagOuter="figure">
              <LazyLoad once offset={500}>
                <img src={ChapterTwoImg2} alt="Chapitre 2" className="img-fluid" />
              </LazyLoad>
              <figcaption>Avant, Nicolas (dit PQ) vagabondait de ville en ville et jouait au BikePolo. Il a trouvé l’Alsace et la capitale européenne comme terre d’accueil.</figcaption>
            </Parallax>
          </div>
        </div>
      </div>
      <Spacer size="medium"/>
      <div className="page-decoration page-decoration--is-full">
        <LazyLoad once offset={500}>
          <img src={ChapterTwoBg2} alt="chapter two background" className="w-100"/>
        </LazyLoad>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 pr-lg-5">
            <Parallax y={["200px", "-200px"]} tagOuter="figure">
              <LazyLoad once offset={500}>
                <img src={ChapterTwoImg3} alt="Chapitre 2" className="img-fluid" />
              </LazyLoad>
              <figcaption>La joyeuse troupe de Strasbourg Bike Polo prend la pose pour une photo de groupe. Convivialité déjantée et inclusion sont les maîtres-mots de la discipline selon eux.</figcaption>
            </Parallax>
            <Parallax y={["200px", "-200px"]} tagOuter="figure">
              <div className="decorated-content" style={{height: "460px"}}>
                <LazyLoad once offset={500}>
                  <img src={ChapterTwoBg3} alt="Chapitre 2" className="img-fluid" />
                </LazyLoad>
                <div className="decorated-content__content">
                  <p>
                    <strong>International :</strong> Les équipes pro sont souvent composées de joueurs et de joueuses de différentes nationalités. Élodie Martini, par exemple, s’associe souvent avec une joueuse allemande et une Américaine. De son côté, Morgan Hidalgo a remporté plusieurs titres de champion du monde avec un Anglais et un Hongrois. Le parisien Paul Vergnaud joue aussi avec un Anglais, Luca, venu en France pour les entraînements de leur équipe CallMeDaddy.
                  </p>
                </div>
              </div>
            </Parallax>
          </div>
          <div className="col-12 col-md-6 pl-lg-5">
            <h3>
              L’accueil des nouveaux
            </h3>
            <p>
              Du côté de Lyon Bike Polo, les entraînements sont une succession de matchs, pour le plus grand plaisir des joueurs expérimentés. “Le problème, c'est que ça ne nous permet pas d’inclure de nouveaux venus”, regrette Quentin Bouchard, membre lyonnais. Un aspect dont les clubs ont bien conscience : “ On essaie d’éviter que les forts soient toujours avec les forts et les faibles avec les faibles.” explique Paul Vergnaud. Avant le match, les clubs font souvent un “shuffle” : les maillets des joueurs sont lancés au hasard sur le terrain pour former les équipes, ce qui permet parfois de mélanger les niveaux. À Strasbourg, Elodie Martini a choisi d’organiser des exercices pratiques en début de session pour intégrer convenablement les débutants.
            </p>
            <Spacer size="medium"/>
            <Iframe src="https://www.youtube.com/embed/29t1qVLSG04" title="Vidéo chapitre 2" containerClass="mt-5"/>
            <Spacer size="medium"/>
            <figure className="team-logos">
              <div className="d-flex flex-row align-items-center justify-content-center">
                <LazyLoad once offset={500} className="mx-3">
                  <img src={ChapterTwoImg4} alt="Chapitre 2" className="img-fluid" />
                </LazyLoad>
                <LazyLoad once offset={500} className="mx-3">
                  <img src={ChapterTwoImg5} alt="Chapitre 2" className="img-fluid" />
                </LazyLoad>
                <LazyLoad once offset={500} className="mx-3">
                  <img src={ChapterTwoImg6} alt="Chapitre 2" className="img-fluid" />
                </LazyLoad>
                <LazyLoad once offset={500} className="mx-3">
                  <img src={ChapterTwoImg7} alt="Chapitre 2" className="img-fluid" />
                </LazyLoad>
              </div>
              <figcaption>De gauche à droite (Lyon, Marseille, Paris, Strasbourg), les logos faits par les joueurs des clubs.</figcaption>
            </figure>
          </div>
        </div>
      </div>
      <Spacer size="large"/>
      <div className="position-relative chapter-two-transition">
        <div className="page-decoration page-decoration--is-full">
          <LazyLoad once offset={500}>
            <img src={ChapterTwoBg10} alt="chapter two background" className="w-100"/>
          </LazyLoad>
        </div>
      </div>
      <Spacer size="medium"/>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 pr-lg-5">
            <Parallax y={["200px", "-200px"]} tagOuter="figure">
              <div className="decorated-content" style={{height: "854px"}}>
                <LazyLoad once offset={500}>
                  <img src={ChapterTwoBg4} alt="Chapitre 2" className="img-fluid" />
                </LazyLoad>
                <div className="decorated-content__content">
                  <p className="mt-5 mb-5">
                    Pour tenter de structurer ce sport en France, un comité Bike Polo France voit le jour en 2011.  S’il a mis du temps à s'installer et à être légitimé dans le microcosme du hardcourt, ce comité prône aujourd’hui plus de transparence. “Au début, deux ou trois personnes prenaient des décisions parfois assez radicales et mal comprises”, estime Quentin Bouchard, membre actuel du comité. “Désormais, on essaie de ne pas être trop intrusif pour limiter cet effet de résistance.”
                  </p>
                  <p className="mt-5">
                    Un constat conforté par Jean-François Jolfre, ancien membre parisien du comité Bike Polo France : “[Le comité] a plus un rôle de consultant que d'exécutif. Il est surtout là pour faire respecter les règles [...] et pour aider à organiser les tournois." 
                  </p>
                </div>
              </div>
            </Parallax>
            <Spacer size="medium"/>
            <p>Les règles de jeu sont récapitulées dans un “rules set” (livret de règles) édité par les comités européens et français. Pourtant, les joueurs n’en tiennent pas toujours rigueur durant les matchs, même ceux de tournois. Souvent, le club qui accueille a le dernier mot sur les règles appliquées. Chaque compétition peut donc avoir ses subtilités : match plus long, avec un remplaçant, arbitrage plus souple, etc.</p>            
          </div>
          <div className="col-12 col-md-6 pl-lg-5">
            <Parallax y={["200px", "-200px"]} tagOuter="figure">
              <LazyLoad once offset={500}>
                <img src={ChapterTwoImg10} alt="Chapitre 2" className="img-fluid" />
              </LazyLoad>
              <figcaption>Le logo du comité Bike Polo France, fondé en 2011.</figcaption>
            </Parallax>
            <div className="position-relative">
              <Parallax className="position-absolute parallax-item--first" y={["100px", "-100px"]} tagOuter="figure">
                <LazyLoad once offset={500}>
                  <img src={ChapterThreeCirlce1} alt="" className="img-fluid" />
                </LazyLoad>
              </Parallax>
              <Parallax y={["200px", "-200px"]} tagOuter="figure">
                <LazyLoad once offset={500}>
                  <img src={ChapterTwoImg11} alt="Chapitre 2" className="img-fluid" />
                </LazyLoad>
                <figcaption>Jean-François Jolfre est membre du bureau de Paris Bike Polo. C’est un ancien membre du comité Bike Polo France. Ici, il joue sur un terrain à la frontière entre Pantin et Paris.</figcaption>
              </Parallax>
            </div>
          </div>
        </div>
      </div>
      <Spacer size="medium"/>
      <div className="cover-section cover-section--chapter-2-third">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Parallax y={["200px", "-200px"]} tagOuter="figure">
                <LazyLoad once offset={500}>
                  <img src={ChapterTwoBg9} alt="Chapitre 2" className="img-fluid" />
                </LazyLoad>
              </Parallax>
            </div>
          </div>
        </div>
      </div>
      <div className="page-decoration page-decoration--is-full">
        <LazyLoad once offset={500}>
          <img src={ChapterTwoBg7} alt="chapter two background" className="w-100"/>
        </LazyLoad>
      </div>
      <Spacer size="large"/>
      <QuoteStack/>
      <Spacer size="large"/>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 pr-lg-5 position-relative">
            <Parallax className="position-absolute parallax-item--second" y={["100px", "-100px"]} tagOuter="figure">
              <LazyLoad once offset={500}>
                <img src={introCircle1} alt="" className="img-fluid" />
              </LazyLoad>
            </Parallax>
            <Parallax y={["200px", "-200px"]} tagOuter="figure">
              <LazyLoad once offset={500}>
                <img src={ChapterTwoImg12} alt="Chapitre 2" className="img-fluid" />
              </LazyLoad>
              <figcaption>La règle du crease empêche un joueur non gardien de rester trop longtemps devant les buts. Elle a été à l’origine de vives réactions.</figcaption>
            </Parallax>
          </div>
          <div className="page-decoration page-decoration--is-full">
            <LazyLoad once offset={500}>
              <img src={ChapterTwoBg5} alt="chapter two background" className="w-100"/>
            </LazyLoad>
          </div>
          <div className="col-12 col-md-6 pl-lg-5">
            <h3>La règle de trop</h3>
            <p>
              En 2015, l’équipe parisienne de Call Me Daddy est à son apogée. L’une de ses techniques fétiches : bloquer l’accès à la cage en se positionnant juste devant. Agacés d’avoir été battus à plusieurs reprises, les Américains proposent une nouvelle règle : la crease. A l’exception du gardien, il sera dorénavant interdit de rester dans la zone de but plus de cinq secondes. “Cette règle a provoqué une vraie crise dans le milieu”, se souvient Quentin Bouchard.
            </p>
          </div>
          <div className="col-12 col-md-6 pr-lg-5">
            <p>
              Au point que certains joueurs se lassent de cette prolifération de règles. « C’est devenu un sport avec autant de règles que le football américain, regrette Boran, ancien joueur Lyonnais. C’est devenu fatiguant ». Le trentenaire préfère arrêter en même temps que ses amis à l’origine du club lyonnais. « C’était surtout l’ambiance que j’aimais, avec cette bande de potes ... Les tournois de polo, ça m’a toujours ennuyé. » D’autres, au contraire, s’enthousiasment de la prolifération de clubs et de compétitions insufflant l’envie de structurer la pratique.
            </p>
          </div>
          <div className="col-12 col-md-6 pl-lg-5">
            <Parallax y={["200px", "-200px"]} tagOuter="figure">
              <LazyLoad once offset={500}>
                <img src={ChapterTwoImg13} alt="Chapitre 2" className="img-fluid" />
              </LazyLoad>
              <figcaption>Sur le frigo de Paul Vergnaud, on trouve toute l’histoire ou presque du HardcourtBikePolo. La création graphique (stickers, affiches...) par les joueurs fait intimement partie de l’univers du sport, où son matériel est personnalisable avec une grande liberté.</figcaption>
            </Parallax>
          </div>
        </div>
      </div>
      <Spacer size="medium"/>
      <div className="cover-section cover-section--chapter-2-second">
        <div className="container">
          <div className="content-container">
            <div className="row">
              <div className="col-12">
                <Parallax y={["200px", "-200px"]} tagOuter="figure">
                  <LazyLoad once offset={500}>
                    <img src={ChapterTwoImg14} alt="Chapitre 2" className="img-fluid" />
                  </LazyLoad>
                </Parallax>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChapterTwo;