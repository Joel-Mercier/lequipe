import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import LazyLoad from 'react-lazyload';
import ChapterTitle from '../components/ChapterTitle';
import Spacer from '../components/Spacer';
import FloatingImages from '../components/FloatingImages';
import HitAnimation from '../components/HitAnimation';
import Carousel from '../components/Carousel';
import SkewSection from '../components/SkewSection';
import ChapterThreeTitleBg1 from '../assets/chapter-3-title-bg-1.png';
import ChapterThreeTitleBg2 from '../assets/chapter-3-title-bg-2.png';

const ChapterThree = () => {
  return (
    <div className="chapter-three">
      <ChapterTitle
        title="Des terrains inconnus"
        mainBackground={ChapterThreeTitleBg1}
        secondaryBackground={ChapterThreeTitleBg2}
      />
      <Spacer size="medium"/>
      <Spacer size="large"/>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <FloatingImages/>
          </div>
        </div>
      </div>
      <Spacer size="medium"/>
      {/* <HitAnimation/> */}
      <Spacer size="large"/>
      <Carousel/>
      <Spacer size="large"/>
      <SkewSection>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente dolor commodi molestiae ab ipsam vero! Maiores a perspiciatis, sit voluptatibus nihil, quasi esse eaque cumque possimus, reprehenderit sed eveniet optio?</p>
            </div>
          </div>
        </div>
      </SkewSection>
    </div>
  );
};

export default ChapterThree;