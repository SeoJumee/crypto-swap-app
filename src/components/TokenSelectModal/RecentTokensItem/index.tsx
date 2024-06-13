import * as S from './style';

interface RecentTokensItemProps {
  name: string;
}

function RecentTokensItem({ name }: RecentTokensItemProps) {
  return (
    <S.RecentTokenWrapper>
      <S.TokenImg />
      <S.TokenName>{name}</S.TokenName>
    </S.RecentTokenWrapper>
  );
}

export default RecentTokensItem;
