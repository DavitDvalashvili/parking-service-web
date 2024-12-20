import data from "../../assets/locales/translations.json";
import { useParking } from "../../App";

export const ProcessReview = () => {
  const { language } = useParking();

  const processContent = data[language].process;

  return (
    <div className="pt-8 font-firago px-8 flex justify-center dark:bg-dark-brown scroll-mt-[8.1rem] lg:block lg:pt-[8rem] lg:px-0">
      <h3 className="hidden lg:block font-bold text-black dark:text-white text-[2rem] text-left lg:pb-[4.5rem] lg:px-[6rem] uppercase xl:text-[3rem]
      font-feature xl:px-[10rem] xl:pb-[3rem]">{processContent.title}</h3>
      <div
        className=" h-[35.5rem] w-[35rem] border-[0.08rem] border-primary rounded-full flex flex-col justify-between px-[0.8rem]  py-[1.2rem] text-black uppercase font-bold 
        text-[1rem] font-feature dark:bg-white lg:border-none lg:text-[1.6rem] lg:rounded-none lg:w-auto lg:h-auto lg:flex-row lg:justify-between lg:px-[6rem] lg:p-0 lg:dark:bg-dark-darkBrown
         lg:dark:text-white lg:py-[3rem] xl:px-[10rem]"
      >
        <div className="justify-end items-center flex-col hidden lg:flex">
          <img
            src="/images/process/takeCard.svg"
            className="lg:w-[13.8rem] xl:lg:w-[21.1rem]"
            alt={processContent.takeCard}
          />
          <p className="pt-[0.5rem] lg:pt-0 lg:order-first lg:pb-[3rem]">{processContent.takeCard}</p>
        </div>
        <div className="flex justify-end items-center flex-col ">
          <img src="/images/process/parking.svg"
            className="lg:w-[18.5rem] xl:w-[25.9rem]"
            alt={processContent.parking} />
          <p className="pt-[0.5rem] lg:pt-0 lg:order-first lg:pb-[3rem]">{processContent.parking}</p>
        </div>
        <div className="flex justify-between items-center lg:items-end">
          <div className="flex justify-center items-center flex-col lg:hidden ">
            <img
              src="/images/process/takeCard.svg"
              alt={processContent.takeCard}
            />
            <p className="pt-[0.5rem]">{processContent.takeCard}</p>
          </div>
          <div className="flex justify-center items-center flex-col w-[12.1rem] lg:hidden">
            <img
              src="/images/process/thanking.svg"
              alt={processContent.thanking}
            />
            <p className="pt-[0.5rem] text-center w-[12.1rem] ">
              {processContent.thanking}
            </p>
          </div>
          <div className="flex justify-center items-center flex-col lg:h-full lg:justify-end">
            <img
              src="/images/process/returnCard.svg"
              className="lg:w-[13.8rem] xl:w-[21.1rem]"
              alt={processContent.returnCard}
            />
            <p className="pt-[0.5rem] text-center lg:pt-0 lg:order-first lg:pb-[3rem]">
              {processContent.returnCard}
            </p>
          </div>

        </div>
        <div className="flex justify-center items-center flex-col lg:justify-end">
          <img src="/images/process/paying.svg"
            className="lg:w-[13.8rem] xl:w-[21.1rem]"
            alt={processContent.parking} />
          <p className="pt-[0.5rem] text-center w-[17.1rem] lg:pt-0 lg:order-first lg:pb-[2rem] lg:w-[20.9rem]">
            {processContent.paying}
          </p>
        </div>
        <div className="hidden justify-end items-center flex-col w-[12.1rem] lg:flex lg:w-auto">
          <img
            src="/images/process/thanking.svg"
            className="lg:w-[21.8rem] xl:w-[30.9rem]"
            alt={processContent.thanking}
          />
          <p className="pt-[0.5rem] text-center w-[12.1rem] lg:pt-0 lg:order-first lg:w-[27.8rem] lg:pb-[1.2rem]">
            {processContent.thanking}
          </p>
        </div>
      </div>
    </div>
  );
};
