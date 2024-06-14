import { useSetRecoilState } from 'recoil';
import * as S from './style';
import { IsModal } from '../../atoms';
import RecentTokensItem from './RecentTokensItem';
import TokenItem from './TokenItem';
import { TOKENS } from './constant';
import { useState } from 'react';

function TokenSelectModal() {
  const setIsModal = useSetRecoilState(IsModal);
  const [inputValue, setInputValue] = useState('');
  const [searchedTokens, setSearchedTokens] =
    useState<{ name: string; id: string }[]>(TOKENS);

  function handleCloseModal() {
    setIsModal(false);
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setInputValue(value);
    handleSearchToken(value);
  }

  function handleSearchToken(inputValue: string) {
    const filteredTokens = TOKENS.filter((token) =>
      token.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setSearchedTokens(filteredTokens);
  }

  return (
    <S.ModalLayout onClick={handleCloseModal}>
      <S.ModalWrapper onClick={(e) => e.stopPropagation()}>
        <S.ModalTitleWrapper>
          <S.ModalTitle>토큰 선택</S.ModalTitle>
          <S.CloseButton type="button" onClick={handleCloseModal}>
            X
          </S.CloseButton>
        </S.ModalTitleWrapper>
        <S.TokensSearchInput
          type="text"
          placeholder="이름 검색 또는 주소 붙여넣기"
          onChange={handleInputChange}
          value={inputValue}
        />
        <S.RecentTokens>
          {TOKENS.slice(0, 7).map((token) => (
            <RecentTokensItem key={token.id} name={token.name} />
          ))}
        </S.RecentTokens>
        <S.TokensList>
          {searchedTokens.length !== 0 ? (
            searchedTokens.map((token) => (
              <TokenItem name={token.name} id={token.id} key={token.id} />
            ))
          ) : (
            <S.TokenListInfoText>결과가 없습니다.</S.TokenListInfoText>
          )}
        </S.TokensList>
        <S.ModifyTokensButton
          type="button"
          onClick={() => alert('준비 중입니다')}
        >
          ✍️ 토큰 목록 관리
        </S.ModifyTokensButton>
      </S.ModalWrapper>
    </S.ModalLayout>
  );
}

export default TokenSelectModal;
