import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import Header from '../components/Header';
import HeroHeader from '../components/HeroHeader';
import Input from '../components/Input';
import Destination from '../components/Destination';
import Taur from '../components/Taur';
import Places from '../components/Places';
import CardContent from '../components/CardContent';
import BeachContent from '../components/BeachContent';
import FeedBackData from '../components/FeedBackData';
import Footer from '../components/Footer';

const TopContainer = styled.div`
  background-image: url(${props => props.image});
  background-size: 100%;
  background-repeat: no-repeat;
  @media screen and (max-width: 600px) {
    background-size: 100% 70%;
  }
  }
`;

export const indexQuery = graphql`
  query Header {
    contentfulHeader {
      title
      subtitle
      backgroundImage {
        file {
          url
        }
      }
    }
  }
`;

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title="Home" description="Welcome to GatsbyJs v1" />
        <StaticQuery
          query={indexQuery}
          render={data => {
            const { contentfulHeader: header } = data;
            return (
              <React.Fragment header={header}>
                <TopContainer image={header.backgroundImage.file.url}>
                  <Header />
                  <HeroHeader
                    header={header}
                    title="HERO"
                    description="Welcome to GatsbyJs v1"
                  />
                </TopContainer>
                <Input />
                <Destination />
                <Taur />
                <Places />
                <CardContent />
                <BeachContent />
                <FeedBackData />
                <Footer />
              </React.Fragment>
            );
          }}
        />
      </Layout>
    );
  }
}
