import { Container, Wrapper, Botton } from './style';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface IComicsCard {
  size?: number;
}

export const ComicsCardShimmer = ({ size }: IComicsCard) => {
  const howMany = Array.from(Array(size).keys());
  return (
    <>
      {howMany.map((item) => (
        <Wrapper key={item}>
          <Container>
            <Skeleton height={320} width={250} />
          </Container>
          <div>
            <Skeleton width={220} />
            <Skeleton width={150} />
          </div>
          <Botton>
            <Skeleton width={220} />
          </Botton>
        </Wrapper>
      ))}
    </>
  );
};
