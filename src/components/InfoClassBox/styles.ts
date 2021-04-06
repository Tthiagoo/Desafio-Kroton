/* eslint-disable prettier/prettier */
import styled from 'styled-components';
import px from '../../utils/responsive';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: ${px(260, 320)};
  min-height: ${px(190, 320)};
  flex-direction: column;
  height: 100%;

  margin-right: 10px;
  margin-left: 10px;
  border-radius: 8px;
  align-items: start;
  justify-content: center;
  background-color: white;
  > img {
    width: 100%;
    margin-bottom: 15px;
    align-self:start
  }
  > p {
    margin-left: 10px;
  }
  > h3 {
    margin-left: 10px;
  }

  @media (min-width: 768px) {
    min-width: ${px(308, 768)};
    min-height: ${px(100, 768)};
    height: 100%;
  }

  @media (min-width: 1024px) {
    justify-content:start;
    min-width: ${px(300)};
    min-height: ${px(330)};
  }

  > button {
    width: 80%;
    color: blue;
    margin-top: 10px;
    padding: 15px;
    border-radius: 5px;
    background-color: white;
    border: 1px solid blue;
    align-self: center;
    font-weight: bold;
    @media (min-width: 1024px) {
      align-self: center;
      width: 80%;
    }
  }
`;


