import styled from '@emotion/styled';

export const TokenItemWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;
  padding: 8px 16px;

  &:hover {
    background-color: #2d2f35;
  }
`;

export const TokenImg = styled.div`
  width: 24px;
  height: 24px;
  background-color: #fff;
  border-radius: 50%;
`;

export const TokenInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;

  span:last-child {
    font-size: 12px;
    color: #7f8596;
  }
`;
