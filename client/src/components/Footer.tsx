import data from "../assets/locales/translations.json";
import { useParking } from "../App";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


export const Footer = () => {
  const { language, darkMode } = useParking();

  const footerContent = data[language].footer;

  return (
    <footer className="bg-white dark:bg-dark-brown text-black flex flex-col items-start pt-[1.1rem] px-8 pb-[2.7rem] border-t
     border-black dark:border-white gap-[2.4rem] font-firago dark:text-white 

     bg-footer-mobileBg-light dark:bg-footer-mobileBg-dark lg:bg-footer-desktopBg-light lg:dark:bg-footer-desktopBg-dark
     
     bg-right-bottom bg-no-repeat
     lg:pt-[8rem] lg:pl-[6rem] lg:pr-[18.8rem] lg:pb-[11.4rem] lg:flex-row lg:justify-start lg:gap-[10.68rem]  xl:pl-[10rem] xl:pt-[10rem] xl:pr-[27.2rem] 
     xl:pb-[10.3rem] xl:gap-[22.7rem] mt-[1rem]">
      <div className="h-[4.1rem] mx-auto lg:mx-0 lg:h-[9.7rem] xl:h-[16.655rem] ">
        {darkMode && <img
          className="h-full"
          src="/images/footer/logoDark.svg"
          alt="Easy Park"
        />}
        {!darkMode && <img
          className="h-full"
          src="/images/footer/logoLight.svg"
          alt="Easy Park"
        />}
      </div>
      <div className="flex flex-col gap-4 font-normal text-[1.6rem] lg:gap-[3.2rem] xl:text-[2rem]">
        <h5 className="font-feature test font-feature font-bold uppercase leading-[90%]
        lg:mb-[0.9rem]">
          {footerContent.contact}
        </h5>
        <div className="flex gap-8 items-center uppercase lg:text-[1.8rem] lg:leading-[2.2rem] xl:text-[2rem]">
          <img
            className="x-[2.4rem] h-[2.4rem]"
            src={
              darkMode
                ? "/icons/footer/envelopeDark.svg"
                : "/icons/footer/envelopeLight.svg"
            }
            alt="envelope"
          />
          <a href={`mailto:${footerContent.email} `}>{footerContent.email}</a>
        </div>
        <div className="flex gap-8 items-center lg:text-[1.8rem] lg:leading-[2.2rem] xl:text-[2rem]">
          <img
            className="x-[2.4rem] h-[2.4rem]"
            src={
              darkMode
                ? "/icons/footer/phoneDark.svg"
                : "/icons/footer/phoneLight.svg"
            }
            alt="phone"
          />
          <a href={`tel:${footerContent.phone} `}>{footerContent.phone}</a>
        </div>
        <div className="flex gap-8 items-center font-feature uppercase lg:text-[1.8rem] lg:leading-[2.2rem] xl:text-[2rem]">
          <img
            className="x-[2.4rem] h-[2.4rem]"
            src={
              darkMode
                ? "/icons/footer/pinDark.svg"
                : "/icons/footer/pinLight.svg"

            }
            alt="address"
          />
          <a href="https://maps.app.goo.gl/asgFvY8rYLSf7Mk37" target="blank">
            {footerContent.address}
          </a>
        </div>
      </div>
      <div className="lg:ml-auto">
        <div className="flex gap-[4rem] mb-[1.276rem] lg:mb-[4.1rem] xl:gap-[5.245rem] xl:mb-[4rem]">
          <a href="www.facebook.com" target="blank">
            <FaFacebookF className="w-[2.4rem] h-[2.4rem] cursor-pointer" />
          </a>
          <a href="www.linkedin.com" target="blank">
            <FaLinkedinIn className="w-[2.4rem] h-[2.4rem] cursor-pointer" />
          </a>
          <a href="www.instagram.com" target="blank">
            <FaInstagram className="w-[2.4rem] h-[2.4rem] cursor-pointer" />
          </a>
        </div>
        <div className="font-feature flex text-[1.8rem] lg:text-[2rem] xl:gap-[1.8rem] justify-start items-center 
        gap-8 font-normal lg:min-w-[26rem]">
          <img
            src={
              darkMode
                ? "/icons/footer/papersDark.svg"
                : "/icons/footer/papersLight.svg"
            }
            alt={footerContent.terms}
          />
          <a href={footerContent.terms} target="blank">
            <span>{footerContent.terms}</span>
          </a>
        </div>
      </div>
    </footer>
  );
};
