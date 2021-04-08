import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import introImg from '../assets/chapter-1-intro.jpeg';

const ChapterOne = () => {
  return (
    <div className="chapter-one">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente dolor commodi molestiae ab ipsam vero! Maiores a perspiciatis, sit voluptatibus nihil, quasi esse eaque cumque possimus, reprehenderit sed eveniet optio?</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente dolor commodi molestiae ab ipsam vero! Maiores a perspiciatis, sit voluptatibus nihil, quasi esse eaque cumque possimus, reprehenderit sed eveniet optio?</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente dolor commodi molestiae ab ipsam vero! Maiores a perspiciatis, sit voluptatibus nihil, quasi esse eaque cumque possimus, reprehenderit sed eveniet optio?</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente dolor commodi molestiae ab ipsam vero! Maiores a perspiciatis, sit voluptatibus nihil, quasi esse eaque cumque possimus, reprehenderit sed eveniet optio?</p>
          </div>
          <div className="col-12 col-md-6">
            <Parallax className="custom-class" y={["200px", "-100px"]} tagOuter="figure">
              <img src={introImg} alt="Intro" className="img-fluid" />
            </Parallax>
          </div>
        </div>
      </div>
    </div>
  )
};

export default ChapterOne;