import * as S from './style';

interface TokenItemProps {
  name: string;
  id: string;
}

function TokenItem({ name, id }: TokenItemProps) {
  return (
    <S.TokenItemWrapper>
      <S.TokenImg />
      <S.TokenInfo>
        <span>{name}</span>
        <span>{id}</span>
      </S.TokenInfo>
    </S.TokenItemWrapper>
  );
}

export default TokenItem;
