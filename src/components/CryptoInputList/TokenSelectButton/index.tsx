import { useSetRecoilState } from 'recoil';
import * as S from './style';
import { IsModal } from '../../../atoms';

function TokenSelectButton() {
  const setIsModal = useSetRecoilState(IsModal);

  return (
    <S.TokenSelectContainer type="button" onClick={() => setIsModal(true)}>
      <S.TokenImg />
      <S.TokenName>ETH</S.TokenName>
      <span>🔽</span>
    </S.TokenSelectContainer>
  );
}

export default TokenSelectButton;
