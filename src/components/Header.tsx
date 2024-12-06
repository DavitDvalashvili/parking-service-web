import data from "../assets/locales/translations.json";
import { useLanguage } from "../App";
import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

type header = {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Header = ({ darkMode, setDarkMode }: header) => {
  const { language } = useLanguage();
  const [showNavBar, setShowNavbar] = useState<boolean>(false);
  const [showLanguage, setShowLanguage] = useState<boolean>(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const toggleNavBar = () => {
    setShowNavbar(!showNavBar);
  };

  const toggleLanguageBar = () => {
    setShowLanguage(!showLanguage);
  };

  const content = data[language];

  return (
    <header className="flex justify-between items-center p-8 bg-white dark:bg-dark-brown relative font-firago">
      <div
        className="cursor-pointer border w-[7.4rem] h-[3.4rem] rounded-[4rem]  flex justify-center items-center gap-[0.89rem] border-primary dark:border-secondary lg:hidden"
        onClick={toggleTheme}
      >
        <img
          className="w-[2.6rem] h-[2.6rem]"
          src={
            darkMode
              ? "/icons/header/sunDark.svg"
              : "/icons/header/sunLight.svg"
          }
          alt="sunIcon"
        />
        <img
          className="w-[2.6rem] h-[2.6rem]"
          src={
            darkMode
              ? "/icons/header/moonDark.svg"
              : "/icons/header/moonLight.svg"
          }
          alt="moonIcon"
        />
      </div>

      <div className="h-[4.1rem]">
        <img
          className="h-full"
          src={
            darkMode
              ? "/images/header/logoDark.svg"
              : "/images/header/logoLight.svg"
          }
          alt="Easy Park"
        />
      </div>

      <div
        className={`${
          showNavBar ? "block" : "hidden"
        } lg:block absolute top-[8.1rem] left-0 w-full bg-secondary font-bold text-[1.8rem] text-primary`}
      >
        <nav className="w-full p-[1.6rem] cursor-pointer">
          <ul className="font-bold flex flex-col gap-[3.6rem]">
            {content.header.nav.map((li, index) => (
              <li key={index}>{li}</li>
            ))}
          </ul>
        </nav>

        <div>
          <div
            onClick={toggleLanguageBar}
            className="flex item-center gap-[0.5rem] cursor-pointer"
          >
            <span className="font-bold leading-[2.2rem]">
              {language == "Ge" ? "ქარ" : "ENG"}
            </span>
            {showLanguage && <IoIosArrowDown className="h-[2.2rem]" />}
            {!showLanguage && <IoIosArrowUp className="h-[2.2rem]" />}
          </div>
          {showLanguage && (
            <span className="cursor-pointer font-medium">
              {language == "En" ? "ქარ" : "ENG"}
            </span>
          )}
        </div>
      </div>

      <div className="cursor-pointer lg:hidden" onClick={toggleNavBar}>
        <img
          src={
            darkMode
              ? "/icons/header/burgerDark.svg"
              : "/icons/header/burgerLight.svg"
          }
          alt="burgerMenu"
        />
      </div>

      <button className="text-[1.4rem] font-bold text-white bg-primary w-[16rem] h-[5rem] font-firago rounded-[1.5rem] hidden lg:inline-block ">
        {content.header.button}
      </button>
    </header>
  );
};
