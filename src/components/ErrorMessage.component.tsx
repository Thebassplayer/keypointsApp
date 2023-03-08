/**
 * This component is used to display an error message when an error occurs.
 *
 * @returns {JSX.Element | null} - The error message component.
 *
 */

import React, { useState } from "react";

const ErrorMessage = (): JSX.Element | null => {
  const [show, setShow] = useState<boolean>(true);

  const handleShow = () => {
    setShow(false);
  };

  return show ? (
    <div
      className="relative rounded border border-red-400 bg-red-100 px-10 py-4 text-red-700"
      role="alert"
    >
      <div className="flex h-full flex-col items-center justify-evenly">
        <p>
          <strong className="font-bold">An unexpected error happened</strong>
        </p>
        <p className="block sm:inline">Try again later</p>
      </div>
      <button onClick={handleShow}>
        <span className="absolute top-0 right-0">
          <svg
            className="h-6 w-6 fill-current text-red-500"
            role="button"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <title>Close</title>
            <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
          </svg>
        </span>
      </button>
    </div>
  ) : null;
};

export default ErrorMessage;
