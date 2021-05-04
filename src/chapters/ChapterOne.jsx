import React from 'react';
import ChapterTitle from '../components/ChapterTitle';
import FloatingImages from '../components/FloatingImages';
import HitAnimation from '../components/HitAnimation';
import QuoteStack from '../components/QuoteStack';
import Carousel from '../components/Carousel';
import SkewSection from '../components/SkewSection';
import Spacer from '../components/Spacer';
import ChapterOneTitleBg1 from '../assets/chapter-1-title-bg-1.png';
import ChapterOneTitleBg2 from '../assets/chapter-1-title-bg-2.png';

const ChapterOne = () => {
  return (
    <div className="chapter-one">
      <ChapterTitle
        title="Underground"
        mainBackground={ChapterOneTitleBg1}
        secondaryBackground={ChapterOneTitleBg2}
      />
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

export default ChapterOne;