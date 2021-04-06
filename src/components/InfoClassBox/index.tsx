/* eslint-disable react/button-has-type */
import React from 'react';

import { Container } from './styles';
import imgDetail from '../../assets/student.png';

const ClassBox: React.FC = () => {
  return (
    <Container>
      <img src={imgDetail} alt="whats" />
      <p>Texto...........</p>
      <h3>Titulo</h3>
      <button>Acessar</button>
    </Container>
  );
};
export default ClassBox;
