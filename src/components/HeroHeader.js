import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 2rem;
  margin-bottom: 4rem;
  text-align: center;
  .text-one {
    color: #eae4e4 !important;
    @media only screen and (max-width: 768px) {
       {
        color: #080808 !important;
      }
    }
  }
  .is-medium {
    margin-top: -4rem;
  }
`;

class HomeHero extends React.Component {
  render() {
    const { header } = this.props;
    return (
      <section className="section">
        <Container className="container">
          <div className="columns">
            <div className="column">
              <section className="hero is-medium">
                <div className="hero-body">
                  <div className="container ">
                    <h1 className="subtitle is-size-5 is-size-5-mobile text-one">
                      {header.subtitle}
                    </h1>
                    <h2 className="title is-1 is-size-4-mobile text-one">
                      {header.title}
                    </h2>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </Container>
      </section>
    );
  }
}

export default HomeHero;
