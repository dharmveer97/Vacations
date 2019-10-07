import React from 'react';

const FeedBack = props => {
  const { text, Name, Position, img } = props;
  return (
    <div className="card">
      <p className="card-header-title">{text}</p>
      <div className="media">
        <div className="media-left">
          <figure className="image is-48x48">
            <img className="is-rounded" src={img} alt="namesss" />
          </figure>
        </div>
        <div className="media-content">
          <p className="title is-4">{Name}</p>
          <p className="subtitle is-6">{Position} 5</p>
        </div>
      </div>
    </div>
  );
};

export default FeedBack;
