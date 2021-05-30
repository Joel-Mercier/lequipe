import React, { useCallback, useRef } from 'react';
import { Parallax } from 'react-scroll-parallax';
import { useMouseEvents } from 'beautiful-react-hooks';
import { useSpring, animated, interpolate } from 'react-spring';
import IntroVideo from './IntroVideo';

const Cover = () => {
  const ref = useRef();
  const [{ st, xy }, set] = useSpring(() => ({ st: 0, xy: [0, 0] }))
  const { onMouseMove } = useMouseEvents(ref);
  const interpBg = xy.to((x, y) => `perspective(500px) rotateY(${x / 60}deg) rotateX(${-y / 60}deg) translate3d(0, 0, 0)`)
  const interpTitle = interpolate([st, xy], (o, xy) => `translate(${xy[0] / 30},${xy[1] / 30 + -10 + o / 8})`)
  onMouseMove(({ clientX: x, clientY: y }) => {
    set({ xy: [x - window.innerWidth / 2, y - window.innerHeight / 2] })
  }, [set])
  const onScroll = useCallback(e => set({ st: e.target.scrollTop / 30 }), [set])

  return (
    <Parallax y={["1300px", "0px"]} className="cover-section cover-section--is-title" styleInner={{width: "100%"}}>
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
  )
};

export default Cover;