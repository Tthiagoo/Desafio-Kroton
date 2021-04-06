import styled from 'styled-components';
import px from '../../utils/responsive';

export const Content = styled.div`
  @media (min-width: 1024px) {
    width: 98%;
  }
`;

export const Titulo = styled.h2`
  font-size: 1.8rem;
  display: none;
  @media (min-width: 768px) {
    display: flex;
    margin-top: 10px;
  }
`;
export const Container = styled.div`
  display: flex;
  width: ${px(320, 320)};
  max-width: 100%;
  height: ${px(80, 320)};
  overflow-x: scroll;
  flex-direction: row;
  height: 100%;
  margin-top: 10px;
  align-items: center;

  @media (min-width: 768px) {
    width: ${px(768, 768)};
    min-height: ${px(100, 768)};
    height: 100%;
  }

  @media (min-width: 1024px) {
    width: 100%;
    min-height: ${px(180)};
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    overflow: hidden;
  }
`;
