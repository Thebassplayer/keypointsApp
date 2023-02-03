import React, { useState, useEffect } from "react";
import { useFetchStackblitz } from "../hooks/useFetchStackblitz";
import Spinner from "./Spinner.component";

function StackBlitzCode({ title, example, id }) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  if (example) {
    const { loading, error } = useFetchStackblitz(title, example, id);
    useEffect(() => {
      setIsLoading(loading);
      error && setError(error);
    }, [loading, error]);
  }

  return (
    <>
      {!example ? (
        ""
      ) : error ? (
        <span>Snippet is not available</span>
      ) : isLoading ? (
        <Spinner />
      ) : (
        <div id={`embed-${id}`} className="pt-4"></div>
      )}
    </>
  );
}

export default StackBlitzCode;
