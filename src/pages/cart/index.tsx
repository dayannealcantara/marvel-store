import Header from 'components/Header';
import {
  Container,
  Wrapper,
  Footer,
  Checkout,
  ButtonCart,
  ProductTable,
  ImageComics,
  Input,
  PriceComics,
  Total,
  Title,
  TotalComics
} from './styles';
import { Delete } from '@styled-icons/material/Delete';
import { RemoveCircleOutline } from '@styled-icons/material/RemoveCircleOutline';
import { AddCircleOutline } from '@styled-icons/material/AddCircleOutline';
import { useCart } from 'context/useCart';
import { formatPrice } from 'utils/format';
import EmptyCart from 'components/EmptyCart';
import { IProduct } from 'types/products.interfaces';

const Cart = () => {
  const { cart, updateProductAmount, removeProduct } = useCart();

  const cartFormatted = cart.map((product) => {
    const subTotal = product?.amount * product.prices[0]?.price;
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

  function handleProductIncrement(product: IProduct) {
    updateProductAmount({ productId: product.id, amount: product.amount + 1 });
  }

  function handleProductDecrement(product: IProduct) {
    updateProductAmount({ productId: product.id, amount: product.amount - 1 });
  }

  function handleRemoveProduct(productId: number) {
    removeProduct(productId);
  }

  return (
    <Container>
      <Header totalCard={cart.length} cartActive={false} />
      <Wrapper>
        {cart.length === 0 ? (
          <EmptyCart />
        ) : (
          <>
            <ProductTable>
              <thead>
                <tr>
                  <th aria-label="product image" />
                  <th>PRODUTO</th>
                  <th>QTD</th>
                  <th>SUBTOTAL</th>
                  <th aria-label="delete icon" />
                </tr>
              </thead>
              <tbody>
                {cartFormatted.map((product) => (
                  <tr key={product.id} data-testid="product">
                    <td>
                      <ImageComics
                        src={`${product.thumbnail.path}/portrait_incredible.${product.thumbnail.extension}`}
                        alt={product.title}
                      />
                    </td>
                    <td>
                      <Title>{product.title}</Title>
                      <PriceComics>{product.priceFormatted}</PriceComics>
                    </td>
                    <td>
                      <div>
                        <ButtonCart
                          type="button"
                          disabled={product.amount <= 1}
                          onClick={() => handleProductDecrement(product)}
                        >
                          <RemoveCircleOutline size={20} />
                        </ButtonCart>
                        <Input type="text" readOnly value={product.amount} />
                        <ButtonCart
                          type="button"
                          onClick={() => handleProductIncrement(product)}
                        >
                          <AddCircleOutline size={20} />
                        </ButtonCart>
                      </div>
                    </td>
                    <td>
                      <PriceComics>{product.subTotalFormatted}</PriceComics>
                    </td>
                    <td>
                      <ButtonCart
                        type="button"
                        data-testid="remove-product"
                        onClick={() => handleRemoveProduct(product.id)}
                      >
                        <Delete size={20} />
                      </ButtonCart>
                    </td>
                  </tr>
                ))}
              </tbody>
            </ProductTable>
            <Footer>
              <Checkout>Finalizar pedido</Checkout>
              <Total>
                <Title>TOTAL</Title>
                <TotalComics>{total}</TotalComics>
              </Total>
            </Footer>
          </>
        )}
      </Wrapper>
    </Container>
  );
};

export default Cart;
