import { useState } from 'react';
import TokenSelectButton from '../TokenSelectButton';
import * as S from './style';

interface CryptoInputProps {
  inputId: number;
  selectedToken: string;
}

function CryptoInput({ inputId, selectedToken }: CryptoInputProps) {
  const [inputValue, setInputValue] = useState('');

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    if (/^\d*\.?\d{0,10}$/.test(value)) {
      setInputValue(value);
    }
  }

  return (
    <S.CryptoInputWrapper>
      <S.CryptoInput
        type="number"
        placeholder="0.0"
        onWheel={(event) => (event.target as HTMLElement).blur()}
        onChange={handleInputChange}
        value={inputValue}
      />
      <TokenSelectButton inputId={inputId} selectedToken={selectedToken} />
    </S.CryptoInputWrapper>
  );
}

export default CryptoInput;
