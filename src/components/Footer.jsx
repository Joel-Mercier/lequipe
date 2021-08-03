import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3 className="footer__section-title">Remerciements</h3>
          </div>
          <div className="col-12 col-md-6">
            <p>
              Un grand merci à Séverine Garcia pour son écoute attentive et ses conseils avisés, ainsi qu’à Joël Mercier pour sa (grande) patience et sa flexbilité.
            </p>
            <p>
              Un grand merci à toutes les personnes qui ont participé de près ou de loin à cette production. Nous remercions particulièrement les joueurs et joueuses de Bike Polo, les clubs de Paris, Lyon, Marseille, Strasbourg et Rouen qui nous ont accueillis et ont bien voulu répondre à nos questions.
            </p>
            <p>
              Merci aussi à Jean-François Diana et Raphael Dardeau qui ont suivi ce projet à distance, ainsi qu’à l’équipe enseignante du Master Journalisme et Médias Numériques (MJMN) pour leur disponibilité et leur accompagnement tput au long de l’année. Enfin, merci à l’UFR SHS de l’Université de Lorraine à Metz pour son soutien financier et à Loïc Ballarini de nous avoir donné les autorisations pour tourner malgré les contraintes sanitaires actuelles.
            </p>
          </div>
          <div className="col-12 col-md-6">
            <p>
              <strong>Rédaction :</strong> Mehdi Abirez, Isabelle Hautefeuille, Adrien Bachy, Julien Rieffel, Martin Lelievre, Arthur Diliberto, Pierre Vuillemot
            </p>
            <p>
              <strong>Graphisme :</strong> Martin Lelievre, Julien Rieffel, Charlène Dosio, Isabelle Hautefeuille, Pierre Vuillemot, Séverine Garcia
            </p>
            <p>
              <strong>Montage :</strong> Lucas Ruch, Mehdi Abirez, Martin Lelievre
            </p>
            <p>
              <strong>Développement :</strong> Joël Mercier
            </p>
            <p>
              <strong>Tournages :</strong> Mehdi Abirez, Martin Lelievre, Isabelle Hautefeuille, Julien Rieffel, Lucas Ruch, Adrien Bachy, Audrey Margerie, Charlène Dosio
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <p className="footer__mentions">Ce projet a été réalisé dans le cadre du concours l'Equipe Explore</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;