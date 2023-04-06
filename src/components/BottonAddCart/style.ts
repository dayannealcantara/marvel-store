import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Botton = styled.button`
  background: #7159c1;
  color: #fff;
  border: 0;
  width: 100%;
  border-radius: 4px;
  overflow: hidden;
  margin-top: auto;
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

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  background: rgba(0, 0, 0, 0.1);
  svg {
    margin-right: 5px;
  }
`;

export const Title = styled.span`
  flex: 1;
  text-align: center;
  font-weight: bold;
`;
