import React from 'react';
import { ReactComponent as PauseIcon } from '../../assets/pause.svg'

const Pause = ({ handleClick }) => {
  return (
    <button className="audio-player__button" onClick={() => handleClick()}>
      <PauseIcon />
    </button>
  );
};

export default Pause;