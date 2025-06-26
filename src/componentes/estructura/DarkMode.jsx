import { useState, useEffect } from "react";
import { FaCloudSun, FaCloudMoon } from "react-icons/fa";

function DarkMode() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, []);

  const handleToggle = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    document.documentElement.classList.toggle("dark", newDarkMode);
    localStorage.setItem("darkMode", newDarkMode);
  };

  return (
    <button
      onClick={handleToggle}
      className="text-white hover:text-secondary transition cursor-pointer dark:bg-slate-700 bg-slate-700 flex items-center justify-center w-[35px] h-[35px] rounded-full text-2xl"
    >
      {darkMode ? (
        <span className="-scale-x-100">
          <FaCloudSun />
        </span>
      ) : (
        <FaCloudMoon />
      )}
    </button>
  );
}

export default DarkMode;
