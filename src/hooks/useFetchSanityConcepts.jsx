import { useEffect, useState } from "react";
import { getAllConceptsTags } from "../utils/sanity/getAllConceptsTags.js";
import { client } from "../client.js";

export const useFetchSanityConcepts = () => {
  const [concepts, setConcepts] = useState([]);
  const [globalTags, setGlobalTags] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const query = `*[_type == "concepts"]`;
    const fetchData = async query => {
      try {
        setLoading(true);
        const result = await client.fetch(query);
        setConcepts(result);
        setGlobalTags(getAllConceptsTags(result));
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    fetchData(query);
  }, []);

  return { concepts, globalTags, loading, error };
};
