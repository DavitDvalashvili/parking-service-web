import "@fontsource/firago";
import { create } from "zustand";

// Language store
type UseLanguage = {
  language: string;
  toggleLanguage: (language: string) => void;
};

// Theme store
type UseTheme = {
  theme: string;
  toggleTheme: (theme: string) => void;
};

export const useLanguage = create<UseLanguage>((set) => ({
  language: "Ge",
  toggleLanguage: (language: string) => set({ language }),
}));

export const UseTheme = create<UseTheme>((set) => ({
  theme: "Light",
  toggleTheme: (theme: string) => set({ theme }),
}));

const App = () => {
  return <div className="font-firago">შეტყობინება</div>;
};

export default App;
