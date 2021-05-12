import React, { useEffect, useCallback, useContext } from 'react';
import classNames from 'classnames';
import { StateContext } from '../../App';
import useAudioPlayer from '../../hooks/useAudioPlayer';
import Bar from './Bar';
import Play from './Play';
import Pause from './Pause';
import polo from '../../assets/audio/itw-polo.mp3';
import freins from '../../assets/audio/itw-freins.mp3';
import pedale from '../../assets/audio/itw-pedale.mp3';
import pignon from '../../assets/audio/itw-pignon.mp3';
import protecDisque from '../../assets/audio/itw-protec-disque.mp3';
import protecValve from '../../assets/audio/itw-protec-valve.mp3';
import roue from '../../assets/audio/itw-roue.mp3';
import { ReactComponent as CloseIcon } from '../../assets/close.svg';

const audioFiles = [
  {
    id: "polo",
    src: polo,
  },
  {
    id: "freins",
    src: freins
  },
  {
    id: "pedale",
    src: pedale
  },
  {
    id: "pignon",
    src: pignon
  },
  {
    id: "protecDisque",
    src: protecDisque
  },
  {
    id: "protecValve",
    src: protecValve
  },
  {
    id: "roue",
    src: roue
  },
];

const AudioPlayer = ({ open }) => {
  const { audioSrc, audioPlaying, setAudioPlaying, setAudioSrc } = useContext(StateContext);
  const { curTime, duration, playing, setPlaying, setClickedTime } = useAudioPlayer(audioSrc);

  useEffect(() => {
    setPlaying(audioPlaying);
  }, [setPlaying, audioPlaying]);
  
  const close = useCallback(() => {
    setAudioSrc(null);
  }, [setAudioSrc]);

  return (
    <div className={classNames("audio-player", {"audio-player--is-open": open})}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="audio-player__content">
              {audioSrc &&
                <div className="audio-player__content-inner">
                  <audio id="audio" preload="none">
                    <source src={audioFiles.find(file => file.id === audioSrc.id).src} />
                    Your browser does not support the <code>audio</code> element.
                  </audio>
                  {playing ? 
                    <Pause handleClick={() => {
                      setPlaying(false);
                      setAudioPlaying(false);
                    }} /> :
                    <Play handleClick={() => {
                      setPlaying(true);
                      setAudioPlaying(true);
                    }} />
                  }
                  <p>{audioSrc.title}</p>
                  <Bar curTime={curTime} duration={duration} onTimeUpdate={(time) => setClickedTime(time)}/>
                </div>
              }
              <button className="audio-player__close" onClick={close}>
                <CloseIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;