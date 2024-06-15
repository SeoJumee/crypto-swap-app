import * as S from './style';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { CryptoInputList, TokenSelectModal } from '../../components';
import {
  InputValue1,
  InputValue2,
  IsModal,
  SelectedToken1,
  SelectedToken2,
  TokenPrice1,
  TokenPrice2,
} from '../../atoms';
import { useGetTokenPrice } from '../../api';

function Home() {
  const isModal = useRecoilValue(IsModal);
  const [selectedToken1, setSelectedToken1] = useRecoilState(SelectedToken1);
  const [selectedToken2, setSelectedToken2] = useRecoilState(SelectedToken2);
  const inputValue1 = useRecoilValue(InputValue1);
  const inputValue2 = useRecoilValue(InputValue2);
  const setTokenPrice1 = useSetRecoilState(TokenPrice1);
  const setTokenPrice2 = useSetRecoilState(TokenPrice2);
  const isInputEmpty = inputValue1.length === 0 || inputValue2.length === 0;

  const { data: tokenPriceData1 } = useGetTokenPrice(selectedToken1.id);
  const { data: tokenPriceData2 } = useGetTokenPrice(selectedToken2.id);
  setTokenPrice1(tokenPriceData1?.data[selectedToken1.id].usd);
  setTokenPrice2(tokenPriceData2?.data[selectedToken2.id].usd);

  function swapTokens() {
    setSelectedToken1(selectedToken2);
    setSelectedToken2(selectedToken1);
  }

  return (
    <S.Layout>
      {isModal && <TokenSelectModal />}
      <S.ContentWrapper>
        <S.TitleWrapper>
          <S.Title>스왑</S.Title>
          <span onClick={() => alert('준비 중입니다')}>⚙️</span>
        </S.TitleWrapper>
        <S.InputWrapper>
          <S.ArrowButton type="button" onClick={swapTokens}>
            ↓
          </S.ArrowButton>
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
