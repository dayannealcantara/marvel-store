import * as S from './styles';

import { RemoveShoppingCart } from '@styled-icons/material/RemoveShoppingCart';

const EmptyCart = () => {
  return (
    <S.Container>
      <RemoveShoppingCart width={300} />

      <S.Wrapper>
        <S.Title>Oops...</S.Title>
        <S.Description>Seu carrinho esta vazio!</S.Description>
        <S.StartShopping href="/">Voltar as Compras</S.StartShopping>
      </S.Wrapper>
    </S.Container>
  );
};

export default EmptyCart;
