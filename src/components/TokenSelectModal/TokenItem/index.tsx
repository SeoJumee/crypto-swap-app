import * as S from './style';
import { TokenType } from '../../../types';
import { useSelectToken } from '../../../hooks';

interface TokenItemProps {
  name: string;
  id: string;
  onSelect: (token: TokenType) => void;
}

function TokenItem({ name, id, onSelect }: TokenItemProps) {
  const { handleIsSelected, handleTokenSelect } = useSelectToken();

  return (
    <S.TokenItemWrapper
      onClick={() => handleTokenSelect({ id, name, onSelect })}
      isSelected={handleIsSelected({ id })}
    >
      <S.TokenImg />
      <S.TokenInfo>
        <span>{name}</span>
        <span>{id}</span>
      </S.TokenInfo>
    </S.TokenItemWrapper>
  );
}

export default TokenItem;
