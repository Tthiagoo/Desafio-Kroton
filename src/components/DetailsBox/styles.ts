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
  padding: 5px;
  margin-right: 10px;
  margin-left: 10px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  background-color: white;

  @media (min-width: 768px) {
    min-width: ${px(308, 768)};
    min-height: ${px(100, 768)};
    height: 100%;
  }

  @media (min-width: 1024px) {
    width: 80%;
    min-height: ${px(230)};
    height: 100%;
    padding: 20px;
  }

  > button {
    width: 80%;
    color: white;
    margin-top: 10px;
    padding: 15px;
    border-radius: 5px;
    background-color: #0067f6;
    border: 0px;
    transition: background-color 0.2s;
    :hover {
      color: white;
      background-color: #0553bf;
    }
    @media (min-width: 1024px) {
      align-self: flex-end;
      width: 40%;
    }
  }
`;
export const Content = styled.div`
  display: flex;
  width: 90%;
  flex-direction: row;

  @media (min-width: 1024px) {
    width: 96%;
  }
`;

export const Info = styled.div`
  display: flex;
  width: 60%;
  min-height: 70%;
  margin-left: 10px;
  padding: 5px;
  flex-direction: column;
  align-items: start;
  > h3 {
    color: #005ea4;
    font-size: 2rem;
    text-align: center;
    margin-bottom: 8px;
    @media (min-width: 1024px) {
      font-size: 1.5rem;
    }
  }
  > p {
    font-size: 1rem;
  }
`;
