import { createContext, ReactNode, useContext, useMemo, useState } from 'react';
import { IComic } from 'types/comics.interfaces';

interface CartProviderProps {
  children: ReactNode;
}

interface UpdateProductAmount {
  productId: string;
  amount: number;
}

interface CartContextData {
  cart: IComic[];
  addComic: (comic: IComic) => void;
  removeProduct: (productId: string) => void;
  updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void;
  cartMap: Record<string, number>;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps): JSX.Element {
  const [cart, setCart] = useState<IComic[]>([]);

  const addComic = async (comic: IComic): Promise<void> => {
    const updatedCart = [...cart];

    const comicExists = updatedCart.find(
      (cartProduct) => cartProduct.id === comic.id
    );

    if (!comicExists) {
      comic.amount = 1;
      setCart([...updatedCart, comic]);
      return;
    }

    comicExists.amount++;
    setCart(updatedCart);
  };

  const removeProduct = (productId: string): void => {
    const updatedCart = [...cart];
    const productIndex = updatedCart.findIndex(
      (product) => product.id === productId
    );

    if (productIndex < 0) throw Error();

    updatedCart.splice(productIndex, 1);

    setCart(updatedCart);
  };

  const updateProductAmount = async ({
    productId,
    amount
  }: UpdateProductAmount): Promise<void> => {
    if (amount < 1) throw Error();

    const updatedCart = [...cart];
    const productExists = updatedCart.find(
      (product) => product.id === productId
    );

    if (!productExists) throw Error();

    productExists.amount = amount;

    setCart(updatedCart);
  };

  const cartMap = useMemo(() => {
    return cart.reduce((acc: any, item) => {
      acc[item.id] = item.amount;
      return acc;
    }, {});
  }, [cart]);

  return (
    <CartContext.Provider
      value={{ cart, addComic, removeProduct, updateProductAmount, cartMap }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextData {
  const context = useContext(CartContext);

  return context;
}
