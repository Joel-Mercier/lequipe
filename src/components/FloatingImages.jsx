import React from 'react';
import { useSpring, animated } from 'react-spring';
import floatingImg1 from '../assets/floating-img-1.png';
import floatingImg2 from '../assets/floating-img-2.png';
import floatingImg3 from '../assets/floating-img-3.png';
import floatingImg4 from '../assets/floating-img-4.png';

const images = [
  floatingImg1,
  floatingImg2,
  floatingImg3,
  floatingImg4,
];

const FloatingImages = () => {
  const interp = i => r => `translate3d(0, ${15 * Math.sin(r + (i * 2 * Math.PI) / 1.5)}px, 0)`

  const animationProps = useSpring({
    to: { radians: 2 * Math.PI },
    from: { radians: 0 },
    loop: true,
    config: { duration: 5000 },
  })
  
  return (
    <div className="floating-images">
      {images.map((image, index) => {
        return <animated.div className="floating-images__image" style={{ transform: animationProps.radians.to(interp(index)) }} key={index}><img src={image} alt="floating example" className="img-fluid" /></animated.div>
      })}
    </div>
  );
};

export default FloatingImages;