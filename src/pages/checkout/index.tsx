import Header from 'components/Header';
import {
  Wrapper,
  Title,
  Image,
  WrapperDatails,
  WrapperProducts,
  WrapperData,
  WrapperInfo,
  Name,
  Price,
  Total,
  Button,
  SubTitle
} from 'styles/checkout.styles';
import { useCart } from 'context/useCart';
import { formatPrice } from 'utils/format';
import { useRouter } from 'next/router';

import FormAddress, { FormData } from 'components/FormAddress';
import MapContainer from 'components/Map';
import { useState } from 'react';
import { Container } from 'styles/home.styles';

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
      <Wrapper>
        <Title>Finalizar Pedido</Title>

        <WrapperData>
          <WrapperDatails>
            <div>
              <SubTitle> Resumo do pedido </SubTitle>
              {cartFormatted.map((product) => (
                <WrapperProducts key={product.id}>
                  <Image
                    src={`${product.thumbnail.path}/portrait_incredible.${product.thumbnail.extension}`}
                    alt={product.title}
                  />
                  <WrapperInfo>
                    <div>
                      <Name>{product.title}</Name>
                      <Name>Quatidade: {product.amount}</Name>
                    </div>
                    <Price>{product.priceFormatted}</Price>
                  </WrapperInfo>
                </WrapperProducts>
              ))}
            </div>
            <Total>
              <span>TOTAL</span>
              <strong>{total}</strong>
            </Total>
          </WrapperDatails>
          <WrapperDatails>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                height: '100% '
              }}
            >
              <SubTitle> Endereço de entrega</SubTitle>
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
                <Button onClick={handleClickCheckout}>Finalizar Pedido</Button>
              )}
            </div>
          </WrapperDatails>
        </WrapperData>
      </Wrapper>
    </Container>
  );
};

export default Checkout;
