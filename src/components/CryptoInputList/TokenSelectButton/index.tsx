import * as S from './style';

function TokenSelectButton() {
  return (
    <S.TokenSelectContainer>
      <S.TokenImg />
      <S.TokenName>ETH</S.TokenName>
      <span>🔽</span>
    </S.TokenSelectContainer>
  );
}

export default TokenSelectButton;
