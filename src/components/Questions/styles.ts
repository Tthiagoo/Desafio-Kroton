import styled from 'styled-components';
import px from '../../utils/responsive';

export const Container = styled.div`
  //width: 1300px;
  // min-width: ${px(100, 320)};

  margin: 0 auto;
  padding: 0 0rem;

  @media (min-width: 1024px) {
    width: 100%;
    min-height: ${px(80)};
    height: 100%;
    padding: 19px;
  }
`;

export const Content = styled.div`
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.23);
  border-radius: 8px;
  background: white;

  padding: 1.5rem;

  h1 {
    color: #005ea4;
    font-weight: 500;
    font-size: 1.7rem;
    margin-bottom: 18px;
  }
`;

export const Box = styled.div`
  display: flex;
  align-items: flex-end;

  button {
    width: 50px;
    height: 50px;
    color: white;
    border-radius: 5px;
    margin-left: 1.1rem;

    border: 0;
    background: #0067f6;
  }
  @media (max-width: 810px) {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    button {
      width: 100%;
      margin: 0;
      margin-top: 1.1rem;
    }
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  label {
    font-weight: 500;
    font-size: 0.87rem;
    color: #4f4f4f;
  }
  input {
    width: 390px;
    height: 52px;
    border: 1px solid #8d97a0;
    box-sizing: border-box;
    margin-top: 0.5rem;
    padding-left: 17px;
    background: white;
    border-radius: 4px;
    margin-right: 1.2rem;
    ::placeholder {
      padding: 1.1rem;
      color: black;
    }
  }
  select {
    background: white;
    border: 1px solid #8d97a0;
    box-sizing: border-box;
    border-radius: 4px;

    width: 400px;
    height: 50px;
    margin-top: 0.5rem;
    padding: 1rem;
    color: black;
    ::placeholder {
      padding: 1rem;
      color: black;
    }
  }
  @media (max-width: 810px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 0.5rem;
    input {
      width: 100%;
    }
    select {
      width: 264px;
    }
  }
`;
