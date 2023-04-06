import { CartFill } from 'styled-icons/bootstrap';

import { Botton, Wrapper, Title } from './style';

interface IBotton {
  onClick: () => void;
  totalCart: number;
}

export const BottonAddCart = ({ onClick, totalCart }: IBotton) => {
  return (
    <Botton type="button" onClick={onClick}>
      <Wrapper>
        <CartFill size={16} color="#FFF" />
        {totalCart}
      </Wrapper>
      <Title>ADICIONAR AO CARRINHO</Title>
    </Botton>
  );
};
