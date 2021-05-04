import React from 'react';
import logo from '../assets/logo-explore.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <img src={logo} className="footer__logo img-fluid" alt="L'Equipe Explore : En roue libre" />
          </div>
          <div className="col-12 col-md-6">
            <h3 className="footer__section-title">Rédaction</h3>
            <p>Joel Mercier</p>
            <p>Joel Mercier</p>
            <p>Joel Mercier</p>
            <p>Joel Mercier</p>
            <h3 className="footer__section-title">Photos</h3>
            <p>Joel Mercier</p>
            <p>Joel Mercier</p>
            <p>Joel Mercier</p>
          </div>
          <div className="col-12 col-md-6">
            <h3 className="footer__section-title">Direction artistique</h3>
            <p>Joel Mercier</p>
            <p>Joel Mercier</p>
            <h3 className="footer__section-title">Développement</h3>
            <p>Joel Mercier</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;