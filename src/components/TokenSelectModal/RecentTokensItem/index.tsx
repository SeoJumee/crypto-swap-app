import { useRecoilValue, useSetRecoilState } from 'recoil';
import * as S from './style';
import { IsModal, SelectedToken1, SelectedToken2 } from '../../../atoms';

interface RecentTokensItemProps {
  name: string;
  id: string;
  onSelect: (token: { name: string; id: string }) => void;
}

function RecentTokensItem({ name, id, onSelect }: RecentTokensItemProps) {
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
    <S.RecentTokenWrapper onClick={handleSelect} isSelected={isSelected}>
      <S.TokenImg />
      <S.TokenName>{name}</S.TokenName>
    </S.RecentTokenWrapper>
  );
}

export default RecentTokensItem;
