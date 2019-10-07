import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  background-color: #27262c;
  .footer {
    background-color: #27262c;
  }
  li {
    line-height: 1.55;
  }
`;

const Footer = () => (
  <Section className="section">
    <div className="container">
      <footer className="footer">
        <div className="columns">
          <div className="column">
            <h4 className="title is-4">Vacation</h4>
            <ul className="has-text-weight-semibold">
              <li>
                <a href="">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </a>
              </li>
            </ul>
          </div>
          <div className="column">
            <h4 className="title is-4">Infromation</h4>
            <ul className="has-text-weight-semibold">
              <li>
                <a href="">Online Enquiry</a>
              </li>
              <li>
                <a href="">General Enquiries</a>
              </li>
              <li>
                <a href="">Booking Conditions</a>
              </li>
              <li>
                <a href="">Privacy and Policy</a>
              </li>
              <li>
                <a href="">Refund Policyy</a>
              </li>
            </ul>
          </div>
          <div className="column">
            <h4 className="title is-4">Experience</h4>
            <ul className="has-text-weight-semibold">
              <li>
                <a href="">Adventure</a>
              </li>
              <li>
                <a href="">Hotel and Restaurant</a>
              </li>
              <li>
                <a href="">Beach</a>
              </li>
              <li>
                <a href="">Nature</a>
              </li>
              <li>
                <a href="">Camping</a>
              </li>
            </ul>
          </div>
          <div className="column">
            <h4 className="title is-4">Have a Questions?</h4>
            <ul className="has-text-weight-semibold">
              <li>
                <a href="">
                  203 Fake St. Mountain View, San Francisco, California, USA
                </a>
              </li>
              <li>
                <a href="">+2 392 3929 210</a>
              </li>
              <li>
                <a href="">info@yourdomain.com</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <p className="has-text-weight-semibold">
              <strong>Bulma</strong> by{' '}
              <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is
              licensed
              <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
              The website content is licensed .
            </p>
          </div>
          <div className="column has-text-right is-size-3	">
            <span className="icon is-large">
              <i className="fab fa-facebook-f" />
            </span>
            <span className="icon icon is-large">
              <i className="fab fa-instagram" />
            </span>
            <span className="icon is-large">
              <i className="fab fa-twitter" />
            </span>
            <span className="icon is-large">
              <i className="fab fa-linkedin-in" />
            </span>
          </div>
        </div>
      </footer>
    </div>
  </Section>
);

export default Footer;
