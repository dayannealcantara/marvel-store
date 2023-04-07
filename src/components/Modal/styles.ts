import styled from 'styled-components';

export const ModalLayout = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  z-index: 2;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(35, 27, 34, 0.7);
`;
export const ContainerModal = styled.div`
  background: #fff;
  position: fixed;
  color: #000;
  width: 70%;
  min-height: 50%;
  border-radius: 20px;
  padding: 20px 10px;
`;
export const ContainerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
export const Close = styled.button`
  cursor: point;
  background-color: transparent;
  border: none;
  outline: none;
  width: 32px;
  height: 32px;
`;

export const Details = styled.div`
  padding: 10px 30px;
  display: flex;
  justify-content: center;
  gap: 100px;
  height: 90%;
`;
export const ContainerDescription = styled.div`
  padding: 0 20px;
  display: flex;
  width: 50%;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
`;
export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const InfoPage = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  gap: 5px;
`;
export const TitleInfo = styled.h2`
  text-transform: uppercase;
`;
export const Description = styled.p`
  line-height: 1.4rem;
  text-align: justify;
`;
export const TitleComic = styled.h1`
  text-transform: uppercase;
`;

export const WrapperCreators = styled.div``;
export const WrapperBotton = styled.div`
  width: 100%;
`;

export const CreatorName = styled.p``;

export const ImageComic = styled.img`
  width: 100%;
  max-width: 300px;
  height: 100%;
  max-height: 400px;
`;
