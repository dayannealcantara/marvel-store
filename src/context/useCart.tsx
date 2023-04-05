import {
  createContext,
  ReactNode,
  useContext,
  useState,
} from "react";



interface CartProviderProps {
  children: ReactNode;
}

interface UpdateProductAmount {
  productId: number;
  amount: number;
}

interface StockAmount {
  [key: number]: number;
}

interface CartContextData {
  cart: any[];
  stock: StockAmount;
  addComic: (productId: number) => void;
  removeProduct: (productId: number) => void;
  updateProductAmount: ({
    productId,
    amount,
  }: UpdateProductAmount) => Promise<void>;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps): JSX.Element {
  const [cart, setCart] = useState<any[]>([]);



  const addComic = async (comic: any): Promise<void> => {

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

  const removeProduct = (productId: number): void => {
    try {
      const updatedCart = [...cart];
      const productIndex = updatedCart.findIndex(
        (product) => product.id === productId
      );

      if (productIndex < 0) throw Error();

      updatedCart.splice(productIndex, 1);

      setCart(updatedCart);
    } catch {
      // toast.error("Erro na remoção do produto");
    }
  };



  return (
    <CartContext.Provider
      value={{ cart, addComic, removeProduct }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextData {
  const context = useContext(CartContext);

  return context;
}
