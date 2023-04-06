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
  TitleComic,
  WrapperCreators,
  CreatorName,
  ImageComic,
  WrapperBotton
} from './styles';
import { IComicSelected } from 'types/comics.interfaces';
import { BottonAddCart } from 'components/BottonAddCart';

interface ModalProps extends IComicSelected {
  onClose?: () => void;
  onClick: () => void;
  totalCart: number;
}

export const Modal = ({
  onClose,
  title,
  image,
  description,
  pageCount,
  creators,
  onClick,
  totalCart
}: ModalProps) => {
  return (
    <ModalLayout>
      <ContainerModal>
        <ContainerHeader>
          <TitleComic>{title}</TitleComic>
          <Close onClick={onClose}>
            <Image src="/close.png" alt="Close" width={20} height={20} />
          </Close>
        </ContainerHeader>
        <Details>
          <div
            style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}
          >
            <ImageComic src={image} alt={title} width={300} height={200} />
            <WrapperBotton>
              <BottonAddCart onClick={onClick} totalCart={totalCart} />
            </WrapperBotton>
          </div>
          <ContainerInfo>
            <div
              style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}
            >
              <Info>
                <TitleInfo>DESCRIÇÃO</TitleInfo>
                <Description>{description || 'No description'}</Description>
              </Info>
              <Info>
                <TitleInfo>Total Paginas</TitleInfo>
                <Description>{pageCount}</Description>
              </Info>
              <Info>
                <TitleInfo>Criadores</TitleInfo>
                {creators?.map((creator, index) => (
                  <WrapperCreators key={index}>
                    <CreatorName>{creator.fullName}</CreatorName>
                  </WrapperCreators>
                ))}
              </Info>
            </div>
          </ContainerInfo>
        </Details>
      </ContainerModal>
    </ModalLayout>
  );
};
