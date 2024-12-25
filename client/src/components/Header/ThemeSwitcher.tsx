import { useParking } from "../../App";


const ThemeSwitcher = () => {
  const { toggleDarkMode, darkMode } = useParking()

  const toggleTheme = () => {
    toggleDarkMode();
  };

  return (
    <div
      className="cursor-pointer border w-[7.4rem] h-[3.4rem] lg:w-[11rem] lg:h-[4.1rem] rounded-[4rem]  flex justify-center items-center gap-[0.89rem] lg:gap-[2.821rem] border-primary dark:border-secondary "
      onClick={toggleTheme}
    >
      {!darkMode && <img
        className="w-[2.6rem] h-[2.6rem] lg:w-[3.191rem] lg:h-[3.228rem]"
        src="/icons/header/sunLight.svg"
        alt="sunIcon"
      />}
      {darkMode && <img
        className="w-[2.6rem] h-[2.6rem] lg:w-[3.191rem] lg:h-[3.228rem]"
        src="/icons/header/sunDark.svg"
        alt="sunIcon"
      />}
      {!darkMode && <img
        className="w-[2.6rem] h-[2.6rem] lg:w-[2.946rem] lg:h-[2.980rem]"
        src="/icons/header/moonLight.svg"
        alt="moonIcon"
      />}
      {darkMode && < img
        className="w-[2.6rem] h-[2.6rem] lg:w-[2.946rem] lg:h-[2.980rem]"
        src="/icons/header/moonDark.svg"
        alt="moonIcon"
      />}
    </div>
  );
};

export default ThemeSwitcher;
