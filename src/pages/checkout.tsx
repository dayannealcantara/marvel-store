import type { NextPage } from 'next';

import { Header } from 'components/Header/Header';

import * as S from './styles';

import Image from 'next/image';
import { Form } from 'components/Form/Form';

const Checkout: NextPage = () => {
  return (
    <>
      <S.WrapperHeader>
        <Header />
        <S.WrapperInput>
          <h1>Detalhamento da compra</h1>
        </S.WrapperInput>
        <S.Table>
          <S.Thead>
            <tr>
              <th>&nbsp;</th>
              <th>&nbsp;</th>
              <S.ThProduct>Produto</S.ThProduct>
              <S.Th>Preço</S.Th>
              <th>&nbsp;</th>
            </tr>
          </S.Thead>
          <S.TbodyTR>
            <S.TdImage>
              <Image src="/3dMan.jpg" alt="3d Marvel" width={100} height={50} />
            </S.TdImage>
            <td>produto</td>
            <td>valor</td>
            <td>
              <S.TdDelete>X</S.TdDelete>
            </td>
          </S.TbodyTR>
        </S.Table>
        <Form />
      </S.WrapperHeader>
    </>
  );
};

export default Checkout;
