import { formatPrice } from 'utils/format';
import { IComic } from '../../types/comics.interfaces';
import {
  ContainerOpenModal,
  ContainerOpen,
  Title,
  ListComics,
  Price
} from './style';
import { BottonAddCart } from 'components/BottonAddCart';

interface IComicsCard {
  onClick: () => void;
  totalCart: number;
  comic: IComic;
  addComic: (comic: IComic) => void;
}

export const ComicsCard = ({
  onClick,
  totalCart,
  comic,
  addComic
}: IComicsCard) => {
  return (
    <ListComics>
      <ContainerOpenModal>
        <ContainerOpen onClick={onClick}>
          <img
            src={`${comic.thumbnail.path}/portrait_incredible.${comic.thumbnail.extension}`}
            alt={comic.title}
          />
        </ContainerOpen>
      </ContainerOpenModal>
      <Title>{comic.title}</Title>
      <Price>{formatPrice(comic.prices[0].price)}</Price>

      <BottonAddCart onClick={() => addComic(comic)} totalCart={totalCart} />
    </ListComics>
  );
};
