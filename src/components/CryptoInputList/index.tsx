import { useRecoilState, useRecoilValue } from 'recoil';
import {
  InputValue1,
  InputValue2,
  SelectedToken1,
  SelectedToken2,
} from '../../atoms';
import CryptoInput from './CryptoInput';

function CryptoInputList() {
  const selectedToken1 = useRecoilValue(SelectedToken1);
  const selectedToken2 = useRecoilValue(SelectedToken2);
  const [inputValue1, setInputValue1] = useRecoilState(InputValue1);
  const [inputValue2, setInputValue2] = useRecoilState(InputValue2);

  return (
    <>
      <CryptoInput
        inputId={1}
        selectedToken={selectedToken1.name}
        inputValue={inputValue1}
        setInputValue={setInputValue1}
      />
      <CryptoInput
        inputId={2}
        selectedToken={selectedToken2.name}
        inputValue={inputValue2}
        setInputValue={setInputValue2}
      />
    </>
  );
}

export default CryptoInputList;
