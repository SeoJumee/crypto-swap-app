import { atom } from 'recoil';

export const IsModal = atom<boolean>({ key: 'IsModal', default: false });

export const SelectInputId = atom<number>({
  key: 'SelectInputId',
  default: 0,
});

export const SelectedTokens = atom<{
  token1: { name: string; id: string };
  token2: { name: string; id: string };
}>({
  key: 'SelectedTokens',
  default: {
    token1: { name: 'DAI', id: 'dai' },
    token2: { name: 'USDC', id: 'usd-coin' },
  },
});
