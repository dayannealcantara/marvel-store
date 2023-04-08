import Header from 'components/Header';
import {
  Wrapper,
  ContainerFinished,
  WrapperFinished,
  Title,
  Description,
  StartShopping
} from 'styles/finishedOrder.styles';

import { Check2Circle } from '@styled-icons/bootstrap/Check2Circle';

import { Container } from 'styles/home.styles';

const FinishedOrder = () => {
  return (
    <Container>
      <Header cartActive={false} />
      <Wrapper>
        <ContainerFinished>
          <Check2Circle width={300} />
          <WrapperFinished>
            <Title>Pedido Relizado com Sucesso.</Title>
            <Description>Obrigado pela comrpa!</Description>
            <StartShopping href="/">Realizar nova compra</StartShopping>
          </WrapperFinished>
        </ContainerFinished>
      </Wrapper>
    </Container>
  );
};

export default FinishedOrder;
