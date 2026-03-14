"use client";

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    if (next) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="fixed top-5 right-6 z-50 w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-900 dark:text-zinc-500 dark:hover:text-zinc-200 transition-colors"
    >
      {dark ? <Sun size={15} /> : <Moon size={15} />}
    </button>
  );
}
