import * as S from './input.style';

import Image from 'next/image';

export const Input = () => {
  return (
    <>
      <S.Fieldset>
        <S.Legend>Buscar</S.Legend>
        <S.Buscar type="text" placeholder={'Busque seu Pokemon'} />
        <Image
          src={`/pesqui.png`}
          alt="logo de pesquisa"
          width={27}
          height={27}
        />
      </S.Fieldset>
    </>
  );
};
