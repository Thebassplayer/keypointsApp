import { useEffect, useState } from "react";
import { getAllConceptsTags } from "../utils/sanity/getAllConceptsTags.js";
import { client } from "../client.js";

interface SanityData {
  concepts: any[];
  globalTags: string[];
  loading: boolean;
  error: any;
}

export const useFetchSanityConcepts = (): SanityData => {
  const [concepts, setConcepts] = useState([]);
  const [globalTags, setGlobalTags] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const query = `*[_type == "concepts"]`;
    const fetchData = async (query: string) => {
      try {
        setLoading(true);
        const result = await client.fetch(query);
        setConcepts(result);
        setGlobalTags(getAllConceptsTags(result));
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
    fetchData(query);
  }, []);

  return { concepts, globalTags, loading, error };
};
