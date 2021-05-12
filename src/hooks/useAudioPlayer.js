import { useState, useEffect } from "react";

function useAudioPlayer(src) {
  const [duration, setDuration] = useState();
  const [curTime, setCurTime] = useState();
  const [playing, setPlaying] = useState(false);
  const [clickedTime, setClickedTime] = useState();

  useEffect(() => {
    const audio = document.getElementById("audio");
    // const source = document.querySelector("#audio source")

    // state setters wrappers
    const setAudioData = () => {
      setDuration(audio.duration);
      setCurTime(audio.currentTime);
    }

    const setAudioTime = () => setCurTime(audio.currentTime);

    const setAudioEnd = () => {
      setCurTime(null);
      setPlaying(false);
    }

    // DOM listeners: update React state on DOM events
    audio.addEventListener("loadeddata", setAudioData);

    audio.addEventListener("timeupdate", setAudioTime);

    audio.addEventListener("ended", setAudioEnd)

    // React state listeners: update DOM on React state changes
    playing ? audio.play() : audio.pause();

    if (clickedTime && clickedTime !== curTime) {
      audio.currentTime = clickedTime;
      setClickedTime(null);
    } 

    // effect cleanup
    return () => {
      audio.removeEventListener("loadeddata", setAudioData);
      audio.removeEventListener("timeupdate", setAudioTime);
      audio.removeEventListener("ended", setAudioEnd);
    }
  }, [playing, clickedTime, curTime]);

  useEffect(() => {
    if (playing) {
      const audio = document.getElementById("audio");
      audio.load();
      audio.play();
      setCurTime(null);
    }
  }, [src, playing])

  return {
    curTime,
    duration,
    playing,
    setPlaying,
    setClickedTime,
    setDuration
  }
}

export default useAudioPlayer;