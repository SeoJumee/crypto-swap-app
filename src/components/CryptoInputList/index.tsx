import { useRecoilValue } from 'recoil';
import { SelectedTokens } from '../../atoms';
import CryptoInput from './CryptoInput';

function CryptoInputList() {
  const selectedTokens = useRecoilValue(SelectedTokens);

  return (
    <>
      <CryptoInput inputId={1} selectedToken={selectedTokens.token1.name} />
      <CryptoInput inputId={2} selectedToken={selectedTokens.token2.name} />
    </>
  );
}

export default CryptoInputList;
