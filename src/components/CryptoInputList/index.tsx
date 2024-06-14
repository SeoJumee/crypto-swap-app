import { useRecoilValue } from 'recoil';
import { SelectedToken1, SelectedToken2 } from '../../atoms';
import CryptoInput from './CryptoInput';

function CryptoInputList() {
  const selectedToken1 = useRecoilValue(SelectedToken1);
  const selectedToken2 = useRecoilValue(SelectedToken2);

  return (
    <>
      <CryptoInput inputId={1} selectedToken={selectedToken1.name} />
      <CryptoInput inputId={2} selectedToken={selectedToken2.name} />
    </>
  );
}

export default CryptoInputList;
