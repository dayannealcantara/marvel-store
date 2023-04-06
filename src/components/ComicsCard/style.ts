import styled from 'styled-components';

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
