import { useEffect, useState } from "react";
import embedProject from "../utils/stackblitz/embedCode.utils";

interface UseFetchStackblitzreturn {
  loading: boolean;
  error: Error | null;
}

export const useFetchStackblitz = (
  title: string,
  example: any,
  id: string
): UseFetchStackblitzreturn => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async (example: any, id: string) => {
      try {
        setLoading(true);
        const result = await embedProject(title, example, id);

        setLoading(false);
      } catch (err) {
        if (err instanceof Error) {
          setError(new Error(err.message));
        } else {
          setError(null);
        }
        setLoading(false);
      }
    };
    fetchData(example, id);
  }, []);

  return { loading, error };
};
