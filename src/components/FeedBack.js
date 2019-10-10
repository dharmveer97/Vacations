import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  .allltext {
    font-family: 'Poppins', Arial, sans-serif;
    background: #fff;
    font-size: 16px;
    line-height: 1.8;
    font-weight: 400;
    color: #999999;
  }
`;

const FeedBack = props => {
  const { text, Name, Position, img } = props;
  return (
    <Wrapper>
      <div className="card">
        <section className="section">
          <p className="card-header-title allltext">{text}</p>

          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img className="is-rounded" src={img} alt="namesss" />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">{Name}</p>
              <p className="subtitle is-6">{Position} 5</p>
            </div>
          </div>
        </section>
      </div>
    </Wrapper>
  );
};

export default FeedBack;
