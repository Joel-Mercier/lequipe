import React from 'react';
import { Parallax } from 'react-scroll-parallax';
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
              Ecosyst??me BikePolo
            </h3>
            <p>
              Souvent, les sportifs n???attendent pas l???aval d???un comit?? pour d??velopper leur passion. ?? l???image de l???esprit DIY, diff??rents joueurs d??cident de cr??er leur propre soci??t??. Le but : concevoir une nouvelle offre de mat??riel ou am??liorer certains produits. C???est le cas de RogerBikePolo, l???un des rares fabricants fran??ais de pi??ces sp??cifiques au sport. ?????L???inconv??nient quand on joue avec du mat??riel de r??cup??ration, c???est qu???il s???use vite?????, affirme Laurent Trichereau, cr??ateur de la marque.
            </p>
            <Spacer size="medium"/>
            <p>
              Technicien d???usinage de m??tier, Laurent a notamment d??velopp?? une t??te de maillet plus l??g??re et plus r??sistante. Il vend ??galement des prot??ges-valves ou disques, contrecarrant les nombreux impacts du sport sur les v??los. Chaque ann??e, ce Montpelli??rain enregistre plusieurs commandes en France et ?? l'??tranger, dont celles d'??quipes enti??res. Avec MILK, une entreprise suisse de fabrication de maillets, ils sponsorisent de grands champions fran??ais, tels que Paul ou Morgan, ainsi que des comp??titions.
            </p>
            <Spacer size="medium"/>
            <p>
              Pour Morgan Hidalgo, le sponsoring des joueurs par ces entreprises sp??cialis??es est diff??rent des autres sports : ?? Nous n???avons pas de contrats formels. Ce qu???ils nous demandent, c???est de la visibilit??. Le Bike Polo est un sport trop petit pour b??n??ficier du sponsoring de marques plus connues. Pour elles, ce n???est pas un march?? suffisamment int??ressant. Mais on essaie quand m??me ! ?? Preuve en est, certains joueurs ont collabor?? ponctuellement avec des marques de luxe comme Louis Vuitton ou Louboutin ; loin des d??buts sur les parkings et les friches.
            </p>
          </div>
          <div className="col-12 col-md-6 d-flex flex-column justify-content-center position-relative">
            <Image src={ChapterThreeCircle2} alt="" className="img-fluid" y={["100px", "-100px"]} parallaxContainerClassName="position-absolute parallax-item--first"/>
            <Image src={ChapterThreeImg1} alt="Chapitre 3" className="img-fluid" y={["400px", "-100px"]} />

            <div className="row">
              <div className="col-12 col-sm-6">
                <Parallax y={["200px", "-200px"]} tagOuter="figure">
                  <figcaption className="pl-lg-5 mt-5">
                    Des nombreuses structures et entreprises se sont cr????es dans le sillage du Bike Polo. En haut, l'atelier de r??paration fond?? par Paul Vergnaud et ses amis rencontr??s gr??ce ?? cette pratique sportive. En bas, une balle de Hardcourt Bike Polo de la marque montpelli??raine Roger Bike Polo.
                  </figcaption>
                </Parallax>
              </div>
              <div className="col-12 col-sm-6">
                <Image src={ChapterThreeImg2} alt="Chapitre 3" className="img-fluid" y={["200px", "-200px"]} />
              </div>
            </div>
            <Iframe src="https://www.youtube.com/embed/oidW0pSVM9w?rel=0&modestbranding=1" title="Vid??o chapitre 3" containerClass="mt-5"/>
          </div>
        </div>
      </div>
      <Spacer size="medium"/>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 pr-lg-5">
            <Image src={ChapterThreeImg3} alt="Chapitre 3" className="img-fluid" y={["200px", "-200px"]} figcaption="Lyon Bike Polo joue sur un ancien terrain de hockey. Ils ont la chance de ne pas avoir ?? partager leur emplacement avec d???autres disciplines."/>
          </div>
          <div className="col-12 col-md-6 pl-lg-5">
            <h3>La guerre des terrains</h3>
            <p>
              A force de communication et de n??gociations, certaines ??quipes obtiennent des terrains aupr??s de leurs mairies respectives.  ?? Maintenant on joue ?? la Croix Rousse, sur un ancien terrain de street hockey qui a - presque - les bonnes dimensions pour jouer au polo ??, explique Morgan, fier de ce qu???il d??crit comme le ?? meilleur terrain de France. ??
            </p>
            <Spacer size="medium" />
            <p>
              N??anmoins la situation de Lyon n???est pas la norme : ?? Paris, Jean-Fran??ois Jolfre raconte que leur terrain va ??tre d??truit pour laisser place aux Jeux olympiques 2024. Du c??t?? de Strasbourg, le club partage le terrain avec les basketteurs, ce qui entra??ne parfois quelques tensions.
            </p>
          </div>
        </div>
      </div>
      <Spacer size="small"/>
      <div className="position-relative">
        <div className="page-decoration page-decoration--is-left">
          <Image src={ChapterThreeBg3} alt="Chapitre 3" className="w-100" />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 pr-lg-5">
            <p className="mt-5 mr-5">
              <strong className="mt-md-5">
                En France, seuls quatre courts sont exclusivement d??di??s ?? la pratique de cette discipline. Six courts int??rieurs permettent ??galement aux ??quipes qui le peuvent de s'entra??ner l'hiver dans l???Hexagone. ?? l???inverse, dix associations doivent partager leur terrain avec un autre sport et quatre autres doivent toujours squatter leurs terrains sans autorisation.
              </strong>
            </p>
          </div>
          <div className="col-12 col-md-6 pl-lg-5">
            <Image src={ChapterThreeImg4} alt="Chapitre 3" className="img-fluid" y={["200px", "-200px"]} figcaption="?? Strasbourg, le club joue sur un terrain de basket aupr??s du Parlement Europ??en. Ils le d??limitent eux-m??mes avec des planches de bois, rencontrant souvent quelques r??ticences aupr??s des joueurs de basketball."/>
          </div>
        </div>
      </div>
      <Spacer size="large"/>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3>Les terrains des clubs fran??ais</h3>
            <FloatingImages/>
          </div>
        </div>
      </div>
      <Spacer size="large"/>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 pr-lg-5">
            <Image src={ChapterThreeImg5} alt="Chapitre 3" className="img-fluid" y={["200px", "-200px"]} figcaption="Les joueurs de Marseille sont oblig??s de passer au dessus des grilles pour pouvoir jouer sur un terrain convenable."/>
          </div>
          <div className="col-12 col-md-6 pl-lg-5">
            <div className="decorated-content" style={{height: "932px"}}>
              <Image src={ChapterThreeBg2} alt="Chapitre 3" className="img-fluid" />
              <div className="decorated-content__content">
                <p>
                  Le Marseille Bike Polo est l???un de ces clubs sans terrain fixe. Faute d???un lieu appropri??, les joueurs se retrouvaient un temps dans un parc municipal partag?? avec les enfants du coin. En attendant une r??ponse de la mairie, ils ont tent?? une approche ?? l???amiable avec un club de roller de la ville pour avoir acc??s ?? leur terrain de jeu. Sans succ??s. Gabriel, responsable du club, et ses co??quipiers y jouent malgr?? tout, sautant la grille pour s'y entra??ner. ?? Le gros handicap, c???est de ne pas ??tre l??gitime ?? venir occuper le terrain. A chaque fois, on risque de se faire virer, et on sera dans l'obligation de partir. ??
                </p>
                <p className="mt-5">
                  Sans infrastructures adapt??es, difficile de faire grandir le nombre d???adh??rents. Si la discipline a connu une forte croissance durant ses premi??res ann??es d???existence, elle rencontre aujourd???hui des difficult??s de visibilit??. Le nombre de joueurs inscrits en club stagne. En cinq ans, il n???a augment?? que de 40 personnes.
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
            <p className="h3 ml-sm-5" style={{marginTop: "-40px"}}>Co??t moyen de cotisation : 27???</p>
          </div>
        </div>
      </div>
      <Spacer size="medium"/>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 pr-lg-5">
            <h3>L???ombre de la f??d??ration</h3>
            <div className="decorated-content" style={{height: "932px"}}>
              <Image src={ChapterThreeBg2} alt="Chapitre 3" className="img-fluid" />
              <div className="decorated-content__content">
                <p>
                  Pour y rem??dier, la possibilit?? d???institutionnaliser ce sport, en int??grant la prestigieuse F??d??ration Fran??aise de Cyclisme (FFC), a ??t?? soulev??e. Durant ses ??tudes en management du sport, Paul Vergnaud, de l?????quipe CallMeDaddy, a fait un stage de six mois ?? la FFC en 2010. Il prend alors ce d??bat ?? bras le corps en r??alisant un audit aupr??s de toutes les associations de Bike Polo de France pour une potentielle affiliation ?? l???instance. ?? La F??d????? ??tait tr??s int??ress??e de nous recruter. On ??tait en plein d??veloppement et on v??hiculait une image plut??t sympathique et d??cal??e de la pratique du v??lo. ??
                </p>
                <p className="mt-5">
                  Pourtant, le verdict est sans appel. ?? Ce n'??tait pas la volont?? des joueurs et des clubs de s???engager vers une telle int??gration, analyse Paul. On pr??f??re vivre en toute ind??pendance gr??ce aux passionn??s qui s???investissent sans compter au quotidien. ?? Selon lui, l'avenir du sport ne se trouve pas dans une affiliation avec la FFC.
                </p>
              </div>
            </div>
           
          </div>
          <div className="col-12 col-md-6 pl-lg-5 position-relative">
            <Parallax y={["600px", "-200px"]} tagOuter="figure">
              <blockquote>
                ?? On pr??f??rait vivre en toute ind??pendance. ??
                <br/>
                <cite title="Paul Vergnaud">- Paul Vergnaud</cite>
              </blockquote>
            </Parallax>
            <Image src={ChapterThreeCircle1} alt="Chapitre 3" className="img-fluid" y={["100px", "-100px"]} parallaxContainerClassName="position-absolute parallax-item--first"/>
            <Image src={ChapterThreeImg6} alt="Paul Vergnaud est l???un des plus grands champions fran??ais avec son ??quipe Call Me Daddy. Le joueur parisien, r??cemment papa, pose ici, chez lui, avec l'un de ses troph??es (Polorama). Pour lui, l'avenir du sport ne passe pas par la F??d??ration Fran??aise de Cyclisme." className="img-fluid" y={["200px", "-200px"]} figcaption="Paul Vergnaud est l???un des plus grands champions fran??ais avec son ??quipe Call Me Daddy. Le joueur parisien, r??cemment papa, pose ici, chez lui, avec l'un de ses troph??es (Polorama). Pour lui, l'avenir du sport ne passe pas par la F??d??ration Fran??aise de Cyclisme."/>
          </div>
        </div>
      </div>
      <Spacer size="medium"/>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <Image src={ChapterThreeImg7} alt="Chapitre 3" className="img-fluid" y={["200px", "-200px"]} figcaption='?? Strasbourg, un spectateur regarde le match assis sur une chaise de camping. Pour Elodie Martini, le Bike Polo est coinc?? entre une envie de d??veloppement et son ??me de ???sport entre copains???' figcaptionClassName="pl-lg-5"/>
          </div>
          <div className="col-12 col-md-6 pl-lg-5">
            <p>
              Son co??quipier Luca n???est pourtant pas de cet avis. ?? Je ne comprends pas pourquoi on refuserait de s???affilier ?? la f??d??ration. ?? L???Anglais estime que son sport pourrait franchir un palier gr??ce ?? l???instance. ?? Cela nous permettrait d???avoir de meilleures infrastructures, d?????tre aid??s financi??rement et, surtout, d?????tre reconnu comme un sport ?? part enti??re. ??
            </p>
            <Spacer size="medium" />
            <p>
              Par ce biais, Luca esp??re que le bike-polo soit trait?? comme d???autres disciplines cyclistes. ?? Si nous faisions partie int??grante de la FFC, je serais s??r d???avoir un rendez-vous avec la mairie dans le mois ??, rench??rit Jean-Fran??ois Jolfre, ancien membre parisien du Comit?? Bike Polo France.
            </p>
          </div>
        </div>
      </div>
      <Spacer size="medium" />
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 pr-lg-5">
            <p>
              Pour autant, il semble aujourd'hui impossible pour le Hardcourt Bike Polo d?????voluer en ce sens. Une telle affiliation pourrait rendre le sport inaccessible ?? de nombreux adh??rents, par une augmentation des co??ts, ou l???instauration de normes contraignantes. ?? Pour l'instant, ??a marche bien comme ??a ??, conclut Jean-Fran??ois Jolfre.
            </p>
            <Spacer size="medium" />
            <p>
              Le hardcourt bike polo semble assis entre deux selles : celle de la professionnalisation d???une part, et de la spontan??it?? alternative de ses d??buts d???autre part. ?? Le c??t?? DIY et underground est la force et la faiblesse de notre sport ??, analyse Elodie Martini. ?? On ne grandit plus beaucoup, mais on ne veut pas non plus perdre notre libert??. C???est paradoxal. On est trop petit pour ??tre reconnu et trop gros pour n?????tre qu???un sport entre copains ! ??
            </p>
            <Spacer size="medium" />
            <p>
              Le sport peut donner l???impression d???avoir du mal ?? passer ?? la vitesse sup??rieure, mais l???institutionnalisation de la pratique n???arrivera pas de sit??t. L???autogestion et l???ind??pendance restent des piliers de la maison Bike Polo en France. Cependant, les joueurs et joueuses mettent toujours autant les mains dans le cambouis pour ??viter que la rouille s???accumule. En attendant, le sport continue de rouler sa bosse, en toute libert??.
            </p>
          </div>
          <div className="col-12 col-md-6 position-relative">
            <Image src={ChapterThreeCircle1} alt="" className="img-fluid" y={["100px", "-100px"]} parallaxContainerClassName="position-absolute parallax-item--first"/>
            <div className="decorated-content" style={{height: "932px"}}>
              <Image src={ChapterThreeBg2} alt="Chapitre 3" className="img-fluid" />
              <div className="decorated-content__content">
                <Parallax y={["200px", "-200px"]} tagOuter="figure">
                  <blockquote>
                    ?? Pour l???instant, ??a marche bien comme ??a. ??
                    <br/>
                    <cite title="Jean-Fran??ois Jolfre">- Jean-Fran??ois Jolfre</cite>
                  </blockquote>
                </Parallax>
                <Image src={ChapterThreeImg10} alt="Chapitre 3" className="img-fluid" y={["200px", "-200px"]}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Spacer size="large"/>
      <div className="position-relative chapter-three-transition">
        <div className="page-decoration page-decoration--is-full" >
          <Image src={ChapterThreeBg1} alt="Chapitre 3" className="w-100" />
        </div>
      </div>
    </div>
  );
};

export default ChapterThree;