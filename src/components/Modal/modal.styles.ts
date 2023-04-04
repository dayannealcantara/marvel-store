import styled from 'styled-components';

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
export const ContainerAdd = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 80px;
`;
export const AddItem = styled.button`
  font-size: 20px;
  cursor: pointer;
  border: 2px solid #fb1;
  border-radius: 0.4rem;
  background: #fea;
  color: #764701;
  min-width: 8rem;
  padding: 0.8rem 1.2rem;
  box-sizing: border-box;
  transition: 0.1s;
  &:hover,
  &:focus {
    outline: none;
    background: #fb1;
  }
  &:disabled {
    opacity: 0.5;
    cursor: wait;
  }
`;

export const ContainerModal = styled.div`
  background: white;
  color: black;
  width: 60%;
  height: 100%;
  border-radius: 20px 0 0 20px;
`;
export const ModalLayout = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Teste = styled.div`
  overflow: hidden;
  padding: 20px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
`;
