import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import LazyLoad from 'react-lazyload';
import ChapterTitle from '../components/ChapterTitle';
import Spacer from '../components/Spacer';
import Image from '../components/Image';
import Iframe from '../components/Iframe';
import FloatingImages from '../components/FloatingImages';
import Stats from '../components/Stats';
import ChapterThreeTitleBg2 from '../assets/chapter-3-title-bg-2.png';
import ChapterThreeImg1 from '../assets/chapter-3-img-1.png';
import ChapterThreeImg2 from '../assets/chapter-3-img-2.png';
import ChapterThreeImg3 from '../assets/chapter-3-img-3.png';
import ChapterThreeImg4 from '../assets/chapter-3-img-4.png';
import ChapterThreeImg5 from '../assets/chapter-3-img-5.png';
import ChapterThreeImg6 from '../assets/chapter-3-img-6.png';
import ChapterThreeImg7 from '../assets/chapter-3-img-7.png';
import ChapterThreeImg8 from '../assets/chapter-3-img-8.png';
import ChapterThreeImg9 from '../assets/chapter-3-img-9.png';
import ChapterThreeImg10 from '../assets/chapter-3-img-10.png';
import ChapterThreeImg11 from '../assets/chapter-3-img-11.png';
import ChapterThreeBg1 from '../assets/chapter-3-bg-1.png';
import ChapterThreeBg2 from '../assets/chapter-3-bg-2.png';
import ChapterThreeBg3 from '../assets/chapter-3-bg-3.png';
import ChapterThreeCircle1 from '../assets/chapter-3-circle-1.png';
import ChapterThreeCircle2 from '../assets/chapter-3-circle-2.png';

