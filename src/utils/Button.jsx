"use client"
import { useEffect } from "react";

const Button = () => {
  useEffect(() => {

    const scrollFunction = () => {
      const mybutton = document.getElementById("btn-back-to-top");
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        mybutton.classList.remove("hidden");
      } else {
        mybutton.classList.add("hidden");
      }
    };

    const backToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const mybutton = document.getElementById("btn-back-to-top");
    mybutton.addEventListener("click", backToTop);

    window.addEventListener("scroll", scrollFunction);

    return () => {
      window.removeEventListener("scroll", scrollFunction);
      mybutton.removeEventListener("click", backToTop);
    };
  }, []);

  return (
    <>
      <button
        type="button"
        className="rounded-full p-4 bg-red-600 text-white text-xs font-medium uppercase leading-tight  shadow-md transition duration-150 ease-in-out hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg !z-[99999999]"
        id="btn-back-to-top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
          />
        </svg>
      </button>
    </>
  );
};

export default Button