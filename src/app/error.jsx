"use client"; // Error components must be Client Components

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import sadGif from "../../public/giphy.gif";
import Button from "../components/button/Button";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <>
      <div className="flex flex-col h-[100vh] w-full justify-center items-center">
        <Image src={sadGif} width={300} height={300} alt="sad" />
        <h1>Something went wrong!</h1>
        <div>
          <Button
            onClick={() => reset()}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Try again
          </Button>

          <Button>
            <Link href="./">GO to Home</Link>
          </Button>
        </div>
      </div>
    </>
  );
}