const ChapterThree = () => {
  return (
    <div className="chapter-three">
      <ChapterTitle
        title="Entre deux selles"
        secondaryBackground={ChapterThreeTitleBg2}
      />
      <div className="chapter-three-intro">
        <div className="position-relative">
          <div className="page-decoration page-decoration--is-left">
            <Image src={ChapterThreeBg3} alt="" className="img-fluid"/>
            <Image src={ChapterThreeImg9} alt="" className="img-fluid" y={["100px", "-100px"]} parallaxContainerClassName="position-absolute parallax-item--first"/>
          </div>
        </div>
        <div className="position-relative">
          <div className="page-decoration page-decoration--is-right">
            <Image src={ChapterThreeBg3} alt="" className="img-fluid"/>
            <Image src={ChapterThreeImg8} alt="" className="img-fluid" y={["100px", "-100px"]} parallaxContainerClassName="position-absolute parallax-item--first"/>
            <Image src={ChapterThreeImg11} alt="" className="img-fluid" y={["100px", "-100px"]} parallaxContainerClassName="position-absolute parallax-item--second"/>
          </div>
        </div>
      </div>
      <Spacer size="medium"/>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 pr-lg-5">
            <h3>
              Ecosystème BikePolo
            </h3>
            <p>
              Souvent, les joueurs n’attendent pas l’aval d’un comité pour développer leur passion. À l’image de l’esprit DIY, différents joueurs décident de créer leur propre société. Le but : concevoir une nouvelle offre de matériel ou améliorer certains produits. C’est le cas de RogerBikePolo, l’un des rares fabricants français de pièces spécifiques au sport. « L’inconvénient quand on joue avec du matériel de récupération, c’est qu’il s’use vite », affirme Laurent, créateur de la marque.
            </p>
            <Spacer size="medium"/>
            <p>
              Technicien d’usinage de métier, Laurent a notamment développé une tête de maillet plus légère et plus résistante. Il vend aussi des protèges-valves ou disques, contrecarrant les nombreux impacts du sport sur les vélos. Chaque année, ce Montpelliérain enregistre plusieurs commandes en France et à l'étranger, dont celles d'équipes entières. Avec MILK, une entreprise suisse de fabrication de maillets, ils sponsorisent de grands champions français, tels que Paul ou Morgan, ainsi que des compétitions.
            </p>
            <Spacer size="medium"/>
            <p>
              Pour Morgan Hidalgo, le sponsoring des joueurs par ces entreprises spécialisées est différent des autres sports : “Nous n’avons pas de contrats formels. Ce qu’ils nous demandent, c’est de la visibilité. Le Bike Polo est un sport trop petit pour bénéficier du sponsoring de marques plus connues. Pour elles, ce n’est pas un marché suffisamment intéressant. Mais on essaie quand même !” Preuve en est, certains joueurs ont collaboré ponctuellement avec des marques de luxe comme Louis Vuitton ou Louboutin ; loin des débuts sur les parkings et les friches. 
            </p>
          </div>
          <div className="col-12 col-md-6 d-flex flex-column justify-content-center position-relative">
            <Parallax className="position-absolute parallax-item--first" y={["100px", "-100px"]} tagOuter="figure">
              <LazyLoad once offset={500}>
                <img src={ChapterThreeCircle2} alt="" className="img-fluid" />
              </LazyLoad>
            </Parallax>
            <Parallax y={["400px", "-100px"]} tagOuter="figure">
              <LazyLoad once offset={500}>
                <img src={ChapterThreeImg1} alt="Chapitre 3" className="img-fluid" />
              </LazyLoad>
            </Parallax>
            <div className="row">
              <div className="col-12 col-sm-6">
                <Parallax y={["200px", "-200px"]} tagOuter="figure">
                  <figcaption className="pl-lg-5 mt-5">
                    Des nombreuses structures et entreprises se sont créées dans le sillage du Bike Polo. En haut, un atelier de réparation qui auvrir avec Paul Vergnaud et ses amis rencontrés via le sport. En bas, un balle de HardcourtBikePolo de la marque montellieraine RogerBikePolo.
                  </figcaption>
                </Parallax>
              </div>
              <div className="col-12 col-sm-6">
                <Parallax y={["200px", "-200px"]} tagOuter="figure">
                  <LazyLoad once offset={500}>
                    <img src={ChapterThreeImg2} alt="Chapitre 3" className="img-fluid" />
                  </LazyLoad>
                </Parallax>
              </div>
            </div>
            <Iframe src="https://www.youtube.com/embed/oidW0pSVM9w" title="Vidéo chapitre 3" containerClass="mt-5"/>
          </div>
        </div>
      </div>
      <Spacer size="medium"/>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 pr-lg-5">
            <Parallax y={["200px", "-200px"]} tagOuter="figure">
              <LazyLoad once offset={500}>
                <img src={ChapterThreeImg3} alt="Chapitre 3" className="img-fluid" />
              </LazyLoad>
              <figcaption>Lyon Bike Polo joue sur un ancien terrain de hockey. Ils ont la chance de ne pas avoir à partager leur terrain avec d’autres disciplines.</figcaption>
            </Parallax>
          </div>
          <div className="col-12 col-md-6 pl-lg-5">
            <h3>La guerre des terrains</h3>
            <p>
              A force de communication et de négociations, certaines équipes obtiennent des terrains auprès de leurs mairies respectives.  “Maintenant on joue à la Croix Rousse, sur un ancien terrain de street hockey qui a - presque - les bonnes dimensions pour jouer au polo “, explique Morgan, fier de ce qu’il décrit comme le “meilleur terrain de France”. 
            </p>
            <Spacer size="medium" />
            <p>
              Néanmoins la situation de Lyon n’est pas la norme : à Paris, Jean-François Jolfre raconte que leur terrain va être détruit pour laisser place aux Jeux olympiques 2024. Du côté de Strasbourg, le club partage le terrain avec les basketteurs, ce qui entraîne parfois quelques tensions.
            </p>
          </div>
        </div>
      </div>
      <Spacer size="small"/>
      <div className="position-relative">
        <div className="page-decoration page-decoration--is-left">
          <LazyLoad once offset={500}>
            <img src={ChapterThreeBg3} alt="chapter three background" className="w-100"/>
          </LazyLoad>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 pr-lg-5">
            <p className="mt-5 mr-5">
              <strong className="mt-md-5">
                En France, seuls quatre courts sont exclusivement dédiés à la pratique de cette
                discipline. Six courts intérieurs permettent également aux équipes qui le
                peuvent de s'entraîner l'hiver dans l’Hexagone. À l’inverse, dix associations
                doivent partager leur terrain avec un autre sport et quatre autres doivent
                toujours squatter leurs terrains sans autorisation.
              </strong>
            </p>
          </div>
          <div className="col-12 col-md-6 pl-lg-5">
            <Parallax y={["200px", "-200px"]} tagOuter="figure">
              <LazyLoad once offset={500}>
                <img src={ChapterThreeImg4} alt="Chapitre 3" className="img-fluid" />
              </LazyLoad>
              <figcaption>À Strasbourg, le club joue sur un terrain de basket auprès du Parlement Européen. Ils le délimitent eux-mêmes avec des planches de bois, rencontrant souvent quelques réticences auprès des joueurs de basketball.</figcaption>
            </Parallax>
          </div>
        </div>
      </div>
      
      <Spacer size="large"/>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3>Les terrains des clubs français</h3>
            <FloatingImages/>
          </div>
        </div>
      </div>
      <Spacer size="large"/>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 pr-lg-5">
            <Parallax y={["200px", "-200px"]} tagOuter="figure">
              <LazyLoad once offset={500}>
                <img src={ChapterThreeImg5} alt="Chapitre 3" className="img-fluid" />
              </LazyLoad>
              <figcaption>Les joueurs de Marseille sont obligés de passer au dessus des grilles pour pouvoir jouer sur un terrain convenable.</figcaption>
            </Parallax>
          </div>
          <div className="col-12 col-md-6 pl-lg-5">
            <div className="decorated-content" style={{height: "932px"}}>
              <LazyLoad once offset={500}>
                <img src={ChapterThreeBg2} alt="Chapitre 3" className="img-fluid" />
              </LazyLoad>
              <div className="decorated-content__content">
                <p>
                  Le Marseille Bike Polo est l’un de ces clubs sans terrain fixe. Faute d’un lieu approprié, les joueurs se retrouvaient un temps dans un parc municipal partagé avec les enfants du coin. En attendant une réponse de la mairie, ils ont tenté une approche à l’amiable avec un club de roller de la ville pour avoir accès à leur terrain de jeu. Sans succès. Gabriel, responsable du club, et ses coéquipiers y jouent malgré tout, sautant la grille pour s'y entraîner. “Le gros handicap, c’est de ne pas être légitime à venir occuper le terrain. A chaque fois, on risque de se faire virer, et on sera dans l'obligation de partir.”
                </p>
                <p className="mt-5">
                  Sans infrastructures adaptées, difficile de faire grandir le nombre d’adhérents. Si la discipline a connu une forte croissance durant ses premières années d’existence, elle rencontre aujourd’hui des difficultés de visibilité. Le nombre de joueurs inscrits en club stagne. En cinq ans, il n’a augmenté que de 40 personnes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Spacer size="medium"/>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3>Le profil des joueurs de Hardcourt Bike Polo en France</h3>
            <Stats/>
            <p className="h3 ml-sm-5" style={{marginTop: "-40px"}}>Coût moyen de cotisation : 27€</p>
          </div>
        </div>
      </div>
      <Spacer size="medium"/>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 pr-lg-5">
            <h3>L’ombre de la fédération</h3>
            <div className="decorated-content" style={{height: "932px"}}>
              <LazyLoad once offset={500}>
                <img src={ChapterThreeBg2} alt="Chapitre 3" className="img-fluid" />
              </LazyLoad>
              <div className="decorated-content__content">
                <p>
                  Pour y remédier, la possibilité d’institutionnaliser ce sport, en intégrant la prestigieuse Fédération Française de Cyclisme (FFC), a été soulevée. Durant ses études en management du sport, Paul Vergnaud, de l’équipe CallMeDaddy, a fait un stage de six mois à la FFC en 2010. Il prend alors ce débat à bras le corps en réalisant un audit auprès de toutes les associations de Bike Polo de France pour une potentielle affiliation à l’instance. “La Fédé’ était très intéressée de nous recruter. On était en plein développement et on véhiculait une image plutôt sympathique et décalée de la pratique du vélo.”
                </p>
                <p className="mt-5">
                  Pourtant, le verdict est sans appel.”Ce n'était pas la volonté des joueurs et des clubs de s’engager vers une telle intégration, analyse Paul. On préférait vivre en toute indépendance grâce aux passionnés qui s’investissent sans compter au quotidien.” Selon lui, l'avenir du sport ne se trouve pas dans une affiliation avec la FFC. 
                </p>
              </div>
            </div>
           
          </div>
          <div className="col-12 col-md-6 pl-lg-5 position-relative">
            <Parallax className="position-absolute parallax-item--first" y={["100px", "-100px"]} tagOuter="figure">
              <LazyLoad once offset={500}>
                <img src={ChapterThreeCircle1} alt="" className="img-fluid" />
              </LazyLoad>
            </Parallax>
            <Parallax y={["200px", "-200px"]} tagOuter="figure">
              <LazyLoad once offset={500}>
                <img src={ChapterThreeImg6} alt="Chapitre 3" className="img-fluid pl-lg-5" />
              </LazyLoad>
              <figcaption className="pl-lg-5">Paul Vergnaud est un des plus grands champions français avec son équipe Call Me Daddy. Le joueur parisien, récemment papa, pose ici chez lui avec un de ses trophés : celui du Polorama. Pour lui l’avenir du sport ne passe pas par la Fédération Française de Cyclisme.</figcaption>
            </Parallax>
          </div>
        </div>
      </div>
      <Spacer size="medium"/>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <Parallax y={["200px", "-200px"]} tagOuter="figure">
              <LazyLoad once offset={500}>
                <img src={ChapterThreeImg7} alt="Chapitre 3" className="img-fluid" />
              </LazyLoad>
              <figcaption className="pl-lg-5">À Strasbourg, un spectateur regarde le match assis sur une chaise de camping. Pour Elodie Martini, le Bike Polo est coincé entre une envie de développement et son âme de “sport entre copains”</figcaption>
            </Parallax>
          </div>
          <div className="col-12 col-md-6 pl-lg-5">
            <p>
              Son coéquipier Luca n’est pourtant pas de cet avis. “Je ne comprends pas pourquoi on refuserait de s’affilier à la fédération.” L’Anglais estime que son sport pourrait franchir un palier grâce à l’instance. “Cela nous permettrait d’avoir de meilleures infrastructures, d’être aidés financièrement et, surtout, d’être reconnu comme un sport à part entière.” 
            </p>
            <Spacer size="medium" />
            <p>
              Par ce biais, Luca espère que le bike-polo soit traité comme d’autres disciplines cyclistes. “Si nous faisions partie intégrante de la FFC, je serais sûr d’avoir un rendez-vous avec la mairie dans le mois”, renchérit Jean-François Jolfre, ancien membre parisien du Comité Bike Polo France.
            </p>
          </div>
        </div>
      </div>
      <Spacer size="medium" />
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 pr-lg-5">
            <p>
              Pour autant, il semble aujourd'hui impossible pour le Hardcourt Bike Polo d’évoluer en ce sens. Une telle affiliation pourrait rendre le sport inaccessible à de nombreux adhérents, par une augmentation des coûts, ou l’instauration de normes contraignantes. "Pour l'instant, ça marche bien comme ça", conclut Jean-François Jolfre.
            </p>
            <Spacer size="medium" />
            <p>
              Le hardcourt bike polo semble assis entre deux selles : celle de la professionnalisation d’une part, et de la spontanéité alternative de ses débuts d’autre part.“Le côté DIY et underground est la force et la faiblesse de notre sport”, analyse Elodie Martini. “On ne grandit plus beaucoup, mais on ne veut pas non plus perdre notre liberté. C’est paradoxal. On est trop petit pour être reconnu et trop gros pour n’être qu’un sport entre copains !”
            </p>
            <Spacer size="medium" />
            <p>
              Le sport peut donner l’impression d’avoir du mal à passer à la vitesse supérieure, mais l’institutionnalisation de la pratique n’arrivera pas de sitôt. L’autogestion et l’indépendance restent des piliers de la maison Bike Polo en France. Cependant, les joueurs et joueuses mettent toujours autant les mains dans le cambouis pour éviter que la rouille s’accumule. En attendant, le sport continue de rouler sa bosse, en toute liberté.
            </p>
          </div>
          <div className="col-12 col-md-6 position-relative">
            <Parallax className="position-absolute parallax-item--first" y={["100px", "-100px"]} tagOuter="figure">
              <LazyLoad once offset={500}>
                <img src={ChapterThreeCircle1} alt="" className="img-fluid" />
              </LazyLoad>
            </Parallax>
            <div className="decorated-content" style={{height: "932px"}}>
              <LazyLoad once offset={500}>
                <img src={ChapterThreeBg2} alt="Chapitre 3" className="img-fluid" />
              </LazyLoad>
              <div className="decorated-content__content">
                <Parallax y={["200px", "-200px"]} tagOuter="figure">
                  <blockquote>
                    « Pour l’instant, ça marche bien comme ça. »
                    <br/>
                    <cite title="Morgan Hidalgo">- Jean-François Jolfre</cite>
                  </blockquote>
                </Parallax>
                <Parallax y={["200px", "-200px"]} tagOuter="figure">
                  <LazyLoad once offset={500}>
                    <img src={ChapterThreeImg10} alt="Chapitre 3" className="img-fluid" />
                  </LazyLoad>
                </Parallax>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <HitAnimation/> */}
      <Spacer size="large"/>
      {/* <Carousel/> */}
      <Spacer size="large"/>
      {/* <SkewSection>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente dolor commodi molestiae ab ipsam vero! Maiores a perspiciatis, sit voluptatibus nihil, quasi esse eaque cumque possimus, reprehenderit sed eveniet optio?</p>
            </div>
          </div>
        </div>
      </SkewSection> */}
      <div className="position-relative chapter-three-transition">
        <div className="page-decoration page-decoration--is-full" >
          <LazyLoad once offset={500}>
            <img src={ChapterThreeBg1} alt="chapter two background" className="w-100"/>
          </LazyLoad>
        </div>
      </div>
     
    </div>
  );
};

export default ChapterThree;