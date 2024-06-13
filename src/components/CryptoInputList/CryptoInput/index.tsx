import TokenSelectButton from '../TokenSelectButton';
import * as S from './style';

function CryptoInput() {
  return (
    <S.CryptoInputWrapper>
      <S.CryptoInput
        type="number"
        placeholder="0.0"
        onWheel={(event) => (event.target as HTMLElement).blur()}
      />
      <TokenSelectButton />
    </S.CryptoInputWrapper>
  );
}

export default CryptoInput;
