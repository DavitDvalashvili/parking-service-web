import data from "../assets/locales/translations.json";
import { useLanguage } from "../App";

export const Home = () => {
  const { language } = useLanguage();

  const coverContent = data[language].cover;

  return (
    <div>
      <div className="font-bold text-[2rem] font-firago font-feature pt-4 text-black dark:text-white dark:bg-dark-brown">
        <h2 className="mx-auto text-center uppercase max-w-[26.1rem]">
          {coverContent.title}
        </h2>
        <div className="w-full h-[26.3rem] bg-mobile-light dark:bg-mobile-dark bg-cover bg-top border-t-[0.001rem] border-white dark:border-dark-brown"></div>
      </div>
    </div>
  );
};
