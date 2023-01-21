import { useEffect, useState } from "react";
import { client } from "../client.js";

export const useFetchConcepts = () => {
  const [concepts, setConcepts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const query = `*[_type == "concepts"]`;
    const fetchData = async query => {
      try {
        setLoading(true);
        const result = await client.fetch(query);
        setConcepts(result);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    fetchData(query);
  }, []);

  return { concepts, loading, error };
};
