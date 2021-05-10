import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import LazyLoad from 'react-lazyload';
import ChapterTitle from '../components/ChapterTitle';
import Spacer from '../components/Spacer';
import QuoteStack from '../components/QuoteStack';
import ChapterTwoTitleBg1 from '../assets/chapter-2-title-bg-1.png';
import ChapterTwoTitleBg2 from '../assets/chapter-2-title-bg-2.png';
import introImg2 from '../assets/intro-2.png';

const ChapterTwo = () => {
  return (
    <div className="chapter-two">
      <ChapterTitle
        title="Définir le cadre"
        mainBackground={ChapterTwoTitleBg1}
        secondaryBackground={ChapterTwoTitleBg2}
      />
      <Spacer size="medium"/>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>Comité pour la liberté</h2>
            <Spacer size="medium"/>
          </div>
          <div className="col-12 col-md-6">
            <p>
              En 2012, un comité Bike Polo France voit le jour, inspiré d’organisations similaires fondées aux États-Unis et au niveau européen. Sa mission principale : organiser et de faire l’intendance des championnats et compétitions nationales. Définition des matchs, arbitrage, déroulé des journées... tout y passe. Mais là n’est pas sa seule fonction. Il s’engage aussi pour le développement de ce sport et de son attractivité.
            </p>
            <Spacer size="medium"/>
            <p>
              Ce comité a mis du temps à s'installer dans le microcosme du bike polo. Sa légitimité aussi. Pour Quentin, joueur à Lyon Bike Polo et membre de cette instance, celui-ci a beaucoup évolué depuis sa création. “Au début, c’était le fait de deux, trois personnes qui prennent des décisions parfois assez radicales et mal comprises… Maintenant il y a plus de transparence. on essaie de ne pas être trop intrusif pour limiter cet effet de résistance.”
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
            <Spacer size="medium"/>
            <Parallax y={["200px", "-200px"]} tagOuter="figure">
              <LazyLoad once offset={500}>
                <img src={introImg2} alt="Chapitre 1" className="img-fluid"/>
              </LazyLoad>
            </Parallax>
          </div>
          <div className="col-12 col-md-6">
            <p>
              Selon Jean-François Jolfre, joueur du club parisien de Bike Polo qui fut également un des membres de ce comité pendant 3 ans, ce comité n’a pas un rôle énorme aujourd’hui. Il s’occupe principalement de faire respecter les règles et de les harmoniser pour tous lorsque celles-ci changent au niveau européen ou mondial. Il fait surtout office de conseil aux clubs ayant besoin d’assistance dans leur organisation et leur direction. Mais pour lui, “il n’a aucun rôle d'exécutif". Une flexibilité totale est donc laissée aux adhérents, élément majeur et fondateur du Bike Polo. La majorité des membres tiennent beaucoup à cette indépendance et cette liberté, à l’écart des institutions sportives.
            </p>    
          </div>
        </div>
      </div>
      <Spacer size="large"/>
      <QuoteStack/>
      <Spacer size="large"/>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>Accueil des nouveaux</h2>
            <Spacer size="medium"/>
          </div>
          <div className="col-12 col-md-6">
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
      <Spacer size="large"/>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
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
    </div>
  );
}

export default ChapterTwo;