import React from 'react';

const Beach = props => (
  <div className="card">
    <div className="card-image">
      <figure className="image is-4by3">
        <img src={props.img} />
      </figure>
    </div>
    <div className="card-content">
      <div className="media">
        <div className="media-content">
          <p className="title is-4">John Smith</p>
          <p className="subtitle is-6">@johnsmith</p>
        </div>
      </div>

      <div className="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
        iaculis mauris. <a>@bulmaio</a>.<a href="#">#css</a>{' '}
        <a href="#">#responsive</a>
        <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
      </div>
    </div>
  </div>
);
export default Beach;
