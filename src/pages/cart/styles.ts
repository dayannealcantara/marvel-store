import styled from 'styled-components';
import { darken, lighten } from 'polished';

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
export const Footer = styled.footer`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Checkout = styled.button`
  background: #7159c1;
  color: #fff;
  border: 0;
  border-radius: 4px;
  padding: 12px 20px;
  font-weight: bold;
  text-transform: uppercase;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.06, '#7159c1')};
  }
`;

export const ButtonCart = styled.button`
  background: none;
  border: 0;
  padding: 6px;
  svg {
    color: #7159c1;
    transition: color 0.2s;
  }

  &:hover {
    svg {
      color: ${darken(0.06, '#7159c1')};
    }
  }

  &:disabled {
    svg {
      color: ${lighten(0.25, '#7159c1')};
      cursor: not-allowed;
    }
  }
`;
export const ImageComics = styled.img`
  height: 100px;
`;

export const ProductTable = styled.table`
  width: 100%;

  thead th {
    color: #999;
    text-align: left;
    padding: 12px;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;
  }

  div {
    display: flex;
    align-items: center;
  }
`;

export const InputAmount = styled.input`
  border: 1px solid #ddd;
  border-radius: 4px;
  color: #666;
  padding: 6px;
  width: 50px;
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;
`;

export const Input = styled.input`
  border: 1px solid #ddd;
  border-radius: 4px;
  color: #666;
  padding: 6px;
  width: 50px;
`;

export const PriceComics = styled.strong`
  display: block;
  margin-top: 5px;
  font-size: 18px;
  font-weight: bold;
`;

export const Title = styled.span`
  color: #999;
  font-weight: bold;
`;

export const TotalComics = styled.strong`
  font-size: 28px;
  margin-left: 5px;
`;
