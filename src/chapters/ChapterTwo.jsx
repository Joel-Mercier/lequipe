import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import LazyLoad from 'react-lazyload';
import ChapterTitle from '../components/ChapterTitle';
import Spacer from '../components/Spacer';
import QuoteStack from '../components/QuoteStack';
import ChapterTwoTitleBg1 from '../assets/chapter-2-title-bg-1.png';
import ChapterTwoTitleBg2 from '../assets/chapter-2-title-bg-2.png';

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
          <div className="col-12 col-md-6">
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
        </div>
      </div>
      <Spacer size="large"/>
      <QuoteStack/>
      <Spacer size="large"/>
    </div>
  );
}

export default ChapterTwo;