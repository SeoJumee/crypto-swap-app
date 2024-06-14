import { atom } from 'recoil';

export const IsModal = atom<boolean>({ key: 'IsModal', default: false });

export const SelectInputId = atom<number>({
  key: 'SelectInputId',
  default: 0,
});

export const SelectedToken1 = atom<{
  name: string;
  id: string;
}>({
  key: 'SelectedToken1',
  default: {
    name: 'DAI',
    id: 'dai',
  },
});

export const SelectedToken2 = atom<{
  name: string;
  id: string;
}>({
  key: 'SelectedToken2',
  default: {
    name: 'USDC',
    id: 'usd-coin',
  },
});
