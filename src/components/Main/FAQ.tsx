import data from "../../assets/locales/translations.json";
import { BiMinus } from "react-icons/bi";
import { BiPlus } from "react-icons/bi";
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
    <div className="font-firago py-8 bg-white dark:bg-dark-brown">
      <h3 className="text-black text-[2rem] font-bold leading-[90%] text-center pb-8 font-feature dark:text-white">
        {faqContent.title}
      </h3>
      <div className="flex flex-col gap-[1rem] text-white dark:text-black">
        {faqContent.faq.map((faq, index) => (
          <div
            key={index}
            className="py-[0.8rem] px-[2rem]  bg-primary dark:bg-secondary"
          >
            <div className="flex justify-between items-center  text-[1.4rem]">
              <div className="leading-[1.7rem] font-bold">{faq.question}</div>
              <div
                onClick={() => toggleQuestion(index)}
                className="cursor-pointer"
              >
                {activeQuestion == index && (
                  <BiMinus className="text-[3.4295rem] h-[3.4rem] stroke-[1]" />
                )}
                {activeQuestion !== index && (
                  <BiPlus className="text-[3.4295rem] h-[3.4rem] stroke-[1]" />
                )}
              </div>
            </div>
            {activeQuestion == index && (
              <div className="pt-[1rem] pb-[0.7rem] text-[1.3rem] font-normal">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
