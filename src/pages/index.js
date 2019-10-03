import React from 'react';
import styled from 'styled-components';

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

const TopContainer = styled.div`
  background-image: url(/images/main.jpg);
  background-size: 100%;
  background-repeat: no-repeat;
  @media screen and (max-width: 600px) {
    background-size: 100% 100%;
  }
  }
`;
export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title="Home" description="Welcome to GatsbyJs v1" />
        <TopContainer>
          <Header />
          <HeroHeader title="HERO" description="Welcome to GatsbyJs v1" />
        </TopContainer>
        <Input />
        <Destination />
        <Taur />
        <Places />
        <CardContent />
        <BeachContent />
      </Layout>
    );
  }
}
