import React from 'react';
import { ReactComponent as PlayIcon } from '../../assets/play.svg';

const Play = ({ handleClick }) => {
  return (
    <button className="audio-player__button" onClick={() => handleClick()}>
      <PlayIcon />
    </button>
  );
};

export default Play;