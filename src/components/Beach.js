import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  img {
    object-fit: cover;
  }
  .uppers {
    margin-top: -2.8rem;
  }
`;

const Beach = props => {
  const {
    img,
    title,
    subtitle,
    button,
    icontext,
    icon,
    home,
    king,
    mountain,
  } = props;

  return (
    <Wrapper>
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3 fit">
            <img src={img} alt="all-pels" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <div className="has-text-centered">
                <a className="button is-primary is-rounded uppers">{button}</a>
              </div>
              <p className="title is-6 is-size-6-mobile">{title}</p>
              <p className="subtitle is-4 is-size-6-mobile">{subtitle}</p>
              <p className="location">
                <span className="icon is-left">
                  <i className={icon} />
                </span>
                {icontext}
              </p>
            </div>
          </div>
          <div className="content">
            <span className="icon has-text-info">
              <i className={home} />
            </span>
            2
            <span className="icon has-text-success">
              <i className={king} />
            </span>
            3
            <span className="icon has-text-warning">
              <i className={mountain} />
            </span>
            Near Mountain
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Beach;
