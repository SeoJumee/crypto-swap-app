import { useRecoilValue, useSetRecoilState } from 'recoil';
import { TokenType } from '../types';
import {
  InputValue1,
  InputValue2,
  IsModal,
  SelectedToken1,
  SelectedToken2,
} from '../atoms';

interface HandleTokenSelectProps {
  id: string;
  name: string;
  onSelect: (token: TokenType) => void;
}

function useSelectToken() {
  const selectedToken1 = useRecoilValue(SelectedToken1);
  const selectedToken2 = useRecoilValue(SelectedToken2);
  const setIsModal = useSetRecoilState(IsModal);
  const setInputValue1 = useSetRecoilState(InputValue1);
  const setInputValue2 = useSetRecoilState(InputValue2);

  const handleIsSelected = ({ id }: { id: string }) => {
    const isSelected = id === selectedToken1?.id || id === selectedToken2?.id;
    return isSelected;
  };

  const handleTokenSelect = ({
    id,
    name,
    onSelect,
  }: HandleTokenSelectProps) => {
    let isSelected = handleIsSelected({ id });
    if (!isSelected) {
      onSelect({ name, id });
      setIsModal(false);
      setInputValue1('');
      setInputValue2('');
    }
  };

  return { handleIsSelected, handleTokenSelect };
}

export default useSelectToken;
