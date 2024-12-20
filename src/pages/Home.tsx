import data from "../assets/locales/translations.json";
import { Services } from "../components/Main/Services";
import { RxCross1 } from "react-icons/rx";
import { Benefits } from "../components/Main/Benefits";
import { Devices } from "../components/Main/Devices";
import { Contact } from "../components/Main/Contact";
import { FAQ } from "../components/Main/FAQ";
import { ProcessReview } from "../components/Main/ProcessReview";
import { useState } from "react";
import { useParking } from "../App";

export const Home = () => {
  const [showContactForm, setShowContactForm] = useState<boolean>(false);
  const { language, darkMode } = useParking();

  const coverContent = data[language].cover;

  const toggleShowContactForm = () => {
    setShowContactForm(!showContactForm);
  };

  return (
    <div className="dark:bg-dark-brown">
      <div
        className="font-bold text-[2rem] font-firago font-feature pt-4  text-black dark:text-white dark:bg-dark-brown  scroll-mt-[8.1rem] mt-[8.1rem] 
        lg:mt-[13rem] xl:mt-[17.6rem] lg:pt-0 xl:pt-[4rem] lg:border-b lg:border-b-black lg:dark:border-transparent"
        id="main"
      >
        <h2 className="mx-auto text-center uppercase max-w-[26.1rem] lg:hidden">
          {coverContent.title}
        </h2>
        <div className="w-full h-[26.3rem] bg-mobile-light dark:bg-mobile-dark bg-cover bg-top border-t-[0.001rem] border-white dark:border-dark-brown
        lg:h-[62.1rem] lg:border-none lg:bg-desktop-light lg:dark:bg-desktop-dark lg:bg-auto lg:bg-no-repeat lg:bg-right-top">
          <div className="pt-[16rem] pl-[6rem] hidden lg:block xl:pt-[7.5rem] xl:pl-[10rem]">
            <h2 className=" font-bold text-[4.4rem] text-black max-w-[50rem] dark:max-w-[72.1rem] dark:text-white mb-[4rem] dark:mb-[5rem] uppercase 
            xl:text-[5rem] xl:dark:mb-[10rem] xl:dark:max-w-[82.1rem]">
              {coverContent.title}
            </h2>
            <button className="hidden lg:inline-block w-[26rem] h-[6rem] text-white bg-primary rounded-[1.5rem] cursor-pointer uppercase
             dark:bg-secondary dark:text-black xl:w-[30.9rem] xl:h-[8rem] xl:text-[2.4rem]">{coverContent.button}</button>
          </div>
        </div>
      </div>
      <Services />
      <Benefits />
      <Devices />
      <ProcessReview />
      <FAQ />
      <div className="w-full h-[37.1rem] relative">
        <div className="absolute top-0 left-0 w-full z-20">
          <Contact variant="landing" />
        </div>
      </div>
      {showContactForm && (
        <div className="fixed top-[8.1rem] left-0 w-screen max-h-screen bg-white dark:bg-dark-brown overflow-hidden z-40">
          <div className="flex justify-end px-8 pt-4 py-8">
            <div
              onClick={toggleShowContactForm}
              className="w-16 h-16 border border-[#e6e6e6] dark:border-white rounded-[1.6rem] flex justify-center items-center cursor-pointer"
            >
              <RxCross1 className="text-[1.4rem] stroke-[1] dark:text-white" />
            </div>
          </div>
          <Contact variant="popup" />
          <div className="mt-[-3rem]">
            {!darkMode && (
              <img
                src="./images/contact/letterSendLight.svg"
                alt="letterSendLight"
              />
            )}
            {darkMode && (
              <img
                src="./images/contact/letterSendDark.svg"
                alt="letterSendDark"
              />
            )}
          </div>
        </div>
      )}
      <div className="sticky bottom-0 z-30">
        <button
          className="w-full text-[2rem] font-bold text-black bg-secondary font-feature font-firago uppercase rounded-[1.5rem] py-[1.8rem] leading-[2.4rem] cursor-pointer lg:hidden"
          onClick={toggleShowContactForm}
        >
          {coverContent.button}
        </button>
      </div>
    </div>
  );
};
