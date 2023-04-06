import Header from 'components/Header';
import * as S from './styles';
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
    const subTotal = product.amount * product.prices[0].price;
    return {
      ...product,
      subTotal,
      subTotalFormatted: formatPrice(subTotal),
      priceFormatted: formatPrice(product.prices[0].price)
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
    <S.Container>
      <Header totalCard={cart.length} cartActive={false} />
      <S.Wrapper>
        {cart.length === 0 ? (
          <EmptyCart />
        ) : (
          <>
            <S.ProductTable>
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
                      <img
                        src={`${product.thumbnail.path}/portrait_incredible.${product.thumbnail.extension}`}
                        alt={product.title}
                      />
                    </td>
                    <td>
                      <strong>{product.title}</strong>
                      <span>{product.priceFormatted}</span>
                    </td>
                    <td>
                      <div>
                        <button
                          type="button"
                          disabled={product.amount <= 1}
                          onClick={() => handleProductDecrement(product)}
                        >
                          <RemoveCircleOutline size={20} />
                        </button>
                        <input type="text" readOnly value={product.amount} />
                        <button
                          type="button"
                          onClick={() => handleProductIncrement(product)}
                        >
                          <AddCircleOutline size={20} />
                        </button>
                      </div>
                    </td>
                    <td>
                      <strong>{product.subTotalFormatted}</strong>
                    </td>
                    <td>
                      <button
                        type="button"
                        data-testid="remove-product"
                        onClick={() => handleRemoveProduct(product.id)}
                      >
                        <Delete size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </S.ProductTable>
            <footer>
              <button type="button">Finalizar pedido</button>

              <S.Total>
                <span>TOTAL</span>
                <strong>{total}</strong>
              </S.Total>
            </footer>
          </>
        )}
      </S.Wrapper>
    </S.Container>
  );
};

export default Cart;
