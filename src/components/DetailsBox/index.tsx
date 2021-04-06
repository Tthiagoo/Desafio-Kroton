/* eslint-disable react/button-has-type */
import React from 'react';

import { Container, Content, Info } from './styles';
import imgDetail from '../../assets/imgDetail.svg';

const DetailsBox: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={imgDetail} alt="whats" />
        <Info>
          <h3>Titulo</h3>
          <p>
            Content... Content... Content............... cotentrs.. Content...
            Content
          </p>
        </Info>
      </Content>

      <button>Botão para detalhes....</button>
    </Container>
  );
};
export default DetailsBox;
