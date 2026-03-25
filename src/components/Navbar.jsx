import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "contact"];

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 150 && rect.bottom >= 150) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkStyle = (id) =>
    `cursor-pointer transition ${
      active === id
        ? "text-purple-500"
        : "text-gray-500 hover:text-black dark:hover:text-white"
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/70 dark:bg-black/70 border-b">
      <div className="max-w-5xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="font-bold">BuildWithMo</h1>

        <div className="flex gap-6 text-sm">
          <a href="#home" className={linkStyle("home")}>
            Home
          </a>
          <a href="#projects" className={linkStyle("projects")}>
            Projects
          </a>
          <a href="#contact" className={linkStyle("contact")}>
            Contact
          </a>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}