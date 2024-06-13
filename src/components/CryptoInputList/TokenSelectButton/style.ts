import styled from '@emotion/styled';

export const TokenSelectContainer = styled.button`
  height: 40px;
  background-color: #2d2f35;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px;
  border: 1px solid #232323;
  border-radius: 20px;
  margin-right: 24px;
  cursor: pointer;

  &:hover {
    background-color: #252628;
    transition: all 0.1s;
  }

  span:last-child {
    padding-right: 8px;
  }
`;

export const TokenImg = styled.div`
  width: 24px;
  height: 24px;
  background-color: #fff;
  border-radius: 50%;
`;

export const TokenName = styled.span`
  color: #fff;
  font-size: 18px;
`;
