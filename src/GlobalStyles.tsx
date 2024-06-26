import { Global, css } from '@emotion/react';

const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export const GlobalStyles = () => {
  return <Global styles={globalStyles} />;
};
