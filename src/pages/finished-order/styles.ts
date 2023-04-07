import styled from 'styled-components';
import { darken, lighten } from 'polished';
import Link from 'next/link';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6rem;
  min-height: 100vh;
`;

export const Wrapper = styled.div`
  padding: 30px;
  background: #fff;
  border-radius: 4px;
  width: 100%;
`;

export const ContainerFinished = styled.section`
  min-height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 560px) {
    min-height: 400px;
  }

  svg {
    font-size: 260px;
    color: #f3f3f6;
    position: absolute;
  }
`;

export const WrapperFinished = styled.div`
  z-index: 1;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 32px;
`;
export const Description = styled.p`
  margin: 12px 0 28px;
  font-size: 16px;
`;

export const StartShopping = styled(Link)`
  background: #7159c1;
  color: #fff;
  border: 0;
  border-radius: 4px;
  padding: 12px 20px;
  font-weight: bold;
  text-transform: uppercase;
  transition: background 180ms ease-in-out;
  text-decoration: none;
  display: inline-block;

  &:hover {
    background: ${lighten(0.04, '#7159c1')};
  }

  &:active {
    background: ${darken(0.04, '#7159c1')};
  }
`;
