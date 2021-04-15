import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import FloatingImages from '../components/FloatingImages';
import HitAnimation from '../components/HitAnimation';
import Spacer from '../components/Spacer';
import QuoteStack from '../components/QuoteStack';
import Carousel from '../components/Carousel';
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
              <img src={introImg} alt="Intro" className="img-fluid light-shadow" />
            </Parallax>
          </div>
        </div>
      </div>
      <Spacer size="medium" />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <FloatingImages />
          </div>
        </div>
      </div>
      <Spacer size="medium" />
      <HitAnimation />
      <Spacer size="large" />
      <QuoteStack />
      <Spacer size="large" />
      <Carousel />
      <Spacer size="large" />
    </div>
  )
};

export default ChapterOne;