import Image from 'next/image';
import * as S from './modal.styles';

type ModalProps = {
  onClose?: () => void;
};

export const Modal = ({ onClose }: ModalProps) => {
  return (
    <S.ModalLayout>
      <S.ContainerModal>
        <S.ContainerClose>
          <h1>3-D MAN</h1>
          <S.CloseModal onClick={onClose}>
            <Image src="/close.png" alt="3d Marvel" width={20} height={20} />
          </S.CloseModal>
        </S.ContainerClose>
        <S.ModalContent>
          <S.Details>
            <Image src="/3dMan.jpg" alt="3d Marvel" width={400} height={300} />
            <div>
              <div>
                <h3>ID</h3>
                <p>1011334</p>
              </div>
              <div>
                <h3>DESCRIÇÃO</h3>
                <p>No description</p>
              </div>
              <div>
                <h3>DATA DE MODIFICAÇÃO</h3>
                <p>2014-04-29T14:18:17-0400</p>
              </div>
              <div>
                <h3>ÚLTIMAS HQS</h3>
                <p>Avengers: The Initiative (2007 - 2010) </p>
                <p>Deadpool (1997 - 2002)</p>Deadpool (1997 - 2002)
                <p> Marvel Premiere (1972 - 1981)</p>
              </div>
            </div>
          </S.Details>
          <S.ContainerAdd>
            <S.AddItem>Adicionar ao carinho</S.AddItem>
          </S.ContainerAdd>
        </S.ModalContent>
      </S.ContainerModal>
    </S.ModalLayout>
  );
};
