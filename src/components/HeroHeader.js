import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 2rem;
  margin-bottom: 4rem;
  text-align: center;
`;

const HeroHeader = () => (
  <section className="section">
    <Container className="container">
      <div className="columns">
        <div className="column">
          <section className="hero is-medium">
            <div className="hero-body">
              <div className="container">
                <h1 className="subtitle is-size-5">
                  Travel to the any corner of the world,
                </h1>
                <h2 className="title is-1">Make Your Tour Amazing</h2>
                <h2 className="title is-1">With Us</h2>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Container>
  </section>
);

export default HeroHeader;
