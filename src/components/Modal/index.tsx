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
  ContainerDescription,
  TitleComic,
  WrapperCreators,
  CreatorName,
  ImageComic,
  WrapperBotton,
  InfoPage
} from './styles';
import { ICreator } from 'types/comics.interfaces';
import { BottonAddCart } from 'components/BottonAddCart';

interface ModalProps {
  title: string;
  image: string;
  description?: string;
  pageCount: number;
  creators: ICreator[];
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
          <ContainerInfo>
            <ImageComic src={image} alt={title} width={300} height={200} />
            <InfoPage>
              <TitleInfo>Total Paginas: {pageCount}</TitleInfo>
            </InfoPage>
            <WrapperBotton>
              <BottonAddCart onClick={onClick} totalCart={totalCart} />
            </WrapperBotton>
          </ContainerInfo>
          <ContainerDescription>
            <ContainerInfo>
              <Info>
                <TitleInfo>Descrição</TitleInfo>
                <Description>{description || 'No description'}</Description>
              </Info>

              <Info>
                <TitleInfo>Criadores</TitleInfo>
                {creators?.map((creator, index) => (
                  <WrapperCreators key={index}>
                    <CreatorName>{creator.fullName}</CreatorName>
                  </WrapperCreators>
                ))}
              </Info>
            </ContainerInfo>
          </ContainerDescription>
        </Details>
      </ContainerModal>
    </ModalLayout>
  );
};
