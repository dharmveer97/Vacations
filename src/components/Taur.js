import React from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
  .dert {
    object-fit: cover;
  }
`;

const Taur = () => (
  <Wrapper>
    <div className="container">
      <div className="columns">
        <div className="column is-half">
          <figure className="image is-square">
            <img
              className="dert"
              src="https://colorlib.com/preview/theme/vacation/images/about.jpg"
              alt="aaa"
            />
          </figure>
        </div>
        <div className="column is-half">
          <iframe
            className="has-ratio"
            src="https://www.youtube.com/embed/YE7VzlLtp-4?showinfo=0"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  </Wrapper>
);

export default Taur;
