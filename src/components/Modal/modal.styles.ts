import styled from 'styled-components';

export const ModalLayout = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
`;
export const ContainerModal = styled.div`
  background: white;
  color: black;
  width: 60%;
  height: 100vh;
  border-radius: 20px;
`;
export const ContainerClose = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
export const CloseModal = styled.button`
  cursor: point;
  background-color: transparent;
  border: none;
  outline: none;
  width: 32px;
  height: 32px;
`;
export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Details = styled.div`
  overflow: hidden;
  padding: 20px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerAdd = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 80px;
`;
export const AddItem = styled.button`
  font-size: 20px;
  cursor: pointer;
  border: none;
  background-color: #fea;
  padding: 0.8rem 1.2rem;
  &:hover {
    background-color: #fb1;
  }
`;
