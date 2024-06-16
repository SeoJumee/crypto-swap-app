import * as S from './style';
import { TokenType } from '../../../types';
import { useSelectToken } from '../../../hooks';

interface RecentTokensItemProps {
  name: string;
  id: string;
  onSelect: (token: TokenType) => void;
}

function RecentTokensItem({ name, id, onSelect }: RecentTokensItemProps) {
  const { handleTokenSelect, handleIsSelected } = useSelectToken();

  return (
    <S.RecentTokenWrapper
      onClick={() => handleTokenSelect({ id, name, onSelect })}
      isSelected={handleIsSelected({ id })}
    >
      <S.TokenImg />
      <S.TokenName>{name}</S.TokenName>
    </S.RecentTokenWrapper>
  );
}

export default RecentTokensItem;
