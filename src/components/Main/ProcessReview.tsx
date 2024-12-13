import data from "../../assets/locales/translations.json";
import { useLanguage } from "../../App";

export const ProcessReview = () => {
  const { language } = useLanguage();

  const processContent = data[language].process;

  return (
    <div className="pt-8 font-firago px-8 flex justify-center dark:bg-dark-brown">
      <h3 className="hidden">{processContent.title}</h3>
      <div
        className=" h-[35.5rem] w-[35rem] border-[0.08rem] border-primary rounded-full 
        flex flex-col justify-between px-[0.8rem]  py-[1.2rem] text-black uppercase font-bold 
        text-[1rem] font-feature dark:bg-white"
      >
        <div className="flex justify-center items-center flex-col">
          <img src="/images/process/parking.svg" alt={processContent.parking} />
          <p className="pt-[0.5rem]">{processContent.parking}</p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex justify-center items-center flex-col ">
            <img
              src="/images/process/takeCard.svg"
              alt={processContent.takeCard}
            />
            <p className="pt-[0.5rem]">{processContent.takeCard}</p>
          </div>
          <div className="flex justify-center items-center flex-col w-[12.1rem]">
            <img
              src="/images/process/thanking.svg"
              alt={processContent.thanking}
            />
            <p className="pt-[0.5rem] text-center w-[12.1rem] ">
              {processContent.thanking}
            </p>
          </div>
          <div className="flex justify-center items-center flex-col ">
            <img
              src="/images/process/returnCard.svg"
              alt={processContent.returnCard}
            />
            <p className="pt-[0.5rem] text-center ">
              {processContent.returnCard}
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col">
          <img src="/images/process/paying.svg" alt={processContent.parking} />
          <p className="pt-[0.5rem] text-center w-[17.1rem] ">
            {processContent.paying}
          </p>
        </div>
      </div>
    </div>
  );
};
