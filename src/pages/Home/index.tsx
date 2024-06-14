import { useRecoilValue } from 'recoil';
import { CryptoInputList, TokenSelectModal } from '../../components';
import * as S from './style';
import { IsModal, SelectedTokens } from '../../atoms';

function Home() {
  const isModal = useRecoilValue(IsModal);
  const selectedTokens = useRecoilValue(SelectedTokens);

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
            1 {selectedTokens.token1.name} = 0.0007043{' '}
            {selectedTokens.token2.name}
          </S.TokenText>
          <S.DollarText>($1.0004)</S.DollarText>
        </S.ValueTextWrapper>
        <S.SwapButton type="button" onClick={() => alert('준비 중입니다')}>
          스왑
        </S.SwapButton>
      </S.ContentWrapper>
    </S.Layout>
  );
}

export default Home;
