import React from 'react';

const Progress = ({ progress }) => {
  return (
    <div className="progress">
      <div
        className="progress__progression"
        style={{
          backgroundPositionX: `${100 - progress}%`,
        }}
      />
    </div>
  );
}

export default Progress;