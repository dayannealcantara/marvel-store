import styled from 'styled-components';
import Link from 'next/link';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 30px 0;

  a {
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

export const ShoppingCart = styled.div`
  text-align: right;
  margin-right: 10px;
`;

export const TitleShoppingCart = styled.strong`
  display: block;
  color: #fff;
`;

export const TotalItems = styled.span`
  font-size: 12px;
  color: #999;
`;
