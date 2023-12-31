"use client";

import React, { useEffect, useState } from "react";
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { useTheme } from "next-themes";

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const light = theme === "light";
  //TODO: round sun and moon like https://kentcdodds.com/
  return (
    <button className="ml-10 dark:bg-gray-900 dark:text-yellow-400 bg-gray-100 text-gray-900 w-24 rounded-full flex justify-center items-center text-white">
      {light ? (
        <BsMoonStarsFill onClick={() => setTheme("dark")} size={20} />
      ) : (
        <BsFillSunFill onClick={() => setTheme("light")} size={20} />
      )}
    </button>
  );
};

export default ThemeChanger;
