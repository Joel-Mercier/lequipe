import React, { useState, useEffect, useLayoutEffect, useMemo, useCallback, Suspense } from 'react';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { useTimeout, useWindowScroll, useThrottledFn, useWindowResize } from 'beautiful-react-hooks';
import { useController } from 'react-scroll-parallax';
import SplashScreen from './components/SplashScreen';
import BackToTop from './components/BackToTop';
import Cover from './components/Cover';
import Header from './components/Header';
import Intro from './chapters/Intro';
import ChapterOne from './chapters/ChapterOne';
import ChapterTwo from './chapters/ChapterTwo';
import ChapterThree from './chapters/ChapterThree';
import Progress from './components/Progress';
import Footer from './components/Footer';
import Alert from './components/Alert';
import { clamp } from './utils/clamp';
import 'bootstrap/dist/css/bootstrap-grid.css';
import './styles/App.scss';

const AudioPlayer = React.lazy(() => import('./components/AudioPlayer/AudioPlayer'));

export const StateContext = React.createContext({
  serviceWorkerInitialized: false,
  serviceWorkerUpdated: false,
  serviceWorker: null,
  audioPlaying: false,
  audioSrc: null,
});

const App = () => {
  const [scrollY, setScrollY] = useState(window.scrollY);
  const [documentHeight, setDocumentHeight] = useState(document.body.scrollHeight);
  const [serviceWorkerInitialized, setServiceWorkerInitialized] = useState(false);
  const [serviceWorkerUpdated, setServiceWorkerUpdated] = useState(false);
  const [serviceWorker, setServiceWorker] = useState(null);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [audioSrc, setAudioSrc] = useState(null);

  // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
  useEffect(() => {
    serviceWorkerRegistration.register({
      onSuccess: () => setServiceWorkerInitialized(true),
      onUpdate: (registration) => {
        setServiceWorker(registration)
        setServiceWorkerUpdated(true)
      },
    });
  }, [])

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
    const titleCover = document.querySelector('.cover-section--is-title');
    return clamp(Math.round((scrollY / (documentHeight - titleCover?.scrollHeight || 1200)) * 100), 0, 100);
  }, [documentHeight, scrollY])

  const handleUpdateServiceWorkerClick = useCallback(() => {
    const registrationWaiting = serviceWorker.waiting;
    if (registrationWaiting) {
      registrationWaiting.postMessage({ type: 'SKIP_WAITING' });
      registrationWaiting.addEventListener('statechange', e => {
        if (e.target.state === 'activated') {
          window.location.reload();
        }
      });
    }
  }, [serviceWorker]);
  return (
    <div className="app">
      <StateContext.Provider value={{ serviceWorkerInitialized, serviceWorkerUpdated, audioSrc, audioPlaying, setAudioSrc, setAudioPlaying }}>
        <SplashScreen />
        <Header/>
        <Cover/>
        <main>
          <Intro/>
          <ChapterOne/>
          <ChapterTwo/>
          <ChapterThree/>
          <Footer/>
        </main>        
        {audioSrc &&
          <Suspense
            fallback={<div></div>}
          >
            <AudioPlayer
              open={audioSrc}
            />
          </Suspense>
        }
        <Alert
          open={serviceWorkerUpdated}
          content="Une version plus récente de cette page est disponible"
          cta="Mettre à jour"
          onClick={handleUpdateServiceWorkerClick}
        />
        <Progress progress={scrollPercentage}/>
        <BackToTop offset={window.innerHeight}/>
      </StateContext.Provider>
    </div>
  );
};

export default App;
