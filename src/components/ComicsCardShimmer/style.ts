import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
  background: #fff;
  justify-content: space-between;
  border-radius: 4px;
  padding: 20px;
  gap: 10px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Botton = styled.div`
  background: #7159c1;
  height: 40px;
  color: #fff;
  border-radius: 4px;
  justify-content: center;
  display: flex;
  align-items: center;

  &:hover {
    background: ${darken(0.06, '#7159c1')};
  }

  &:disabled {
    background: ${lighten(0.25, '#7159c1')};
    cursor: not-allowed;
  }
`;
