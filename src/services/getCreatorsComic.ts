import md5 from 'md5';
import api from './api';

const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;
const privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY;
const time = Number(new Date());
const hash = md5(time + privateKey + publicKey);

export const getCreatorsComic = async (comicId: string) => {
  const response = await api.get(
    `comics/${comicId}/creators?ts=${time}&apikey=${publicKey}&hash=${hash}&offset=0`
  );

  const data = response.data.data.results;

  return data;
};
