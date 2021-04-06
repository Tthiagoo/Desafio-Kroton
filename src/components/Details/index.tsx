import React from 'react';
import DetailsBox from '../DetailsBox';

import { Container } from './styles';

const Details: React.FC = () => {
  return (
    <Container>
      <DetailsBox />
      <DetailsBox />
      <DetailsBox />
      <DetailsBox />
      <DetailsBox />
      <DetailsBox />
    </Container>
  );
};
export default Details;
