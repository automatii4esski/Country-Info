import { useState } from 'react';

export const useFetch = function <TArgs extends any[]>(
  callBack: (...args: TArgs) => any
): [fetch: (...args: TArgs) => any, isLoading: boolean, error: string] {
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const fetch = async function (...args: TArgs) {
    try {
      setIsLoading(true);
      await callBack(...args);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return [fetch, isLoading, error];
};
