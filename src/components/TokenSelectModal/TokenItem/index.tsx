import { useRecoilValue, useSetRecoilState } from 'recoil';
import * as S from './style';
import { IsModal, SelectedToken1, SelectedToken2 } from '../../../atoms';

interface TokenItemProps {
  name: string;
  id: string;
  onSelect: (token: { name: string; id: string }) => void;
}

function TokenItem({ name, id, onSelect }: TokenItemProps) {
  const setIsModal = useSetRecoilState(IsModal);
  const selectedToken1 = useRecoilValue(SelectedToken1);
  const selectedToken2 = useRecoilValue(SelectedToken2);
  const isSelected = id === selectedToken1.id || id === selectedToken2.id;

  function handleSelect() {
    if (!isSelected) {
      onSelect({ name, id });
      setIsModal(false);
    }
  }

  return (
    <S.TokenItemWrapper onClick={handleSelect} isSelected={isSelected}>
      <S.TokenImg />
      <S.TokenInfo>
        <span>{name}</span>
        <span>{id}</span>
      </S.TokenInfo>
    </S.TokenItemWrapper>
  );
}

export default TokenItem;
