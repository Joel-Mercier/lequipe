import React from 'react';

const ChapterTitle = ({title, mainBackground, secondaryBackground}) => {
  return (
    <div className="chapter-title" style={{backgroundImage: `url(${mainBackground})`}}>
      <div className="chapter-title__inner-bg" style={{backgroundImage: `url(${secondaryBackground})`}}></div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="d-flex flex-column align-items-center justify-content-center">
              <h2 className="chapter-title__title">{title}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChapterTitle;