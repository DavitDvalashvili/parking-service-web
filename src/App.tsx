import "@fontsource/firago";
import "@fontsource/firago/400.css";
import "@fontsource/firago/500.css";
import { create } from "zustand";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Device } from "./pages/Device";
import PageNotFound from "./pages/PageNotFound";
import { Main } from "./pages/Main";
import News from "./pages/News";

// Language store
type UseParking = {
  language: "Ge" | "En";
  toggleLanguage: (language: "Ge" | "En") => void;
  darkMode: boolean;
  toggleDarkMode: (darkMode: boolean) => void;
};

export const useParking = create<UseParking>((set) => ({
  language: "Ge",
  toggleLanguage: (language: "Ge" | "En") => set({ language }),
  darkMode: false,
  toggleDarkMode: (darkMode: boolean) => set({ darkMode }),
}));

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Main />}>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/device/:name" element={<Device />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
