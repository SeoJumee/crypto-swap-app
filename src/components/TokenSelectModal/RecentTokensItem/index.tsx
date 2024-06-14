import { useRecoilValue, useSetRecoilState } from 'recoil';
import * as S from './style';
import { IsModal, SelectedTokens } from '../../../atoms';

interface RecentTokensItemProps {
  name: string;
  id: string;
  onSelect: (token: { name: string; id: string }) => void;
}

function RecentTokensItem({ name, id, onSelect }: RecentTokensItemProps) {
  const selectedTokens = useRecoilValue(SelectedTokens);
  const setIsModal = useSetRecoilState(IsModal);
  const isSelected =
    id === selectedTokens.token1.id || id === selectedTokens.token2.id;

  function handleSelect() {
    if (!isSelected) {
      onSelect({ name, id });
      setIsModal(false);
    }
  }

  return (
    <S.RecentTokenWrapper onClick={handleSelect} isSelected={isSelected}>
      <S.TokenImg />
      <S.TokenName>{name}</S.TokenName>
    </S.RecentTokenWrapper>
  );
}

export default RecentTokensItem;
