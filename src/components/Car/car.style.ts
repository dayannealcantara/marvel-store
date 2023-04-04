import styled from 'styled-components';
import * as Popover from '@radix-ui/react-popover';

export const Container = styled(Popover.Content)`
  display: flex;
  flex-direction: column;
  height: 80vh;
  width: 500px;
  border-radius: 13px;
  box-shadow: 1px 3px 12px 0 rgba(0, 0, 0, 0.3);
  background-color: white;
  padding: 30px;
`;

export const Close = styled(Popover.Close)`
  border: none;
  width: 1rem;
  height: 1rem;
  background: transparent;
  cursor: pointer;
  color: black;
`;
export const Arrow = styled(Popover.Arrow)`
  width: 18px;
  height: 10px;
  fill: black;
  margin-bottom: 0.5rem;
`;
