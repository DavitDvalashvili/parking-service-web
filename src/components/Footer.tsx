import data from "../assets/locales/translations.json";
import { useParking } from "../App";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


export const Footer = () => {
  const { language, darkMode } = useParking();

  const footerContent = data[language].footer;

  return (
    <footer className="bg-white dark:bg-dark-brown text-black flex flex-col items-start pt-[1.1rem] px-8 pb-[2.7rem] border-t border-black dark:border-white gap-[2.4rem] font-firago dark:text-white">
      <div className="h-[4.1rem] mx-auto">
        <img
          className="h-full"
          src={
            darkMode
              ? "/images/footer/logoDark.svg"
              : "/images/footer/logoLight.svg"
          }
          alt="Easy Park"
        />
      </div>
      <div className="flex flex-col gap-4  font-normal text-[1.6rem]">
        <h5 className="font-feature test font-feature text-[1.6rem] font-bold uppercase leading-[90%]">
          {footerContent.contact}
        </h5>
        <div className="flex gap-8 items-center uppercase">
          <img
            src={
              darkMode
                ? "/icons/footer/envelopeDark.svg"
                : "/icons/footer/envelopeLight.svg"
            }
            alt="envelope"
          />
          <a href={`mailto:${footerContent.email} `}>{footerContent.email}</a>
        </div>
        <div className="flex gap-8 items-center">
          <img
            src={
              darkMode
                ? "/icons/footer/phoneDark.svg"
                : "/icons/footer/phoneLight.svg"
            }
            alt="phone"
          />
          <a href={`tel:${footerContent.phone} `}>{footerContent.phone}</a>
        </div>
        <div className="flex gap-8 items-center font-feature uppercase">
          <img
            src={
              darkMode
                ? "/icons/footer/pinDark.svg"
                : "/icons/footer/pinLight.svg"
            }
            alt="phone"
          />
          <a href="https://maps.app.goo.gl/asgFvY8rYLSf7Mk37" target="blank">
            {footerContent.address}
          </a>
        </div>
      </div>
      <div>
        <div className="flex gap-[4rem] mb-[1.276rem]">
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
        <div className="font-feature flex text-[1.8rem] justify-start items-center gap-8 font-normal">
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
