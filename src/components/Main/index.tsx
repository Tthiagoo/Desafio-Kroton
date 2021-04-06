import React from 'react';
import Details from '../Details';
import Header from '../Header';
import InfoClasses from '../InfoClasses';
import Questions from '../Questions';
import { Container } from './styles';

const Layout: React.FC = () => {
  return (
    <Container>
      <Header />
      <Details />
      <Questions />
      <InfoClasses />
    </Container>
  );
};
export default Layout;
