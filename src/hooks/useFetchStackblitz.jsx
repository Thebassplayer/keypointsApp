import { useEffect, useState } from "react";
import embedProject from "../utils/stackblitz/embedCode.utils";

export const useFetchStackblitz = (example, id) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async (example, id) => {
      try {
        setLoading(true);
        const result = await embedProject(example, id);

        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    fetchData(example, id);
  }, []);

  return { loading, error };
};
