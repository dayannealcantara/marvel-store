
import { CartFill } from "@styled-icons/bootstrap/CartFill";
import { Container, Cart } from "./styles";
import Image from "next/image";


type HeaderProps = {
  totalCard: number;
}

const Header = ({totalCard}:HeaderProps): JSX.Element => {
  return (
    <Container>   
          <Image src="/logo.jpg" alt="Nome Marvel" width={200} height={100} /> 
      <Cart >
        <div>
          <strong>Carrinho</strong>
          <span data-testid="cart-size">
            {totalCard === 1 ? `${totalCard} item` : `${totalCard} itens`}
          </span>
        </div>
        <CartFill size={36} color="#FFF" />
      </Cart>
    </Container>
  );
};

export default Header;