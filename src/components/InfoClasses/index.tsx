/* eslint-disable react/button-has-type */
import React from 'react';

import ClassBox from '../InfoClassBox';
import { Container, Titulo, Content } from './styles';

const InfoClasses: React.FC = () => {
  return (
    <Content>
      <Titulo>Titulo</Titulo>
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
    </Content>
  );
};
export default InfoClasses;
