interface IPrice {
  price: number;
}

export interface IComic {
  id: string;
  title: string;
  prices: IPrice[];
  amount: number;
  description?: string;
  pageCount: number;
  creators: ICreator[];
  image: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

export interface ICreator {
  fullName: string;
  image?: string;
}
