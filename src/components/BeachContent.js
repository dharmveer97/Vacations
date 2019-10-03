import React from 'react';
import Beach from './Beach';

const BeachContent = () => (
  <section className="section">
    <div className="container">
    <h1 className="title is-1 has-text-centered">Best Place Destination</h1>
      <div className="columns">
        <div className="column">
          <Beach
            img="https://colorlib.com/preview/theme/vacation/images/place-1.jpg"
            title="Singapore"
          />
        </div>
        <div className="column">
          <Beach
            img="https://colorlib.com/preview/theme/vacation/images/place-2.jpg"
            title="Canada"
          />
        </div>
        <div className="column">
          <Beach
            img="https://colorlib.com/preview/theme/vacation/images/place-3.jpg"
            title="Thailand"
          />
        </div>
      </div>
    </div>
  </section>
);
export default BeachContent;
