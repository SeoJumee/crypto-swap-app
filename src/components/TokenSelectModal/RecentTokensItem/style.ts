import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const RecentTokenWrapper = styled.div<{ isSelected: boolean }>`
  width: auto;
  height: 36px;
  display: flex;
  align-items: center;
  gap: 8px;
  border: 1px solid #3d404a;
  border-radius: 8px;
  padding: 0 8px;
  cursor: pointer;

  &:hover {
    background-color: #1e1f21;
  }

  ${({ isSelected }) =>
    isSelected &&
    css`
      background-color: #444444;
      color: #969696;
    `}
`;

export const TokenImg = styled.div`
  width: 20px;
  height: 20px;
  background-color: #fff;
  border-radius: 50%;
`;

export const TokenName = styled.span`
  color: #fff;
`;
