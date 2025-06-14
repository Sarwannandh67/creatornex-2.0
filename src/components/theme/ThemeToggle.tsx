import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    // Force immediate class update
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(newTheme);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="h-9 w-9 rounded-full hover:bg-accent/10 relative"
      aria-label="Toggle theme"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <Sun className="h-4 w-4 transition-all duration-200 scale-100 rotate-0 dark:scale-0 dark:-rotate-90" />
        <Moon className="h-4 w-4 absolute transition-all duration-200 scale-0 rotate-90 dark:scale-100 dark:rotate-0" />
      </div>
    </Button>
  );
} 