import data from "../../assets/locales/translations.json";
import { useParking } from "../../App";
import { useState } from "react";

export const FAQ = () => {
  const { language } = useParking();
  const [activeQuestion, setActiveQuestion] = useState<number | undefined>(
    undefined
  );

  const toggleQuestion = (index: number) => {
    setActiveQuestion(activeQuestion == index ? undefined : index);
  };

  const faqContent = data[language].faq;
  return (
    <div className="font-firago py-8 bg-white dark:bg-dark-brown lg:py-[8rem] xl:py-[7rem] lg:max-w-[96rem] xl:max-w-[122rem] lg:mx-auto ">
      <h3 className="text-black text-[2rem] font-bold leading-[90%] text-center pb-8 font-feature dark:text-white lg:text-[2.4rem] lg:pb-[4.7rem]
      xl:text-[3.2rem] xl:pb-[6rem]">
        {faqContent.title}
      </h3>
      <div className="flex flex-col gap-[1rem] text-white dark:text-black lg:gap-[2rem]">
        {faqContent.faq.map((faq, index) => (
          <div
            key={index}
            className="py-[0.8rem] px-[2rem]  bg-primary dark:bg-secondary lg:rounded-[1rem] lg:py-[2.9rem] lg:px-[3rem] xl:py-[3.3rem] xl:px-[2rem]"
          >
            <div className="flex justify-between items-center  text-[1.4rem] lg:text-[2rem] xl:lg:text-[2.6rem]">
              <div className="leading-[1.7rem] font-semibold lg:leading-[2.2rem] xl:leading-[2.8rem]">{faq.question}</div>
              <div
                onClick={() => toggleQuestion(index)}
                className="cursor-pointer min-w-[2rem] w-[2rem] h-[2rem] lg:min-w-[2.4rem] lg:h-[2.4rem] xl:min-w-[4rem] xl:h-[4rem] "
              >
                <img src={`${activeQuestion !== index ? "/icons/processReview/plusLight.svg" : "/icons/processReview/minusLight.svg"}`} alt="plus&minus"
                  className="dark:hidden w-full h-full"
                />
                <img src={`${activeQuestion !== index ? "/icons/processReview/plusDark.svg" : "/icons/processReview/minusDark.svg"}`} alt="plus&minus"
                  className="hidden dark:inline-block w-full h-full"
                />
              </div>
            </div>
            {activeQuestion == index && (
              <div className=" pt-[1rem] pb-[0.7rem] pr-[2.4rem] xl:pr-[4rem] text-[1.3rem] font-normal lg:text-[2rem] lg:pt-[2.2rem] lg:pb-0 xl:pt-[2rem]">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
