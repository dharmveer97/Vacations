import React from 'react';
import styled from 'styled-components';
import FeedBack from './FeedBack';

const Wrapper = styled.div`
  background-image: url(https://colorlib.com/preview/theme/vacation/images/bg_3.jpg);
`;

const FeedBackData = () => (
  <Wrapper>
    <section className="section">
      <div className="container">
        <h1 className="title is-1 has-text-centered">Tourist Feedback</h1>
        <div className="columns">
          <div className="column is-one-third">
            <FeedBack
              text="Far far away, behind the word mountains, far from the countries Vokalia and word mountains, far from the countrie, there live the blind texts."
              subtext="wddw"
              img="https://colorlib.com/preview/theme/vacation/images/person_2.jpg"
              Name="Roger Scott"
              Position="Marketing Manager"
            />
          </div>
          <div className="column is-one-third">
            <FeedBack
              text="Far far away, behind the word mountains, far from the countries Vokalia and word mountains, far from the countrie, there live the blind texts."
              subtext="wddw"
              img="https://colorlib.com/preview/theme/vacation/images/person_1.jpg"
              Name="Roger Scott"
              Position="Marketing Manager"
            />
          </div>
          <div className="column is-one-third">
            <FeedBack
              text="Far far away, behind the word mountains, far from the countries Vokalia and word mountains, far from the countrie, there live the blind texts."
              subtext="wddw"
              img="https://colorlib.com/preview/theme/vacation/images/person_2.jpg"
              Name="Roger Scott"
              Position="Marketing Manager"
            />
          </div>
        </div>
      </div>
    </section>
  </Wrapper>
);
export default FeedBackData;
