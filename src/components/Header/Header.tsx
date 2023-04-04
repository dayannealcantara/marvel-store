import { Car } from '../Car/Car';
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

      <Car />
      {/* <Link href="/Car/car">
          
        </Link> */}
    </S.ContainerHeader>
  );
};
