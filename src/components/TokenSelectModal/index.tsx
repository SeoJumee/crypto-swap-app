import { useRecoilValue, useSetRecoilState } from 'recoil';
import * as S from './style';
import {
  IsModal,
  SelectInputId,
  SelectedToken1,
  SelectedToken2,
} from '../../atoms';
import RecentTokensItem from './RecentTokensItem';
import TokenItem from './TokenItem';
import { useState } from 'react';

function TokenSelectModal() {
  const tokens = [
    { name: 'ETH', id: 'ethereum' },
    { name: 'USDT', id: 'tether' },
    { name: 'USDC', id: 'usd-coin' },
    { name: 'DAI', id: 'dai' },
    { name: 'AAVE', id: 'aave' },
    { name: 'WBTC', id: 'bitcoin' },
    { name: 'AXS', id: 'axie-infinity' },
    { name: 'COMP', id: 'compound-coin' },
    { name: 'CRV', id: 'curve-dao-token' },
    { name: 'ENS', id: 'ethereum-name-service' },
  ];

  const setIsModal = useSetRecoilState(IsModal);
  const [inputValue, setInputValue] = useState('');
  const [searchedTokens, setSearchedTokens] =
    useState<{ name: string; id: string }[]>(tokens);
  const setSelectedToken1 = useSetRecoilState(SelectedToken1);
  const setSelectedToken2 = useSetRecoilState(SelectedToken2);
  const selectInputId = useRecoilValue(SelectInputId);

  function handleCloseModal() {
    setIsModal(false);
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setInputValue(value);
    handleSearchToken(value);
  }

  function handleSearchToken(inputValue: string) {
    const filteredTokens = tokens.filter((token) =>
      token.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setSearchedTokens(filteredTokens);
  }

  function handleSelectToken(token: { name: string; id: string }) {
    if (selectInputId === 1) {
      setSelectedToken1(token);
    } else if (selectInputId === 2) {
      setSelectedToken2(token);
    }
  }

  return (
    <S.ModalLayout onClick={handleCloseModal}>
      <S.ModalWrapper onClick={(event) => event.stopPropagation()}>
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
          {tokens.slice(0, 7).map((token) => (
            <RecentTokensItem
              key={token.id}
              name={token.name}
              id={token.id}
              onSelect={handleSelectToken}
            />
          ))}
        </S.RecentTokens>
        <S.TokensList>
          {searchedTokens.length !== 0 ? (
            searchedTokens.map((token) => (
              <TokenItem
                name={token.name}
                id={token.id}
                key={token.id}
                onSelect={handleSelectToken}
              />
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
