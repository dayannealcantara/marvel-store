import type { NextPage } from 'next';
import { useEffect } from 'react';
import md5 from 'md5';
import cardMarvel from '../mockups/cardMarvel.json';

import { Header } from 'components/Header/Header';
import { Input } from 'components/Input/Input';
import api from 'services/api';
import * as S from './styles';
import { Card } from 'components/Card/Card';
const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;
const privateKey = 'b93a1d42bf083c90b758ab6f00f39879631ba229';
const time = Number(new Date());
const hash = md5(time + privateKey + publicKey);

const Home: NextPage = () => {
  console.log('hasf', hash);
  const getComics = async () => {
    try {
      const response = await api.get(
        `comics?ts=${time}&apikey=${publicKey}&hash=${hash}&offset=0`
      );
      console.log(response);
    } catch {
      console.log('error');
    }
  };

  useEffect(() => {
    getComics();
  }, []);

  return (
    <>
      <S.WrapperHeader>
        <Header />
        <S.WrapperInput>
          <Input />
        </S.WrapperInput>
      </S.WrapperHeader>
      <S.WrapperList>
        {cardMarvel.map((card) => (
          <Card key={card.name} name={card.name} imageUrl={card.imageUrl} />
        ))}
      </S.WrapperList>
    </>
  );
};

export default Home;
