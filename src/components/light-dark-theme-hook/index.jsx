import { useLocalStorage } from "./theme-hook";
import "./theme.css"
export const LightDarkTheme = () => {
  const [theme, setTheme] = useLocalStorage('theme', "dark");
  const handleChangeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
console.log(theme)
  return (
    <div className="theme-mode-container" data-theme={theme}>
      <div className="theme-elements">
        <h2>Welcome</h2>
        <button onClick={handleChangeTheme}>Change Theme</button>
      </div>
    </div>
  );
};
