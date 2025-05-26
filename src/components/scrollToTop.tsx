"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 cursor-pointer sm:right-14 z-50 p-3 rounded-full shadow-lg bg-purple-600 hover:bg-gray-700 text-white transition-all duration-300"
          aria-label="Scroll to top"
        >
          <ArrowUp className="text-black  hover:text-white h-5 w-5" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;