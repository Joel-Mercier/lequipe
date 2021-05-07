import React, { useState, useEffect, useLayoutEffect, useMemo, useCallback } from 'react';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { useTimeout, useWindowScroll, useThrottledFn, useWindowResize } from 'beautiful-react-hooks';
import { useController } from 'react-scroll-parallax';
import 'bootstrap/dist/css/bootstrap-grid.css';
import './styles/App.scss';
import SplashScreen from './components/SplashScreen';
import BackToTop from './components/BackToTop';
import Cover from './components/Cover';
import Header from './components/Header';
import Intro from './chapters/Intro';
import ChapterOne from './chapters/ChapterOne';
import Progress from './components/Progress';
import Footer from './components/Footer';
import Alert from './components/Alert';
import { clamp } from './utils/clamp';

export const StateContext = React.createContext({
  serviceWorkerInitialized: false,
  serviceWorkerUpdated: false,
  serviceWorker: null,
});

const App = () => {
  const [scrollY, setScrollY] = useState(window.scrollY);
  const [documentHeight, setDocumentHeight] = useState(document.body.scrollHeight);
  const [serviceWorkerInitialized, setServiceWorkerInitialized] = useState(false);
  const [serviceWorkerUpdated, setServiceWorkerUpdated] = useState(false);
  const [serviceWorker, setServiceWorker] = useState(null);

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
    return clamp(Math.round((scrollY / (documentHeight - window.innerHeight)) * 100), 0, 100);
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

  console.log('v2', serviceWorkerInitialized, serviceWorkerUpdated)

  return (
    <div className="app">
      <StateContext.Provider value={{ serviceWorkerInitialized, serviceWorkerUpdated }}>
        <SplashScreen />
        <Header />
        <Cover />
        <Intro />
        <ChapterOne />
        <Footer />
        <Alert
          open={serviceWorkerUpdated}
          content="Une version plus récente de cette page est disponible"
          cta="Mettre à jour"
          onClick={handleUpdateServiceWorkerClick}
        />
        <Progress progress={scrollPercentage} />
        <BackToTop offset={window.innerHeight} />
      </StateContext.Provider>
    </div>
  );
};

export default App;
