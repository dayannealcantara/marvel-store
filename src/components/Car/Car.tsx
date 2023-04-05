import React from 'react';
import * as Popover from '@radix-ui/react-popover';

import Image from 'next/image';
import * as S from './car.style';
import Link from 'next/link';

export const Car = () => (
  <Popover.Root>
    <Popover.Trigger asChild>
      <Image src="/car.png" alt="3d Marvel" width={80} height={80} />
    </Popover.Trigger>
    <Popover.Portal>
      <S.Container>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <h2>Itens adicionados</h2>
          <S.Close>
            <Image src="/close.png" alt="3d Marvel" width={20} height={20} />
          </S.Close>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
            overflow: 'auto',
            height: '55%',
            marginTop: '10px'
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginRight: '10px'
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px'
              }}
            >
              <Image
                src="/3dMan.jpg"
                alt="3d Marvel"
                width={100}
                height={100}
              />
              <h3>3-D MAN</h3>
            </div>
            <Image src="/excluir.png" alt="3d Marvel" width={20} height={20} />
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginRight: '10px'
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px'
              }}
            >
              <Image
                src="/3dMan.jpg"
                alt="3d Marvel"
                width={100}
                height={100}
              />
              <h3>3-D MAN</h3>
            </div>
            <Image src="/excluir.png" alt="3d Marvel" width={20} height={20} />
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginRight: '10px'
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px'
              }}
            >
              <Image
                src="/3dMan.jpg"
                alt="3d Marvel"
                width={100}
                height={100}
              />
              <h3>3-D MAN</h3>
            </div>
            <Image src="/excluir.png" alt="3d Marvel" width={20} height={20} />
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginRight: '10px'
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px'
              }}
            >
              <Image
                src="/3dMan.jpg"
                alt="3d Marvel"
                width={100}
                height={100}
              />
              <h3>3-D MAN</h3>
            </div>
            <Image src="/excluir.png" alt="3d Marvel" width={20} height={20} />
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            marginTop: '10px'
          }}
        >
          <div>
            <Link href="/checkout">
              <button>Finalizar compra</button>
            </Link>
          </div>
        </div>
        <S.Arrow />
      </S.Container>
    </Popover.Portal>
  </Popover.Root>
);
