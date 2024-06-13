import { CryptoInputList } from '../../components';
import * as S from './style';

function Home() {
  return (
    <S.Layout>
      <S.ContentWrapper>
        <S.TitleWrapper>
          <S.Title>스왑</S.Title>
          <span onClick={() => alert('준비 중입니다')}>⚙️</span>
        </S.TitleWrapper>
        <S.InputWrapper>
          <S.ArrowButton>↓</S.ArrowButton>
          <CryptoInputList />
        </S.InputWrapper>
        <S.ValueTextWrapper>
          <span>ℹ️</span>
          <S.TokenText>1 USDT = 0.0007043 ETH</S.TokenText>
          <S.DollarText>($1.0004)</S.DollarText>
        </S.ValueTextWrapper>
        <S.SwapButton onClick={() => alert('준비 중입니다')}>스왑</S.SwapButton>
      </S.ContentWrapper>
    </S.Layout>
  );
}

export default Home;
