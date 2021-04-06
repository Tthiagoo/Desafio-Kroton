import React from 'react';
import Details from '../Details';
import Header from '../Header';
import InfoClasses from '../InfoClasses';
import Questions from '../Questions';
import ButtonClasses from '../ButtonMore';
import { Container } from './styles';

const Layout: React.FC = () => {
  return (
    <Container>
      <Header />
      <Details />
      <Questions />
      <InfoClasses />
      <ButtonClasses />
    </Container>
  );
};
export default Layout;
