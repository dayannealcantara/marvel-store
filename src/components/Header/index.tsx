import { CartFill } from '@styled-icons/bootstrap/CartFill';
import {
  Container,
  Cart,
  ShoppingCart,
  TitleShoppingCart,
  TotalItems
} from './styles';
import Link from 'next/link';
import Image from 'next/image';

type HeaderProps = {
  totalCard: number;
  cartActive?: boolean;
};
const Header = ({ totalCard, cartActive = true }: HeaderProps): JSX.Element => {
  return (
    <Container>
      <Link href="/">
        <Image src="/logo.jpg" alt="Nome Marvel" width={200} height={100} />
      </Link>
      {cartActive && (
        <Cart href="/cart">
          <ShoppingCart>
            <TitleShoppingCart>Carrinho</TitleShoppingCart>
            <TotalItems data-testid="cart-size">
              {totalCard === 1 ? `${totalCard} item` : `${totalCard} itens`}
            </TotalItems>
          </ShoppingCart>
          <CartFill size={36} color="#FFF" />
        </Cart>
      )}
    </Container>
  );
};

export default Header;
