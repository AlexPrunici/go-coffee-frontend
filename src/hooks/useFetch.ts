import { useState, useCallback } from "react";
import { AxiosResponse } from "axios";
import useDeepCompareEffect from "use-deep-compare-effect";

export type UseFetchOptions = {
  enabled?: boolean;
};

export function useFetch<T, Y>(
  action: (args: Y) => Promise<AxiosResponse<T>>,
  args?: Y,
  options: UseFetchOptions = {}
) {
  const { enabled = true } = options;
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const localArgs = args || {};

  const fetchData = useCallback(
    async (funcArgs: Y) => {
      try {
        setLoading(true);
        const response = await action(funcArgs);
        setData(response.data);
      } catch (e: any) {
        setError(e.response.data.detail || "Error occured");
      } finally {
        setLoading(false);
      }
    },
    [action]
  );

  useDeepCompareEffect(() => {
    if (enabled) fetchData(localArgs as Y);
  }, [localArgs]);

  return {
    data,
    isLoading,
    setData: (newData: T | ((d: T | null) => T | null)) => {
      return setData(newData);
    },
    error,
    refetch: () => fetchData(localArgs as Y),
  };
}
