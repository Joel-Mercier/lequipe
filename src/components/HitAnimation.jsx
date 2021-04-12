import React, { useEffect } from 'react';
import { useSpring, animated, config } from 'react-spring';
import { useScrollPercentage } from 'react-scroll-percentage';
import bat from '../assets/bat.png';
import ball from '../assets/ball.png';

const HitAnimation = () => {
  const [ref, percentage] = useScrollPercentage({
    threshold: 0,
  });
  const [{ opacity, rotate, x }, set] = useSpring(() => ({ opacity: 0, rotate: 240, x: 0, config: config.stiff }));
  const opacityProp = opacity.to({
    range: [0, 0.5, 1],
    output: [0, 0.8, 0]
  });
  const batTransformProps = rotate.to(deg => {
    return `scaleX(-1) rotate(${deg}deg)`;
  });
  const ballTransformProps = x.to(x => {
    return `translate3d(${x * 100}%, 75%, 0) scale(1.${x / 2})`;
  });

  useEffect(() => {
    set({ opacity: percentage, rotate: 240 + (percentage * 100), x: percentage < 0.58 ? 0 : percentage });
  }, [percentage, set]);
  return (
    <div ref={ref} className="hit-animation container-fluid">
      <animated.img src={bat} style={{ opacity: opacityProp, transform: batTransformProps }} className="hit-animation__bat" alt="polo bat" />
      <animated.img src={ball} style={{ opacity: opacityProp, transform: ballTransformProps }} className="hit-animation__ball" alt="polo ball" />
    </div>
  );
};

export default HitAnimation;