import data from "../assets/locales/translations.json";
import { HashLink } from "react-router-hash-link";
import { useParking } from "../App";
import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import ThemeSwitcher from "./Header/ThemeSwitcher";


export const Header = () => {
  const { language, toggleLanguage, darkMode, toggleShowContactForm } = useParking();
  const [showNavBar, setShowNavbar] = useState<boolean>(false);
  const [showLanguage, setShowLanguage] = useState<boolean>(false);

  const toggleNavBar = () => {
    setShowNavbar(!showNavBar);
  };

  const toggleLanguageBar = () => {
    setShowLanguage(!showLanguage);
  };

  const headerContent = data[language].header;

  return (
    <header className="flex justify-between lg:justify-end lg:gap-[3rem] xl:gap-[4rem] items-center p-8 lg:px-[6rem] xl:px-[10rem] lg:py-[4rem] bg-white dark:bg-dark-brown 
    font-firago fixed  z-30 top-0 left-0 w-full ">
      <div className="lg:hidden">
        <ThemeSwitcher />
      </div>
      <div className="h-[4.1rem] lg:h-[5rem] lg:w-[13rem] lg:mr-auto xl:w-[25rem] xl:h-[9.6rem]">
        {!darkMode && <img
          className="h-full"
          src="/images/header/logoLight.svg"
          alt="Easy Park"
        />}
        {darkMode && <img
          className="h-full "
          src="/images/header/logoDark.svg"
          alt="Easy Park"
        />}
      </div>

      <div
        className={`${showNavBar ? "block" : "hidden"
          }  absolute lg:static top-[8.1rem] left-0 w-full lg:w-fit bg-secondary lg:bg-transparent font-bold text-[1.8rem] xl:text-[2.4rem] text-primary dark:text-black lg:dark:text-white lg:flex lg:justify-between lg:items-center lg:gap-[3rem] xl:gap-[3.85rem]`}
      >
        <nav className="w-full py-[1.6rem] px-8 lg:p-0 cursor-pointer uppercase">
          <ul className="font-bold flex flex-col lg:flex-row gap-[3.6rem] lg:gap-[3rem] xl:gap-[3.8rem] lg:w-fit">
            <li onClick={toggleNavBar} className="lg:border-b lg:border-transparent hover:border-primary font-medium hover:font-bold dark:hover:border-secondary transition duration-300 dark:hover:text-secondary">
              <HashLink to="#main">{headerContent.nav.main}</HashLink>
            </li>
            <li onClick={toggleNavBar} className="lg:border-b lg:border-transparent hover:border-primary font-medium hover:font-bold dark:hover:border-secondary transition duration-300 dark:hover:text-secondary">
              <HashLink to="#service">{headerContent.nav.service}</HashLink>
            </li>
            <li onClick={toggleNavBar} className="lg:border-b lg:border-transparent hover:border-primary font-medium hover:font-bold dark:hover:border-secondary transition duration-300 dark:hover:text-secondary">
              <HashLink to="#device">{headerContent.nav.device}</HashLink>
            </li>
            <li onClick={toggleNavBar} className="lg:border-b lg:border-transparent hover:border-primary font-medium hover:font-bold dark:hover:border-secondary transition duration-300 dark:hover:text-secondary">
              <HashLink to="#about">{headerContent.nav.about}</HashLink>
            </li>
            <li onClick={toggleNavBar} className="lg:border-b lg:border-transparent hover:border-primary font-medium hover:font-bold dark:hover:border-secondary transition duration-300 dark:hover:text-secondary">
              <HashLink to="#contact">{headerContent.nav.contact}</HashLink>
            </li>
          </ul>
        </nav>
        <div className="hidden lg:block">
          <ThemeSwitcher />
        </div>

        <div
          className=" mx-8 mt-[2.1rem] mb-[1.9rem] flex justify-start items-start gap-[0.5rem] cursor-pointer lg:m-0 "
          onClick={toggleLanguageBar}
        >
          <div className="flex flex-col item-center cursor-pointer gap-[1.7rem] lg:relative">
            {(showLanguage || language == "Ge") && (
              <span
                className={`font-bold leading-[2.2rem]  xl:leading-[4.5rem] ${language == "Ge" ? "font-bold order-first" : "font-normal lg:absolute left-0 top-[3rem] lg:top-[3.5rem] xl:top-[4.5rem]"
                  } xl:text-[2.4rem] `}
                onClick={() => {
                  toggleLanguage("Ge");
                  if (showLanguage) toggleNavBar();
                }}
              >
                ქარ
              </span>
            )}

            {(showLanguage || language == "En") && (
              <span
                className={`font-bold leading-[2.2rem]  xl:leading-[4.5rem] ${language == "En" ? "font-bold order-first" : "font-normal lg:absolute left-0 lg:top-[3.5rem] xl:top-[4.5rem]"
                  } xl:text-[2.4rem] `}
                onClick={() => {
                  toggleLanguage("En");
                  if (showLanguage) toggleNavBar();
                }}
              >
                En
              </span>
            )}
          </div>
          {showLanguage && <IoIosArrowDown className="h-[2.2rem] xl:h-[4.5rem]" />}
          {!showLanguage && <IoIosArrowUp className="h-[2.2rem] xl:h-[4.5rem]" />}
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
      <button className="text-[1.4rem] lg:text-[1.6rem] xl:[1.8rem] font-bold text-white bg-primary dark:bg-secondary dark:text-black w-[18rem] h-[5rem] 
      xl:w-[22.4rem] xl:h-[6rem] font-firago font-feature rounded-[1.5rem] hidden lg:inline-block uppercase"
        onClick={() => { toggleShowContactForm() }}>
        {headerContent.button}
      </button>
    </header>
  );
};
