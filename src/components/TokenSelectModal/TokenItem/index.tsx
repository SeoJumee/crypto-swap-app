import { useRecoilValue, useSetRecoilState } from 'recoil';
import * as S from './style';
import { IsModal, SelectedTokens } from '../../../atoms';

interface TokenItemProps {
  name: string;
  id: string;
  onSelect: (token: { name: string; id: string }) => void;
}

function TokenItem({ name, id, onSelect }: TokenItemProps) {
  const setIsModal = useSetRecoilState(IsModal);
  const selectedTokens = useRecoilValue(SelectedTokens);
  const isSelected =
    id === selectedTokens.token1.id || id === selectedTokens.token2.id;

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
