import { IComic } from './comics.interfaces';

export interface IProduct extends IComic {
  subTotal: number;
  subTotalFormatted: string;
  priceFormatted: string;
}
