/* eslint-disable react/button-has-type */
import React from 'react';

import ClassBox from '../InfoClassBox';
import { Container, Titulo } from './styles';

const InfoClasses: React.FC = () => {
  return (
    <>
      <Titulo />
      <Container>
        <ClassBox />
        <ClassBox />
        <ClassBox />
        <ClassBox />
        <ClassBox />
        <ClassBox />
        <ClassBox />
        <ClassBox />
      </Container>
    </>
  );
};
export default InfoClasses;
