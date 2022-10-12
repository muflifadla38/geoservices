import { useState, useEffect } from "react";
import { UpArrowIcon } from "./Icons";

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
        {showTopBtn && (
          <div>
            <div className="block w-9 h-9 rounded-full bg-slate-400 dark:bg-slate-600 relative top-9 blur-md"></div>
            <button
              className="block bg-slate-200 dark:bg-slate-700 w-9 h-9 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110"
              onClick={goToTop}
            >
              <UpArrowIcon className="w-full h-full rounded-full text-indigo-500 dark:text-indigo-500" />
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default ScrollToTop;
