import { useRecoilState, useRecoilValue } from 'recoil';
import {
  InputValue1,
  InputValue2,
  SelectedToken1,
  SelectedToken2,
} from '../../atoms';
import CryptoInput from './CryptoInput';
import { useSwapTokens } from '../../hooks';

function CryptoInputList() {
  const selectedToken1 = useRecoilValue(SelectedToken1);
  const selectedToken2 = useRecoilValue(SelectedToken2);
  const [inputValue1, setInputValue1] = useRecoilState(InputValue1);
  const [inputValue2, setInputValue2] = useRecoilState(InputValue2);
  const {
    swapFromToken1ToToken2,
    swapFromToken2ToToken1,
    getDollarValueFromToken1,
    getDollarValueFromToken2,
  } = useSwapTokens();

  const handleInputChange1 = (value: string) => {
    const inputValue = Number(value);
    setInputValue1(value);
    if (inputValue === 0 || value.length === 0) {
      setInputValue2('');
    } else {
      const swappedValue = swapFromToken1ToToken2(inputValue);
      setInputValue2(swappedValue.toString());
    }
  };

  const handleInputChange2 = (value: string) => {
    const inputValue = Number(value);
    setInputValue2(value);
    if (inputValue === 0 || value.length === 0) {
      setInputValue1('');
    } else {
      const swappedValue = swapFromToken2ToToken1(inputValue);
      setInputValue1(swappedValue.toString());
    }
  };

  return (
    <>
      <CryptoInput
        inputId={1}
        selectedToken={selectedToken1.name}
        inputValue={inputValue1}
        setInputValue={handleInputChange1}
        dollarValue={getDollarValueFromToken1}
      />
      <CryptoInput
        inputId={2}
        selectedToken={selectedToken2.name}
        inputValue={inputValue2}
        setInputValue={handleInputChange2}
        dollarValue={getDollarValueFromToken2}
      />
    </>
  );
}

export default CryptoInputList;
