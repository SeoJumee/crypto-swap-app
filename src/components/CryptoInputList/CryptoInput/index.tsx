import TokenSelectButton from '../TokenSelectButton';
import * as S from './style';

interface CryptoInputProps {
  inputId: number;
  selectedToken: string;
  inputValue: string;
  setInputValue: (value: string) => void;
  dollarValue: (value: number) => number;
}

function CryptoInput({
  inputId,
  selectedToken,
  inputValue,
  setInputValue,
  dollarValue,
}: CryptoInputProps) {
  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    if (/^\d*\.?\d{0,10}$/.test(value)) {
      setInputValue(value);
    }
  }

  return (
    <S.CryptoInputWrapper>
      <S.ValueWrapper>
        <S.CryptoInput
          type="number"
          placeholder="0.0"
          onWheel={(event) => (event.target as HTMLElement).blur()}
          onChange={handleInputChange}
          value={inputValue}
        />
        <span>${dollarValue(Number(inputValue))}</span>
      </S.ValueWrapper>
      <TokenSelectButton inputId={inputId} selectedToken={selectedToken} />
    </S.CryptoInputWrapper>
  );
}

export default CryptoInput;
