import {
  Container,
  Wrapper,
  Title,
  Description,
  StartShopping
} from './styles';

import { RemoveShoppingCart } from '@styled-icons/material/RemoveShoppingCart';

const EmptyCart = () => {
  return (
    <Container>
      <RemoveShoppingCart width={300} />

      <Wrapper>
        <Title>Oops...</Title>
        <Description>Seu carrinho esta vazio!</Description>
        <StartShopping href="/">Voltar as Compras</StartShopping>
      </Wrapper>
    </Container>
  );
};

export default EmptyCart;
