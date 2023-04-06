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
  thumbnail: {
    path: string;
    extension: string;
  };
}

export interface ICreator {
  fullName: string;
  image: string;
}

export interface IComicSelected {
  id?: string;
  title: string;
  description?: string;
  pageCount?: number;
  image: string;
  creators?: ICreator[];
}
