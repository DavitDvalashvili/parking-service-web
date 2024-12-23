import data from "../../assets/locales/translations.json";
import { ContactBox } from "./Contact/ContactBox";
import { ContactForm } from "./Contact/ContactForm";
import { useParking } from "../../App";

export const Contact = () => {

  const { language } = useParking();

  const contactContent = data[language].contact;

  return (
    <div className="pb-0 scroll-mt-[8.1rem] lg:px-[6rem] font-firago xl:px-[10rem]"
      id="contact">
      <h3 className="hidden lg:block uppercase text-[2rem] font-bold font-feature pb-[4rem] text-black dark:text-white lg:text-[3rem]">{contactContent.title}</h3>
      <div className="lg:flex lg:items-center lg:justify-left gap-[11.1rem] xl:gap-[14.7rem]">
        <div className="hidden lg:block">
          <ContactBox />
        </div>
        <div className="w-full h-[36.2rem] relative lg:static lg:w-auto lg-h-auto">
          <div className="absolute top-0 left-0 w-full h-[40rem] z-40 lg:static lg:h-auto">
            <ContactForm variant="landing" />
          </div>
        </div>
      </div>
    </div>
  );
};
