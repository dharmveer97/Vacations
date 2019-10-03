import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  .card {
    border-radius: 0.7rem;
  }
  .top-left {
    position: absolute;
    top: 10px;
    left: 20px;
  }
  img {
    border-radius: 1rem;
  }
`;

const Cards = props => (
  <Wrapper>
    <figure className="image is-3by4">
      <a href="">
        <img src={props.img} alt="all-places" />
      </a>
      <div className="top-left">
        <p className="has-text-light is-size-4">{props.title}</p>
      </div>
    </figure>
  </Wrapper>
);
export default Cards;
