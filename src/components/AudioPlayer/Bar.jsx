import React from 'react';
import { format, addSeconds } from 'date-fns';

const Bar = ({ duration, curTime, onTimeUpdate }) => {

  const curPercentage = (curTime / duration) * 100;

  function formatDuration(duration) {
    if (duration) {
      const helperDate = addSeconds(new Date(0), duration);
      return format(helperDate, 'mm:ss')
    }
  }

  function calcClickedTime(e) {
    const clickPositionInPage = e.pageX;
    const bar = document.querySelector(".audio-player__bar__progress");
    const barStart = bar.getBoundingClientRect().left + window.scrollX;
    const barWidth = bar.offsetWidth;
    const clickPositionInBar = clickPositionInPage - barStart;
    const timePerPixel = duration / barWidth;
    return timePerPixel * clickPositionInBar;
  }

  function handleTimeDrag(e) {
    onTimeUpdate(calcClickedTime(e));

    const updateTimeOnMove = eMove => {
      onTimeUpdate(calcClickedTime(eMove));
    };

    document.addEventListener("mousemove", updateTimeOnMove);

    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", updateTimeOnMove);
    });
  }

  return (
    <div className="audio-player__bar">
      <span className="audio-player__bar__time">{formatDuration(curTime)}</span>
      <div
        className="audio-player__bar__progress"
        style={{
          background: `linear-gradient(to right, #8ca89b ${curPercentage}%, white 0)`
        }}
        onMouseDown={e => handleTimeDrag(e)}
      >
        <span
          className="audio-player__bar__progress__knob"
          style={{ left: `${curPercentage - 2}%` }}
        />
      </div>
      <span className="audio-player__bar__time">{formatDuration(duration)}</span>
    </div>
  );
};

export default Bar;
