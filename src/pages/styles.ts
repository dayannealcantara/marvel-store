import styled from 'styled-components';

export const WrapperHeader = styled.header`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const WrapperInput = styled.div`
  display: flex;
  justify-content: center;
`;

export const WrapperList = styled.div`
  display: grid;
  justify-content: center;
  width: 100%;
  grid-template-columns: repeat(4, 20%);
  gap: 25px;
`;
export const Table = styled.table`
  width: 100%;
  min-height: 26vh;
  border-collapse: collapse;
  overflow: hidden;
`;
export const Thead = styled.thead`
  width: 100%;
  position: sticky;
  z-index: 100;
  border-bottom: 2px solid red;
  tr {
    font-size: 1.5rem;
  }
`;
export const ThProduct = styled.th`
  text-align: left;
  width: 30vw;
  padding-bottom: 1rem;
`;
export const Th = styled.th`
  width: 12vw;
  text-align: left;
  padding-bottom: 1rem;
`;

export const TbodyTR = styled.tr`
  position: sticky;
  z-index: 100;
  border-bottom: 3px solid #767070;
`;

export const TdDelete = styled.span`
  text-align: center;
  cursor: pointer;
  font-size: 1.5rem;
  margin: 0 1rem;
  padding: 0.2rem 0.5rem;
  border-radius: 0.3rem;
  &:hover {
    background: #76707059;
  }
`;
export const TdImage = styled.td`
  width: 8%;
  height: auto;
  padding: 0.8rem 0;
`;

export const ButtonTd = styled.button`
  width: 2.5em;
  text-align: center;
  background: transparent;
  cursor: pointer;
  margin: 0.5rem;
  padding: 0.2rem 0.5rem;
  border-radius: 0.3rem;
  &:hover {
    background: #76707059;
  }
`;
