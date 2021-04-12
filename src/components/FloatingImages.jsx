import React from 'react';
import { useSpring, animated } from 'react-spring';
import floatingImg from '../assets/floating-image.jpeg';

const FloatingImages = () => {
  const items = [1, 2, 3, 4];
  const interp = i => r => `translate3d(0, ${15 * Math.sin(r + (i * 2 * Math.PI) / 1.5)}px, 0)`

  const animationProps = useSpring({
    to: { radians: 2 * Math.PI },
    from: { radians: 0 },
    loop: true,
    config: { duration: 5000 },
  })
  
  return (
    <div className="floating-images">
      {items.map(index => {
        return <animated.div className="floating-images__image" style={{ transform: animationProps.radians.to(interp(index)) }} key={index}><img src={floatingImg} alt="floating example" className="img-fluid" /></animated.div>
      })}
    </div>
  );
};

export default FloatingImages;