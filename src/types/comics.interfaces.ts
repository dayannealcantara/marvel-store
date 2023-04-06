interface IPrice {
  price: number;
}

export interface IComic {
  id: number;
  title: string;
  prices: IPrice[];
  amount: number;
  thumbnail: {
    path: string;
    extension: string;
  };
}
