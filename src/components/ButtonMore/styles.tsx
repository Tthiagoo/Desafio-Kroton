/* eslint-disable prettier/prettier */
import styled from 'styled-components';
// import px from '../../utils/responsive';

export const ButtonMore = styled.button`
  display: none;
  @media (min-width: 1024px) {
    display: flex;
    width: 30%;
    color: #ffad01;
    margin-top: 70px;
    padding: 20px;

    border-radius: 5px;
    align-items: center;
    justify-content: center;
    border: 1px solid #ffad01;
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 20px;
    transition: background-color 0.5s;
    :hover {
      color: white;
      background-color: #ffad01;
    }
  }
`;
