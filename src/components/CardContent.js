import React from 'react';
import Cards from './Cards';

const CardContent = () => (
  <section className="section">
    <div className="container">
      <div className="columns">
        <div className="column">
          <Cards
            img="https://colorlib.com/preview/theme/vacation/images/place-1.jpg"
            title="Singapore"
          />
        </div>
        <div className="column">
          <Cards
            img="https://colorlib.com/preview/theme/vacation/images/place-2.jpg"
            title="Canada"
          />
        </div>
        <div className="column">
          <Cards
            img="https://colorlib.com/preview/theme/vacation/images/place-3.jpg"
            title="Thailand"
          />
        </div>
        <div className="column">
          <Cards
            img="https://colorlib.com/preview/theme/vacation/images/place-4.jpg"
            title="Autralia"
          />
        </div>
      </div>
    </div>
  </section>
);
export default CardContent;
