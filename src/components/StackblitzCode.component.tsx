import React, { useState, useEffect } from "react";
import { useFetchStackblitz } from "../hooks/useFetchStackblitz";
import Spinner from "./Spinner.component";

interface StackBlitzCodeProps {
  title: string;
  example: any;
  id: string;
}

function StackBlitzCode({
  title,
  example,
  id,
}: StackBlitzCodeProps): JSX.Element {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

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
