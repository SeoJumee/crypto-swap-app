import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useGetTokenPrice = (token: string) =>
  useQuery({
    queryKey: ['get-token-price', token],
    queryFn: () =>
      axios.get(
        `https://api.coingecko.com/api/v3/simple/price?vs_currencies=USD&ids=${token}`
      ),
  });

export default useGetTokenPrice;
