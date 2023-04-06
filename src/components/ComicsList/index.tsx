import { useState } from 'react';
import { Modal } from 'components/Modal';
import { ProductList, WrapperScroll } from './style';
import { useCart } from 'context/useCart';
import { ComicsCard } from 'components/ComicsCard';
import { IComic, IComicSelected, ICreator } from 'types/comics.interfaces';

import { getCreatorsComic } from 'services/getCreatorsComic';
import { ComicsCardShimmer } from 'components/ComicsCardShimmer';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useComics } from 'context/useComics';

export const ComicsList = () => {
  const [showModal, setShowModal] = useState(false);
  const { comics, PlusComics, hasMore } = useComics();
  const [comicState, setComicState] = useState<IComicSelected>();
  const { addComic, cartMap } = useCart();

  const openModalDatails = async (comic: IComic) => {
    try {
      const response = await getCreatorsComic(comic.id);

      const comicData = {
        id: comic.id,
        title: comic.title,
        pageCount: comic.pageCount,
        description: comic.description,
        image: `${comic.thumbnail.path}/portrait_incredible.${comic.thumbnail.extension}`,
        creators: response.map((creator: ICreator) => {
          return {
            fullName: creator.fullName
          };
        })
      };

      setComicState(comicData);
      setShowModal(true);
    } catch (error) {
      // console.log('error', error);
    }
  };

  return (
    <>
      <WrapperScroll id="scrollableDiv">
        <InfiniteScroll
          dataLength={comics.length}
          next={PlusComics}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
        >
          <ProductList>
            {comics.length === 0 ? (
              <ComicsCardShimmer size={6} />
            ) : (
              comics?.map((comic, index) => (
                <ComicsCard
                  key={comic.id + index}
                  onClick={() => openModalDatails(comic)}
                  totalCart={cartMap[comic.id] || 0}
                  comic={comic}
                  addComic={addComic}
                />
              ))
            )}
          </ProductList>
        </InfiniteScroll>
      </WrapperScroll>
      {showModal && (
        <Modal
          title={comicState?.title || ''}
          creators={comicState?.creators}
          description={comicState?.description}
          image={comicState?.image || ''}
          onClick={() => addComic(comicState)}
          pageCount={comicState?.pageCount}
          totalCart={cartMap[comicState?.id] || 0}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};
