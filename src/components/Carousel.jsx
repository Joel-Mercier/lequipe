import React, { useRef } from 'react';
import { useSprings, animated } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import { clamp } from '../utils/clamp';
import Carousel1 from '../assets/carousel-1.jpeg';
import Carousel2 from '../assets/carousel-2.jpeg';
import Carousel3 from '../assets/carousel-3.jpeg';

const pages = [
  Carousel1,
  Carousel2,
  Carousel3,
]

const Carousel = () => {
  const index = useRef(1);
  const [props, set] = useSprings(pages.length, (i) => ({
    x: i * window.innerWidth,
    scale: 1,
    display: 'block'
  }))
  const bind = useDrag(({ active, movement: [mx], direction: [xDir], distance, cancel }) => {
    if (active && distance > window.innerWidth / 3)
      cancel((index.current = clamp(index.current + (xDir > 0 ? -1 : 1), 0, pages.length - 1)))
    set((i) => {
      if (i < index.current - 1 || i > index.current + 1) return { display: 'none' }
      const x = (i - index.current) * window.innerWidth + (active ? mx : 0)
      const scale = active ? 1 - distance / window.innerWidth / 2 : 1
      return { x, scale, display: 'block' }
    })
  });

  return (
    <div className="carousel">
      {props.map(({ x, display, scale }, i) => (
        <animated.div {...bind()} key={i}  className="carousel__slide" style={{ display, x }}>
          <animated.div className="carousel__slide-inner" style={{ scale, backgroundImage: `url(${pages[i]})` }} />
        </animated.div>
      ))}
    </div>
  );
};

export default Carousel;