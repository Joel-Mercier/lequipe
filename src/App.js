import React, { useState, useLayoutEffect, useMemo } from 'react';
import { useTimeout, useWindowScroll, useThrottledFn, useWindowResize } from 'beautiful-react-hooks';
import { useController } from 'react-scroll-parallax';
import 'bootstrap/dist/css/bootstrap-grid.css';
import './App.scss';
import SplashScreen from './components/SplashScreen';
import BackToTop from './components/BackToTop';
import Cover from './components/Cover';
import Header from './components/Header';
import ChapterOne from './chapters/ChapterOne';
import Progress from './components/Progress';
import { clamp } from './utils/clamp';

function App() {
  const [scrollY, setScrollY] = useState(window.scrollY);
  const [documentHeight, setDocumentHeight] = useState(document.body.scrollHeight);

  useTimeout(() => {
    document.body.classList.add('is-ready');
  }, 2000);

  useWindowScroll(useThrottledFn((event) => {
    setScrollY(window.scrollY);
  }, 250));

  useWindowResize(useThrottledFn((e) => {
    setDocumentHeight(document.body.scrollHeight)
  }, 250))

  const { parallaxController } = useController();

  useLayoutEffect(() => {
    setDocumentHeight(document.body.scrollHeight)
  }, [])
  useLayoutEffect(() => {
    const handler = () => parallaxController.update();
    window.addEventListener('load', handler);
    return () => window.removeEventListener('load', handler);
  }, [parallaxController]);

  const scrollPercentage = useMemo(() => {
    return clamp(Math.round((scrollY / (documentHeight - window.innerHeight)) * 100), 0, 100);
  }, [documentHeight, scrollY])

  return (
    <div className="app">
      <SplashScreen />
      <Header />
      <Cover />
      <ChapterOne />
      <Progress progress={scrollPercentage} />
      <BackToTop offset={window.innerHeight} />
    </div>
  );
}

export default App;
