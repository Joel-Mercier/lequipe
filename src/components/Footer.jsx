import React from 'react';
import logo from '../assets/logo-explore.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <img src={logo} className="footer__logo img-fluid" alt="L'Equipe Explore : En roue libre" />
            <h3 className="footer__section-title">Remerciements</h3>
          </div>
          <div className="col-12 col-md-6">
            <p>
              Un grand merci à Séverine Garcia pour son écoute attentive et ses conseils avisés, à Joël Mercier pour sa patience et sa flexbilité.
            </p>
            <p>
              Un grand merci à toutes les personnes qui ont participé de près ou de loin à cette production, notamment les joueurs et joueuses de Bike Polo, les clubs de Paris, Lyon, Marseille, Strasbourg ou Rouen qui ont bien voulu répondre à nos questions.
            </p>
            <p>
              Merci aussi à Jean-François Diana, Raphael Dardeau qui ont suivi ce projet à distance, et l’équipe enseignante du MJMN pour leur disponibilité et leur accompagnement au long de l’année.
            </p>
          </div>
          <div className="col-12 col-md-6">
            <p>
              <strong>Rédaction :</strong> Mehdi Abdsalam, Isabelle Hautefeuille, Adrien Bachy, Julien Rieffel, Martin Lelievre, Arthur Diliberto
            </p>
            <p>
              <strong>Graphisme :</strong> Martin Lelievre, Julien Rieffel, Pierre Vuillemot , Severine Garcia,
              Charlène Dosio, Isabelle Hautefeuille
            </p>
            <p>
              <strong>Montage :</strong> Lucas Ruch
            </p>
            <p>
              <strong>Developpement :</strong> Joël Mercier
            </p>
            <p>
              <strong>Tournage :</strong> Mehdi Abdsalam, Martin Lelievre, Isabelle Hautefeuille, Julien Rieffel, Lucas Ruch, Adrien Bachy, Audrey Margerie, Charlène Dosio
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;