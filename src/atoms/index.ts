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

export const InputValue1 = atom<string>({
  key: 'InputValue1',
  default: '',
});

export const InputValue2 = atom<string>({
  key: 'InputValue2',
  default: '',
});

export const TokenPrice1 = atom<number>({
  key: 'TokenPrice1',
  default: 0,
});

export const TokenPrice2 = atom<number>({
  key: 'TokenPrice2',
  default: 0,
});
