import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Wrapper = styled.div`
  padding: 30px;
  background: #fff;

  width: 100%;
`;

export const Title = styled.h1``;

export const Image = styled.img`
  width: 80px;
  height: 120px;
`;

export const WrapperDatails = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  justify-content: space-between;
  width: 100%;
  gap: 40px;
`;
export const WrapperProducts = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  padding: 20px 0;
  width: 300px;
  border-bottom: 1px solid rgb(204, 204, 204);
`;
export const WrapperData = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 40px;
`;

export const WrapperInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px;
`;
export const Name = styled.p`
  font-size: 14px;
  padding-bottom: 10px;
`;
export const Price = styled.p`
  font-size: 14px;
  color: #7159c1;
  font-weight: bold;
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: #999;
    font-weight: bold;
  }

  strong {
    font-size: 28px;
    margin-left: 5px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 70%;
  padding-top: 15px;
`;

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;

  input {
    height: 30px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 0 10px;
  }

  select {
    height: 30px;
    background-color: transparent;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 0 10px;
  }

  p {
    color: red;
    font-size: 12px;
  }
`;

export const Button = styled.button`
  background: #7159c1;
  color: #fff;
  border: 0;
  width: 200px;
  text-decoration: none;

  border-radius: 4px;
  padding: 12px 20px;
  font-weight: bold;
  transition: background 0.2s;
  &:hover {
    background: ${darken(0.06, '#7159c1')};
  }

  &:disabled {
    background: ${lighten(0.25, '#7159c1')};
    cursor: not-allowed;
  }
`;

export const SubTitle = styled.h3``;
