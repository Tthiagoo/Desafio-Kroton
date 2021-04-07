/* eslint-disable prettier/prettier */
import styled from 'styled-components';
import px from '../../utils/responsive';

export const Container = styled.div`
  display: flex;
  width: ${px(320, 320)};
  max-width: 100%;
  height: ${px(80, 320)};
  overflow-x: scroll;
  flex-direction: row;
  height: 100%;
  padding: 10px;
 
  margin-top: 20px;
  align-items: center;

  @media (min-width: 768px) {
    width: ${px(768, 768)};
    min-height: ${px(100, 768)};
    height: 100%;
  }

  @media (min-width: 1024px) {
    width: 100%;
    min-height: ${px(180)};
    height: 100%;
    padding: 10px;
    overflow-x: hidden;
  }
`;
