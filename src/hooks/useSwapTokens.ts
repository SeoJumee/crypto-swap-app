import { useRecoilValue } from 'recoil';
import { TokenPrice1, TokenPrice2 } from '../atoms';

function useSwapTokens() {
  const tokenPrice1 = useRecoilValue(TokenPrice1);
  const tokenPrice2 = useRecoilValue(TokenPrice2);

  const truncatedNumber = (number: number) => {
    return Math.floor(number * Math.pow(10, 10)) / Math.pow(10, 10);
  };

  const getDollarValueFromToken1 = (inputValue: number) => {
    return truncatedNumber(inputValue / Number(tokenPrice1));
  };

  const getDollarValueFromToken2 = (inputValue: number) => {
    return truncatedNumber(inputValue / Number(tokenPrice2));
  };

  const swapFromToken1ToToken2 = (inputValue: number) => {
    const dollarValue = getDollarValueFromToken1(inputValue);
    return truncatedNumber(dollarValue * tokenPrice2);
  };

  const swapFromToken2ToToken1 = (inputValue: number) => {
    const dollarValue = getDollarValueFromToken2(inputValue);
    return truncatedNumber(dollarValue * tokenPrice1);
  };

  const getDollarValueFrom1Token2 = () => {
    return truncatedNumber(1 / tokenPrice2);
  };

  const tokenValueConverter = () => {
    const dollarValue = getDollarValueFrom1Token2();
    return truncatedNumber(dollarValue * tokenPrice1);
  };

  return {
    getDollarValueFromToken1,
    getDollarValueFromToken2,
    swapFromToken1ToToken2,
    swapFromToken2ToToken1,
    getDollarValueFrom1Token2,
    tokenValueConverter,
  };
}

export default useSwapTokens;
