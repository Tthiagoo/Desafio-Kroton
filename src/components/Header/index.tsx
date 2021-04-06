import React from 'react';
import { Box } from './styles';
import whats from '../../assets/whats.svg';

const Header: React.FC = () => {
  return (
    <Box>
      <img src={whats} alt="Whatsapp" />
      <a target="_blank" href="https://wa.me/11857466374" rel="noreferrer">
        Entrar em contato
      </a>
    </Box>
  );
};
export default Header;
