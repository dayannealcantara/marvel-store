import type { NextPage } from 'next';

import * as S from '../styles';
import { Header } from 'components/Header/Header';

const Check: NextPage = () => {
  return (
    <>
      <S.WrapperHeader>
        <Header />
        <S.WrapperInput>
          <h2>itens adicionados</h2>
        </S.WrapperInput>
      </S.WrapperHeader>
      <S.WrapperList></S.WrapperList>
    </>
  );
};

export default Check;
