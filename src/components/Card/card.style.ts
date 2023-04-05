import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 400px;
  border-radius: 10px;
  box-shadow: 1px 3px 12px 0 rgba(0, 0, 0, 0.3);
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
`;

export const Lista = styled.div`
  display: flex;
  justify-content: center;
`;
export const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
`;
export const Price = styled.div`
  display: flex;
  justify-content: center;
  font-size: 20px;
`;
export const Visualisation = styled.button`
  background-color: transparent;
  border: none;
`;
