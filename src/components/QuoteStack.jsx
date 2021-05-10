import React, { useState } from 'react';
import { useSprings, animated, interpolate } from 'react-spring';
import { useDrag } from 'react-use-gesture';

// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = i => ({ x: 0, y: i * -4, scale: 1, rot: -10 + Math.random() * 20, delay: i * 100 });
const from = i => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r, s) => `rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`;

const cards = [
  {
    content: [
      "Un match oppose 2 équipes de 3 joueurs.",
      "Un match dure 10 minutes."
    ]
  },
  {
    content: [
      "L’objectif est de pousser la balle dans le but adverse grâce au maillet et sans poser le pied à terre du vélo."
    ]
  },
  {
    content: [
      "L'équipe qui a le score le plus élevé à la fin gagne. Dans certaines villes, le match s’arrête si une équipe marque 5 points."
    ]
  },
  {
    content: [
      'Pour marquer, le tir doit être effectué avec une des extrémités du maillet. Si la balle est rentrée avec le côté le plus large, il y a "shuffle" : le but n\'est pas accordé et le jeu continue.'
    ]
  },
  {
    content: [
      'Il est interdit de poser le pied à terre. Sinon, il y a "foot down" : le joueur doit aller taper avec son maillet l’une des parois extérieures au niveau du centre du terrain. C’est un "tap out".'
    ]
  },
  {
    content: [
      "Lorsqu'une équipe marque un but, elle retourne dans sa moitié du terrain. Le jeu reprend lorsque l'équipe adverse dépasse la ligne centrale."
    ]
  },
  {
    content: [
      "Les seuls contacts autorisés sont : corps contre corps, vélo contre vélo et maillet contre maillet."
    ]
  },
].reverse();

const QuoteStack = () => {
  const [gone] = useState(() => new Set()); // The set flags all the cards that are flicked out
  const [props, set] = useSprings(cards.length, i => ({ ...to(i), from: from(i) })); // Create a bunch of springs using the helpers above
  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
  const bind = useDrag(({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
    const trigger = velocity > 0.2; // If you flick hard enough it should trigger the card to fly out
    const dir = xDir < 0 ? -1 : 1; // Direction should either point left or right
    if (!down && trigger) gone.add(index); // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
    set((i) => {
      if (index !== i) return // We're only interested in changing spring-data for the current spring
      const isGone = gone.has(index);
      const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0; // When a card is gone it flys out left or right, otherwise goes back to zero
      const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0); // How much the card tilts, flicking it harder makes it rotate faster
      const scale = down ? 1.1 : 1; // Active cards lift up a bit
      return { x, rot, scale, delay: undefined, config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 } };
    });
    if (!down && gone.size === cards.length) setTimeout(() => gone.clear() || set((i) => to(i)), 600);
  });
  return (
    <div className="quote-stack">
      {props.map(({ x, y, rot, scale }, i) => (
        <animated.div className="quote-stack__card-container" key={i} style={{ transform: interpolate([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`) }}>
          {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
          <animated.div className="quote-stack__card" {...bind(i)} style={{ transform: interpolate([rot, scale], trans), touchAction: 'none' }}>
            <div className="quote-stack__card-inner">
              <h3 className="quote-stack__card-title">{`Règle #${cards.length - i}`}</h3>
              {cards[i].content.map((content, index) => (
                <p key={index}>{content}</p>
              ))}
            </div>
          </animated.div>
        </animated.div>
      ))}
    </div>
  );
};

export default QuoteStack;