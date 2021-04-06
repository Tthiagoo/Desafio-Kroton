import React from 'react';
import { Box } from './styles';
import whats from '../../assets/whats.svg';

const Header: React.FC = () => {
  return (
    <Box>
      <img src={whats} alt="whats" />
      <p>Fale Conosco</p>
    </Box>
  );
};
export default Header;
