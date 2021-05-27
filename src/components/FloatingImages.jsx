import React from 'react';
import { useSpring, animated } from 'react-spring';
import floatingImg1 from '../assets/floating-img-1.png';
import floatingImg2 from '../assets/floating-img-2.png';
import floatingImg3 from '../assets/floating-img-3.png';
import floatingImg4 from '../assets/floating-img-4.png';

const images = [
  {
    title: "4 terrains dédiés au Bike Polo",
    src: floatingImg1,
  },
  {
    title: "6 terrains en intérieur pour jouer l’hiver",
    src: floatingImg2,
  },
  {
    title: "10 clubs partagent leur terrain",
    src: floatingImg3,
  },
  {
    title: "4 squattent sans autorisation",
    src: floatingImg4,
  },
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
        return (
          <div className="floating-images__column">
            <animated.div className="floating-images__image" style={{ transform: animationProps.radians.to(interp(index)) }} key={index}>
              <img src={image.src} alt="floating example" className="img-fluid" />
            </animated.div>
            <p className="floating-images__title">{image.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default FloatingImages;