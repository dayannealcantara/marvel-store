import Image from 'next/image';
import {
  ModalLayout,
  ContainerModal,
  ContainerHeader,
  Close,
  Details,
  ContainerInfo,
  Info,
  TitleInfo,
  Description,
  TitleComic
} from './modal.styles';

type ModalProps = {
  onClose?: () => void;
};

export const Modal = ({ onClose }: ModalProps) => {
  return (
    <ModalLayout>
      <ContainerModal>
        <ContainerHeader>
          <TitleComic>3-D MAN</TitleComic>
          <Close onClick={onClose}>
            <Image src="/close.png" alt="3d Marvel" width={20} height={20} />
          </Close>
        </ContainerHeader>
        <Details>
          <Image src="/logo.jpg" alt="3d Marvel" width={300} height={200} />
          <ContainerInfo>
            <Info>
              <TitleInfo>ID</TitleInfo>
              <Description>1011334</Description>
            </Info>
            <Info>
              <TitleInfo>DESCRIÇÃO</TitleInfo>
              <Description>No description</Description>
            </Info>
            <Info>
              <TitleInfo>DATA DE MODIFICAÇÃO</TitleInfo>
              <Description>2014-04-29T14:18:17-0400</Description>
            </Info>
            <Info>
              <TitleInfo>ÚLTIMAS HQS</TitleInfo>
              <Description>Avengers: The Initiative (2007 - 2010) </Description>
              <Description>Deadpool (1997 - 2002)</Description>Deadpool (1997 -
              2002)
              <Description> Marvel Premiere (1972 - 1981)</Description>
            </Info>
          </ContainerInfo>
        </Details>
      </ContainerModal>
    </ModalLayout>
  );
};
