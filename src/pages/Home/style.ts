import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #131313;
`;

export const ContentWrapper = styled.div`
  width: 30vw;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: 18px;
    padding-right: 16px;
    cursor: pointer;
  }
`;

export const Title = styled.h1`
  font-size: 16px;
  font-weight: 400;
  color: #fff;
  padding: 8px 16px;
  background-color: #1b1b1b;
  border-radius: 32px;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ArrowButton = styled.button`
  position: absolute;
  width: 44px;
  height: 44px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #1b1b1b;
  z-index: 1;
  border: 4px solid #131313;
  border-radius: 16px;
  font-size: 20px;
  color: #fff;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`;

export const ValueTextWrapper = styled.div`
  display: flex;
  gap: 4px;
`;

export const TokenText = styled.span`
  color: #fff;
`;

export const DollarText = styled.span`
  color: #8d93a7;
`;

export const SwapButton = styled.button<{ isInputEmpty: boolean }>`
  width: 100%;
  height: 72px;
  background-color: #3a70dd;
  border: none;
  border-radius: 12px;
  font-size: 20px;
  color: #fff;
  cursor: pointer;

  ${({ isInputEmpty }) =>
    isInputEmpty &&
    css`
      background-color: #1b1b1b;
      color: #757575;
      cursor: not-allowed;
    `}
`;
