import React from 'react';
import * as Popover from '@radix-ui/react-popover';

import Image from 'next/image';
import * as S from './car.style';

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

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ display: 'flex', gap: 10 }}>
            <Image src="/3dMan.jpg" alt="3d Marvel" width={100} height={100} />
            <h3>3-D MAN</h3>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <Image src="/3dMan.jpg" alt="3d Marvel" width={100} height={100} />
            <h3>3-D MAN</h3>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <Image src="/3dMan.jpg" alt="3d Marvel" width={100} height={100} />
            <h3>3-D MAN</h3>
          </div>
        </div>

        <Popover.Arrow className="PopoverArrow" />
      </S.Container>
    </Popover.Portal>
  </Popover.Root>
);
