import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const ListComics = styled.li`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 4px;
  padding: 20px;
  img {
    align-self: center;
    max-width: 250px;
  }
`;

export const ContainerOpenModal = styled.div`
  display: flex;
  justify-content: center;
`;

export const ContainerOpen = styled.button`
  background: transparent;
`;

export const Title = styled.strong`
  font-size: 16px;
  line-height: 20px;
  color: #333;
  margin-top: 5px;
`;

export const Price = styled.span`
  font-size: 21px;
  font-weight: bold;
  margin: 5px 0 20px;
`;

export const AddItem = styled.button`
  background: #7159c1;
  color: #fff;
  border: 0;
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

export const AddComic = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  background: rgba(0, 0, 0, 0.1);
  svg {
    margin-right: 5px;
  }
`;

export const AddToCar = styled.span`
  flex: 1;
  text-align: center;
  font-weight: bold;
`;
