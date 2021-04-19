import React from 'react';

const SkewSection = ({ children }) => {
  return (
    <div className="skew-section">
      <div className="skew-section__inner">
        {children}
      </div>
    </div>
  );
};

export default SkewSection;