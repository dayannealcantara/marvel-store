import Image from 'next/image';
import * as S from './card.style';
import { useState } from 'react';
import { Modal } from '../Modal/Modal';

type CardProps = {
  name: string;
  imageUrl: string;
};

export const Card = ({ name, imageUrl }: CardProps) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <S.Container>
      <S.Lista>
        <S.Card>
          <Image src={imageUrl} alt="imagem" width={250} height={250} />
          <S.Title>{name}</S.Title>
          <S.Price>R$45.00</S.Price>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <S.Visualisation onClick={() => setShowModal(true)}>
              <Image src="/mais.png" alt="imagem" width={40} height={40} />
            </S.Visualisation>
          </div>
        </S.Card>
      </S.Lista>
      {showModal && <Modal onClose={() => setShowModal(false)} />}
    </S.Container>
  );
};
