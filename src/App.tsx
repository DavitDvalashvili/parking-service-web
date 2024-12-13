import "@fontsource/firago";
import "@fontsource/firago/400.css";
import "@fontsource/firago/500.css";
import { create } from "zustand";
import { useState } from "react";
import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Main } from "./pages/Main";
import { Device } from "./pages/Device";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

// Language store
type UseLanguage = {
  language: "Ge" | "En";
  toggleLanguage: (language: "Ge" | "En") => void;
};

export const useLanguage = create<UseLanguage>((set) => ({
  language: "Ge",
  toggleLanguage: (language: "Ge" | "En") => set({ language }),
}));

const App = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <main className="relative">
      <Router>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route
            path="/"
            element={<Main darkMode={darkMode} setDarkMode={setDarkMode} />}
          />
          <Route path="/device/:name" element={<Device />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer darkMode={darkMode} />
      </Router>
    </main>
  );
};

export default App;
