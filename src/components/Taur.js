import React from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
  .dert {
    object-fit: cover;
  }
  .limited {
    margin-top: 3rem;
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
        <div className="column">
          <section className="section">
            <div className="container">
              <h1 className="title is-1 is-spaced">
                Make Your Tour Memorable and Safe With Us
              </h1>
              <p className="subtitle">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>
              <p className="subtitle">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>
              <nav className="level ">
                <div className="level-item has-text-centered">
                  <div>
                    <p className="title has-text-warning">300</p>
                    <p className="heading has-text-weight-bold">
                      Successful Tours
                    </p>
                  </div>
                </div>
                <div className="level-item has-text-centered">
                  <div>
                    <p className="title has-text-warning">24000</p>
                    <p className="heading has-text-weight-bold	">
                      Happy Tourist
                    </p>
                  </div>
                </div>
                <div className="level-item has-text-centered">
                  <div>
                    <p className="title has-text-warning">700</p>
                    <p className="heading has-text-weight-bold	">
                      Place Explored
                    </p>
                  </div>
                </div>
              </nav>
            </div>
          </section>
        </div>
      </div>
    </div>
  </Wrapper>
);

export default Taur;
