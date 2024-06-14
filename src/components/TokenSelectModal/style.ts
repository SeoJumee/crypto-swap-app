import styled from '@emotion/styled';

export const ModalLayout = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
`;

export const ModalWrapper = styled.div`
  position: relative;
  width: 25vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  background-color: #131313;
  border: 1px solid #2b2b2b;
  border-radius: 20px;
`;

export const ModalTitleWrapper = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
`;

export const ModalTitle = styled.h1`
  font-size: 18px;
  font-weight: 500;
`;

export const CloseButton = styled.button`
  font-size: 20px;
  padding: 4px;
  cursor: pointer;
  background: none;
  border: none;
  color: #fff;
`;

export const TokensSearchInput = styled.input`
  width: 90%;
  height: 50px;
  outline: none;
  background: none;
  font-size: 16px;
  border: 1px solid #386acf;
  border-radius: 16px;
  padding: 8px;
  color: #fff;

  &::placeholder {
    color: #868c9f;
  }
`;

export const RecentTokens = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  padding: 16px;
`;

export const TokensList = styled.div`
  width: 100%;
  height: 45vh;
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow: scroll;
  border-top: 1px solid #2d2f35;
`;

export const TokenListInfoText = styled.span`
  color: #fff;
  text-align: center;
  margin-top: 20px;
`;

export const ModifyTokensButton = styled.button`
  position: absolute;
  width: 100%;
  height: 5vh;
  bottom: 0;
  font-size: 16px;
  border: none;
  background: none;
  color: #5d8bdd;
  cursor: pointer;
`;
