import { useState } from 'react';
import * as S from './form.style';
import { Map } from './Map';

export const Form = () => {
  const [address, setAddres] = useState();
  const [total, setTotal] = useState();

  return (
    <S.ContainerTotals>
      <S.CartTotals>
        <h2>Entrega</h2>
        <S.CartContainer>
          <S.Delivery>
            <input
              type="text"
              name={'road'}
              placeholder="Nome da rua"
              required
            />
            <input type="text" name={'num'} placeholder="Número" required />
            <input
              type="text"
              name={'district'}
              placeholder="Barirro"
              required
            />
            <input type="text" name={'city'} placeholder="Cidade" required />
            <select placeholder={'Estado'} name={'state'} required>
              <option value="" disabled>
                Escolha seu estado
              </option>
              {/* {states.map((state) => {
                return (
                  <option value={state.nome} key={state.nome}>
                    {state.nome}
                  </option>
                );
              })} */}
            </select>
            <button>Enviar</button>
          </S.Delivery>
        </S.CartContainer>
        <S.Address>{address}</S.Address>
      </S.CartTotals>
      <Map />
    </S.ContainerTotals>
  );
};
