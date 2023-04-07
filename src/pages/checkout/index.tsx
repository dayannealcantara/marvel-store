import Header from 'components/Header';
import * as S from './styles';
import { useCart } from 'context/useCart';
import { formatPrice } from 'utils/format';
import { useRouter } from 'next/router';

import FormAddress, { FormData } from 'components/FormAddress';
import MapContainer from 'components/Map';
import { useState } from 'react';
import { Container } from 'pages/styles';

const Checkout = () => {
  const { cart, setCart } = useCart();
  const router = useRouter();
  const [address, setAddress] = useState<FormData>();

  const cartFormatted = cart.map((product) => {
    const subTotal = product.amount * product.prices[0]?.price;
    return {
      ...product,
      subTotal,
      subTotalFormatted: formatPrice(subTotal),
      priceFormatted: formatPrice(product.prices[0]?.price)
    };
  });

  const total = formatPrice(
    cartFormatted.reduce((sumTotal, product) => {
      sumTotal += product.subTotal;
      return sumTotal;
    }, 0)
  );

  const handleClickCheckout = () => {
    router.push('/finished-order');
    setCart([]);
  };

  return (
    <Container>
      <Header totalCard={cart.length} cartActive={false} />
      <S.Wrapper>
        <S.Title>Finalziar Pedido</S.Title>

        <S.WrapperData>
          <S.WrapperDatails>
            <div>
              <S.SubTitle> Resumo do pedido </S.SubTitle>

              {cartFormatted.map((product) => (
                <S.WrapperProducts key={product.id}>
                  <S.Image
                    src={`${product.thumbnail.path}/portrait_incredible.${product.thumbnail.extension}`}
                    alt={product.title}
                  />
                  <S.WrapperInfo>
                    <div>
                      <S.Name>{product.title}</S.Name>
                      <S.Name>Quatidade: {product.amount}</S.Name>
                    </div>
                    <S.Price>{product.priceFormatted}</S.Price>
                  </S.WrapperInfo>
                </S.WrapperProducts>
              ))}
            </div>
            <S.Total>
              <span>TOTAL</span>
              <strong>{total}</strong>
            </S.Total>
          </S.WrapperDatails>
          <S.WrapperDatails>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                height: '100% '
              }}
            >
              <S.SubTitle> Endereço de entrega</S.SubTitle>
              {!address ? (
                <FormAddress setAddress={setAddress} />
              ) : (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <div style={{ paddingBottom: '30px' }}>
                    {address.road}, {address.number}, <br />
                    Bairro: {address.district},
                    <br /> {address.city} - {address.state}
                  </div>
                  <MapContainer
                    address={`${address.road}, ${address.number}, ${address.district}, ${address.city}, ${address.state}`}
                  />
                </div>
              )}
              {address && (
                <S.Button onClick={handleClickCheckout}>
                  Finalizar Pedido
                </S.Button>
              )}
            </div>
          </S.WrapperDatails>
        </S.WrapperData>
      </S.Wrapper>
    </Container>
  );
};

export default Checkout;
