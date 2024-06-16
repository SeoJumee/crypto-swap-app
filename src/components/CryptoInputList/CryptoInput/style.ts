import styled from '@emotion/styled';

export const CryptoInputWrapper = styled.div`
  width: 100%;
  height: 112px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #1b1b1b;

  border: 1px solid #1b1b1b;
  border-radius: 10px;

  &:hover {
    border: 1px solid #252628;
  }
`;

export const CryptoInput = styled.input`
  width: 100%;
  outline: none;
  color: #fff;
  font-size: 32px;
  background: none;
  border: none;
  padding: 0 12px;

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const ValueWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  span {
    padding: 0 12px;
    color: #9096aa;
  }
`;
