import styled from 'styled-components';

export const ModalLayout = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.05);
`;
export const ContainerModal = styled.div`
  background: #fff;
  color: #000;
  width: 50%;
  height: 60%;
  border-radius: 20px;
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
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const ContainerInfo = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const TitleInfo = styled.h2``;
export const Description = styled.p``;
export const TitleComic = styled.h1``;
