/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable spaced-comment */
//import LogoSearch from '../../assets/search.svg';
import React from 'react';
import search from '../../assets/search.svg';
import { Container, Content, Box, Card } from './styles';

const Questions: React.FC = () => {
  return (
    <Container>
      <Content>
        <h1>Titulo </h1>

        <Box>
          <Card>
            <label>Pergunta 1 ?</label>
            <input type="text" placeholder="Digite a resposta" />
          </Card>

          <Card>
            <label>Pergunta 2 ?</label>
            <input type="text" placeholder="Digite a resposta" />
          </Card>
          <Card>
            <label>Pergunta 3 ?</label>
            <select name="select" placeholder="Selecione">
              <option value="Resposta1">Resposta 1</option>
            </select>
          </Card>

          <button>
            <img src={search} alt="Search" id="search" />
          </button>
        </Box>
      </Content>
    </Container>
  );
};
export default Questions;
