import { CartFill } from '@styled-icons/bootstrap/CartFill';
import * as S from './header.style';

import Image from 'next/image';

export const Header = () => {
  return (
    <S.ContainerHeader>
      <Image
        src="/logo-marvel.jpg"
        alt="Nome Marvel"
        width={200}
        height={100}
      />
      <CartFill />
    </S.ContainerHeader>
  );
};
