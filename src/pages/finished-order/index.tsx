import Header from 'components/Header';
import * as S from './styles';

import { Check2Circle } from '@styled-icons/bootstrap/Check2Circle';

import { Container } from 'pages/styles';

const FinishedOrder = () => {
  return (
    <Container>
      <Header cartActive={false} />
      <S.Wrapper>
        <S.ContainerFinished>
          <Check2Circle width={300} />

          <S.WrapperFinished>
            <S.Title>Pedido Relizado com Sucesso.</S.Title>
            <S.Description>Obrigado pela comrpa!</S.Description>
            <S.StartShopping href="/">Realizar nova compra</S.StartShopping>
          </S.WrapperFinished>
        </S.ContainerFinished>
      </S.Wrapper>
    </Container>
  );
};

export default FinishedOrder;
