import { useEffect, useMemo, useState } from 'react';
import { Modal } from 'components/Modal';
import md5 from 'md5';
import api from 'services/api';
import { ProductList } from './style';
import { useCart } from 'context/useCart';
import { ComicsCard } from 'components/ComicsCard';

const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;
const privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY;
const time = Number(new Date());
const hash = md5(time + privateKey + publicKey);

export const ComicsList = () => {
  const [showModal, setShowModal] = useState(false);
  const [comics, setComics] = useState<any[]>([]);
  const { addComic, cart } = useCart();

  const cartMap = useMemo(() => {
    return cart.reduce((acc, item) => {
      acc[item.id] = item.amount;
      return acc;
    }, {});
  }, [cart]);

  const getComics = async () => {
    try {
      const response = await api.get(
        `comics?ts=${time}&apikey=${publicKey}&hash=${hash}&offset=0`
      );

      setComics(response.data.data.results);
    } catch {
      console.log('error');
    }
  };

  useEffect(() => {
    getComics();
  }, []);

  return (
    <ProductList>
      {comics.map((comic) => (
        <ComicsCard
          key={comic.id}
          setShowModal={setShowModal}
          totalCart={cartMap[comic.id] || 0}
          comic={comic}
          addComic={addComic}
        />
      ))}
      {showModal && <Modal onClose={() => setShowModal(false)} />}
    </ProductList>
  );
};
