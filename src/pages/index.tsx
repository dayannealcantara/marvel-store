import type { NextPage } from 'next';

import styles from '../styles/page.module.css';

import cardMarvel from '../mockups/cardMarvel.json';
import { List } from '@/components/Lista';
import { Header } from '@/components/Header/Header';
import { Input } from '@/components/Input/Input';

const Home: NextPage = () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: ' 2rem 5rem'
        }}
      >
        <Header />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '30px'
          }}
        >
          <Input />
        </div>
      </div>
      <div className={styles.cardMarvel}>
        {cardMarvel.map((card) => (
          <List key={card.name} name={card.name} imageUrl={card.imageUrl} />
        ))}
      </div>
    </>
  );
};

export default Home;
