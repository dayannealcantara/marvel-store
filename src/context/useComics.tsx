import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react';
import { IComic } from 'types/comics.interfaces';

import { getComics } from 'services/getComics';

interface ComicsProviderProps {
  children: ReactNode;
}

interface ComicsContext {
  comics: IComic[];
  hasMore: boolean;
  PlusComics: () => void;
}

const ComicsContext = createContext<ComicsContext>({} as ComicsContext);

export function ComicsProvider({ children }: ComicsProviderProps): JSX.Element {
  const [comics, setComics] = useState<IComic[]>([]);
  const [comicsSize, setComicsSize] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const getComicsRequest = async () => {
    try {
      const data = await getComics();
      console.log('data', data);
      setComics(data.results);
      setComicsSize(data.total);
    } catch {
      // console.log('error');
    }
  };

  const PlusComics = async () => {
    if (comics.length >= comicsSize) {
      setHasMore(false);
      return;
    }

    const data = await getComics(15);
    setComics((state) => [...state, ...data.results]);
  };

  useEffect(() => {
    getComicsRequest();
  }, []);
  return (
    <ComicsContext.Provider value={{ comics, hasMore, PlusComics }}>
      {children}
    </ComicsContext.Provider>
  );
}

export function useComics(): ComicsContext {
  const context = useContext(ComicsContext);

  return context;
}
