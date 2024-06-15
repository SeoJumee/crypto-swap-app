import * as S from './style';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { CryptoInputList, TokenSelectModal } from '../../components';
import {
  InputValue1,
  InputValue2,
  IsModal,
  SelectedToken1,
  SelectedToken2,
} from '../../atoms';

function Home() {
  const isModal = useRecoilValue(IsModal);
  const [isInputEmpty, setIsInputEmpty] = useState(false);
  const selectedToken1 = useRecoilValue(SelectedToken1);
  const selectedToken2 = useRecoilValue(SelectedToken2);
  const inputValue1 = useRecoilValue(InputValue1);
  const inputValue2 = useRecoilValue(InputValue2);

  useEffect(() => {
    if (inputValue1.length === 0 || inputValue2.length === 0) {
      setIsInputEmpty(true);
    } else {
      setIsInputEmpty(false);
    }
  }, [inputValue1, inputValue2]);

  return (
    <S.Layout>
      {isModal && <TokenSelectModal />}
      <S.ContentWrapper>
        <S.TitleWrapper>
          <S.Title>스왑</S.Title>
          <span onClick={() => alert('준비 중입니다')}>⚙️</span>
        </S.TitleWrapper>
        <S.InputWrapper>
          <S.ArrowButton type="button">↓</S.ArrowButton>
          <CryptoInputList />
        </S.InputWrapper>
        <S.ValueTextWrapper>
          <span>ℹ️</span>
          <S.TokenText>
            1 {selectedToken2.name} = 0.0007043 {selectedToken1.name}
          </S.TokenText>
          <S.DollarText>($1.0004)</S.DollarText>
        </S.ValueTextWrapper>
        <S.SwapButton
          type="button"
          onClick={() => alert('준비 중입니다')}
          disabled={isInputEmpty}
          isInputEmpty={isInputEmpty}
        >
          {isInputEmpty ? '금액을 입력하세요.' : '스왑'}
        </S.SwapButton>
      </S.ContentWrapper>
    </S.Layout>
  );
}

export default Home;
