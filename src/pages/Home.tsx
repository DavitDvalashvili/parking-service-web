import data from "../assets/locales/translations.json";
import { Services } from "../components/Home/Services";
import { useLanguage } from "../App";
import { Benefits } from "../components/Home/Benefits";
import { Devices } from "../components/Home/Devices";
//import { Contact } from "../components/Home/Contact";
import { FAQ } from "../components/Home/FAQ";

export const Home = () => {
  const { language } = useLanguage();

  const coverContent = data[language].cover;

  return (
    <div>
      <section className="font-bold text-[2rem] font-firago font-feature pt-4 text-black dark:text-white dark:bg-dark-brown">
        <h2 className="mx-auto text-center uppercase max-w-[26.1rem]">
          {coverContent.title}
        </h2>
        <div className="w-full h-[26.3rem] bg-mobile-light dark:bg-mobile-dark bg-cover bg-top border-t-[0.001rem] border-white dark:border-dark-brown"></div>
      </section>
      <Services />
      <Benefits />
      <Devices />
      <FAQ />
      {/* <Contact /> */}
      {/* <div className="bg-green-500 w-[5rem] h-[5rem] sticky bottom-0 left-0">
        <button>დაგვიკავშირდით</button>
      </div> */}
    </div>
  );
};
