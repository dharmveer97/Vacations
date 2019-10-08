import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  background: #f1f1f1;
  .is-large {
    margin-bottom: 12px;
  }
`;

const Destination = () => (
  <Section className="section">
    <div className="container">
      <div className="columns">
        <div className="column is-half">
          <div className="columns is-multiline">
            <div className="column is-half">
              <div className="media">
                <div className="media-content">
                  <span className="icon is-large is-size-1 has-text-warning">
                    <i className="fas fa-walking" />
                  </span>
                  <p className="title is-4 is-spaced">Activities</p>
                  <p className="subtitle is-6">
                    A small river named Duden flows by their place and supplies
                    it with the necessary
                  </p>
                </div>
              </div>
            </div>
            <div className="column is-half">
              <div className="media">
                <div className="media-content">
                  <span className="icon is-large is-size-1 has-text-warning">
                    <i className="fas fa-map" />
                  </span>
                  <p className="title is-4 is-spaced">Travel Arrangements</p>
                  <p className="subtitle is-6">
                    A small river named Duden flows by their place and supplies
                    it with the necessary
                  </p>
                </div>
              </div>
            </div>
            <div className="column is-half">
              <div className="media">
                <div className="media-content">
                  <span className="icon is-large is-size-1 has-text-warning">
                    <i className="fas fa-route" />
                  </span>
                  <p className="title is-4 is-spaced">Private Guide</p>
                  <p className="subtitle is-6">
                    A small river named Duden flows by their place and supplies
                    it with the necessary
                  </p>
                </div>
              </div>
            </div>
            <div className="column is-half">
              <div className="media">
                <div className="media-content">
                  <span className="icon is-large is-size-1 has-text-warning">
                    <i className="fas fa-user-shield" />
                  </span>
                  <p className="title is-4 is-spaced">Location Manager</p>
                  <p className="subtitle is-6">
                    A small river named Duden flows by their place and supplies
                    it with the necessary
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="column is-half">
          <div className="">
            <div className="container">
              <h1 className="title is-1 is-spaced is-uppercase">
                It s time to start your adventure
              </h1>
              <p className="subtitle">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>
              <p className="subtitle">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>
              <a className="button is-warning is-rounded">Search Destination</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

export default Destination;
