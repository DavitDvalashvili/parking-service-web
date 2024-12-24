import data from "../../assets/locales/translations.json";
import { ContactBox } from "./Contact/ContactBox";
import { ContactForm } from "./Contact/ContactForm";
import { useParking } from "../../App";

type contact = {
  variant: "popup" | "landing";
};

export const Contact = ({ variant }: contact) => {
  const isPopup = variant === "popup";
  const { language, darkMode } = useParking();

  const contactContent = data[language].contact;

  return (
    <div className="pb-0 scroll-mt-[8.1rem] lg:scroll-mt-[13rem] xl:scroll-mt-[17.6rem] lg:px-[6rem] font-firago xl:px-[10rem] "
      id="contact">
      <h3 className="hidden lg:block uppercase text-[2rem] font-bold font-feature pb-[4rem] text-black dark:text-white lg:text-[3rem]">{contactContent.title}</h3>
      <div className="lg:flex lg:items-start lg:justify-left gap-[11.1rem] xl:gap-[14.7rem]">
        <div className="hidden lg:block">
          <ContactBox variant="landing" />
        </div>
        <div className="w-full h-[36.2rem] relative lg:static lg:w-auto lg:h-fit">
          <div className="absolute top-0 left-0 z-20 h-[40rem] w-full lg:static  lg:h-fit ">
            <ContactForm variant="landing" />
          </div>
          <div className="hidden lg:block   h-[16.7rem] w-[36rem] ml-auto">
            {!darkMode && (
              <img
                src="./images/contact/letterSendLight.svg"
                alt="letterSendLight"
                className=" h-full w-full ml-auto"
              />
            )}
            {darkMode && (
              <img
                src="./images/contact/letterSendDark.svg"
                alt="letterSendDark"
                className="w-full h-full ml-auto"
              />
            )}
          </div>
        </div>
      </div>
    </div >
  );
};
