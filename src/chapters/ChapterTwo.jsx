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
      
      <Spacer size="large"/>
      <QuoteStack/>
      <Spacer size="large"/>
    </div>
  );
}

export default ChapterTwo;