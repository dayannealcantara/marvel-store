import styled from 'styled-components';

export const ContainerTotals = styled.div`
  width: 100%;
  margin: 2rem 0 6rem 0;
`;

export const CartTotals = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    text-align: center;
  }
  span {
    strong {
    }
  }
  table {
    width: 80%;
  }
  tbody {
    text-align: left;
  }
  th {
    width: 20%;
  }
`;

export const CartContainer = styled.div`
  width: 70%;
  padding: 1rem 3rem;
  background-color: #67748142;
  border-radius: 10px;
  margin-top: 1rem;
  h2 {
    margin-bottom: 1rem;
  }
`;

export const Delivery = styled.form`
  width: 100%;
  min-height: 35vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  select {
    width: 30%;
  }
  button {
    width: 20%;
    align-self: center;
  }
`;

export const Address = styled.h1`
  text-align: center;
  padding: 2rem 0;
`;
