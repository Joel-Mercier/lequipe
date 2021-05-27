import React, { useContext, useCallback } from 'react';
import classNames from 'classnames';
import { StateContext } from '../App';

const interviews = [
  {
    id: "polo",
    display: "Polo",
    title: "Morgan capsule début polo.mp3",
  },
  {
    id: "freins",
    display: "Freins",
    title: "Morgan capsule freins.mp3",
  },
  {
    id: "pedale",
    display: "Pédale",
    title: "Morgan capsule pédale.mp3",
  },
  {
    id: "pignon",
    display: "Pignon fixe",
    title: "Morgan capsule pignon fixe mensonge.mp3",
  },
  {
    id: "protecDisque",
    display: "Protection disque",
    title: "Morgan capsule protection disque.mp3",
  },
  {
    id: "protecValve",
    display: "Protection valve",
    title: "Morgan capsule protection valve.mp3",
  },
  {
    id: "roue",
    display: "Roue",
    title: "Morgan capsule roue.mp3",
  },
];

const Interview = () => {
  const { setAudioPlaying, setAudioSrc, audioPlaying, audioSrc } = useContext(StateContext);
  const handleAudioButtonClick = useCallback((interview) => {
    setAudioSrc(interview);
    setAudioPlaying(audioSrc && audioSrc.id === interview.id ? !audioPlaying : true);
  }, [audioPlaying, setAudioPlaying, setAudioSrc, audioSrc]);
  return (
    <div className="interview cover-section">
      {interviews.map((interview, index) => (
        <button
          key={index}
          className={classNames("btn transparent", interview.id, {"btn--is-active": audioPlaying && audioSrc && audioSrc.id === interview.id})}
          onClick={(e) => {
            e.preventDefault();
            handleAudioButtonClick(interview);
          }}
        >
          <p>
            <span className="bg"/>
            <span className="base"/>
            <span className="text">{audioPlaying && audioSrc && audioSrc.id === interview.id ? "En cours" : interview.display}</span>
          </p>
        </button>
      ))}
      <div className="interview__bg"></div>
    </div>
  );
};

export default Interview;