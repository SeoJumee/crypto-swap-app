import { useSetRecoilState } from 'recoil';
import * as S from './style';
import { IsModal, SelectInputId } from '../../../atoms';

interface TokenSelectButtonProps {
  inputId: number;
  selectedToken: string;
}

function TokenSelectButton({ inputId, selectedToken }: TokenSelectButtonProps) {
  const setIsModal = useSetRecoilState(IsModal);
  const setSelectInputId = useSetRecoilState(SelectInputId);

  function handleOpenModal() {
    setIsModal(true);
    setSelectInputId(inputId);
  }

  return (
    <S.TokenSelectContainer type="button" onClick={handleOpenModal}>
      <S.TokenImg />
      <S.TokenName>{selectedToken}</S.TokenName>
      <span>🔽</span>
    </S.TokenSelectContainer>
  );
}

export default TokenSelectButton;
