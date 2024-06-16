import { useRecoilValue, useSetRecoilState } from 'recoil';
import * as S from './style';
import {
  InputValue1,
  InputValue2,
  IsModal,
  SelectedToken1,
  SelectedToken2,
} from '../../../atoms';
import { TokenType } from '../../../types';

interface TokenItemProps {
  name: string;
  id: string;
  onSelect: (token: TokenType) => void;
}

function TokenItem({ name, id, onSelect }: TokenItemProps) {
  const setIsModal = useSetRecoilState(IsModal);
  const selectedToken1 = useRecoilValue(SelectedToken1);
  const selectedToken2 = useRecoilValue(SelectedToken2);
  const setInputValue1 = useSetRecoilState(InputValue1);
  const setInputValue2 = useSetRecoilState(InputValue2);
  const isSelected = id === selectedToken1.id || id === selectedToken2.id;

  function handleSelect() {
    if (!isSelected) {
      onSelect({ name, id });
      setIsModal(false);
      setInputValue1('');
      setInputValue2('');
    }
  }

  return (
    <S.TokenItemWrapper onClick={handleSelect} isSelected={isSelected}>
      <S.TokenImg />
      <S.TokenInfo>
        <span>{name}</span>
        <span>{id}</span>
      </S.TokenInfo>
    </S.TokenItemWrapper>
  );
}

export default TokenItem;
