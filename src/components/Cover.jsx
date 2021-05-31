import React, { useCallback, useRef } from 'react';
import { Parallax } from 'react-scroll-parallax';
import { useMouseEvents, useMediaQuery } from 'beautiful-react-hooks';
import { useSpring, animated, interpolate } from 'react-spring';
import IntroVideo from './IntroVideo';
import { breakpoints } from '../utils/responsive';

const Cover = () => {
  const ref = useRef();
  const [{ st, xy }, set] = useSpring(() => ({ st: 0, xy: [0, 0] }));
  const { onMouseMove } = useMouseEvents(ref);
  const interpBg = xy.to((x, y) => `perspective(500px) rotateY(${x / 60}deg) rotateX(${-y / 60}deg) translate3d(0, 0, 0)`);
  const interpTitle = interpolate([st, xy], (o, xy) => `translate(${xy[0] / 30},${xy[1] / 30 + -10 + o / 8})`);
  onMouseMove(({ clientX: x, clientY: y }) => {
    set({ xy: [x - window.innerWidth / 2, y - window.innerHeight / 2] });
  }, [set]);
  const onScroll = useCallback(e => set({ st: e.target.scrollTop / 30 }), [set]);
  const isMedium = useMediaQuery(`(min-width: ${breakpoints.md}px)`);
  const isLarge = useMediaQuery(`(min-width: ${breakpoints.lg}px)`);
  const isXLarge = useMediaQuery(`(min-width: ${breakpoints.xl}px)`);
  let y = ["400px", "0px"];
  if (isMedium) {
    y = ["500px", "0px"];
  }
  if (isLarge) {
    y = ["700px", "0px"];
  }
  if (isXLarge) {
    y = ["800px", "0px"];
  }
  return (
    <Parallax y={y} className="cover-section cover-section--is-title" styleInner={{width: "100%"}}>
      <div ref={ref} onScroll={onScroll}>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="d-flex flex-column align-items-center justify-content-center">
                <animated.div style={{transform: interpBg}} className="w-100">
                  <animated.div style={{transform: interpTitle}}>
                    <h1 className="cover-section__title">
                      <span>En</span>
                      <span>roue</span>
                      <span>libre</span>
                    </h1>
                  </animated.div>
                </animated.div>
              </div>
            </div>
          </div>
          <IntroVideo/>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;