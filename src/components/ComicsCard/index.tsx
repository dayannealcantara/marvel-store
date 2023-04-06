import * as S from './style';
import { CartFill } from 'styled-icons/bootstrap';
import { formatPrice } from 'utils/format';
import { IComic } from '../../types/comics.interfaces';
import {
  ContainerOpenModal,
  ContainerOpen,
  AddItem,
  Title,
  ListComics,
  Price,
  AddComic,
  AddToCar
} from './style';

interface IComicsCard {
  setShowModal: (modal: boolean) => void;
  totalCart: number;
  comic: IComic;
  addComic: (comic: IComic) => void;
}

export const ComicsCard = ({
  setShowModal,
  totalCart,
  comic,
  addComic
}: IComicsCard) => {
  return (
    <ListComics>
      <ContainerOpenModal>
        <ContainerOpen
          onClick={() => setShowModal(true)}
          style={{ background: 'transparent' }}
        >
          <img
            src={`${comic.thumbnail.path}/portrait_incredible.${comic.thumbnail.extension}`}
            alt={comic.title}
          />
        </ContainerOpen>
      </ContainerOpenModal>
      <Title>{comic.title}</Title>
      <Price>{formatPrice(comic.prices[0].price)}</Price>
      <AddItem type="button" onClick={() => addComic(comic)}>
        <AddComic data-testid="cart-product-quantity">
          <CartFill size={16} color="#FFF" />
          {totalCart}
        </AddComic>
        <AddToCar>ADICIONAR AO CARRINHO</AddToCar>
      </AddItem>
    </ListComics>
  );
};
