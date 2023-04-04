import Image from 'next/image';
import * as S from './list.style';
import { useState } from 'react';
import { Modal } from '../Modal/Modal';

type ListCard = {
  name: string;
  imageUrl: string;
};

export const List = ({ name, imageUrl }: ListCard) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <S.Container>
      <S.Lista>
        <S.Card>
          <Image src={imageUrl} alt="imagem" width={50} height={50} />
          <p>{name}</p>
        </S.Card>
        <button onClick={() => setShowModal(true)}>Open Modal</button>
        {showModal ? <Modal onClose={() => setShowModal(false)} /> : null}
      </S.Lista>
    </S.Container>
  );
};
