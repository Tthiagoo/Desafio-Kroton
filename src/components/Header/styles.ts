/* eslint-disable prettier/prettier */
import styled from 'styled-components';
import px from "../../utils/responsive";


export const Box = styled.div`
  display: flex;
  width: ${px(320, 320)};
  min-height: ${px(70, 320)};
  flex-direction: row;
  background-color:white;
  height: 100%;
  align-items:center;
  justify-content:flex-end;
  padding:10px;

  @media (min-width: 768px) {
    width: ${px(768, 768)};
    min-height: ${px(100, 768)};
    height: 100%;
  }

  @media (min-width: 1024px) {
    width: 100%;
    min-height: ${px(80)};
    height: 100%;
    padding:20px;
  }
  > img {
    margin-right: 5px;
  }
  >p{
    color:green;
  }
`;


