import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  .box {
    margin: -3rem 7rem 3rem;
    position: relative;
    @media only screen and (max-width: 600px) {
      margin: 0;
      margin-top: 0;
    }
  }
  .label {
    font-size: 0.9rem;
  }
`;

const Input = () => (
  <Wrapper>
    <div className="box">
      <div className="columns">
        <div className="column">
          <div className="field">
            <label className="label">Destination</label>
            <div className="control">
              <input className="input" type="text" placeholder="Text input" />
            </div>
          </div>
        </div>

        <div className="column">
          <div className="field">
            <label className="label">Check-in date</label>
            <div className="control">
              <input className="input" type="text" placeholder="Text input" />
            </div>
          </div>
        </div>

        <div className="column">
          <div className="field">
            <label className="label">Check-out date</label>
            <div className="control">
              <input className="input" type="text" placeholder="Text input" />
            </div>
          </div>
        </div>

        <div className="column">
          <div className="field">
            <label className="label">Price Limit</label>
            <span className="select">
              <select>
                <option>$5,000</option>
                <option>$10,000</option>
                <option>$50,000</option>
                <option>$100,000</option>
                <option>$200,000</option>
                <option>$300,000</option>
                <option>$400,000</option>
              </select>
            </span>
          </div>
        </div>
        <div className="column">
          <div className="control">
            <a className="button is-large is-rounded is-primary">
              <span>Search</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </Wrapper>
);

export default Input;
