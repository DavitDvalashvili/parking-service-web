import data from "../../assets/locales/translations.json";
import { useState } from "react";

import { useParking } from "../../App";

export const Services = () => {
  const { language } = useParking();
  const [activeService, setActiveService] = useState<number | undefined>(
    undefined
  );

  const serviceContent = data[language].services;

  return (
    <div
      className="bg-white text-black dark:bg-dark-brown dark:text-white px-8 font-firago font-bold  uppercase scroll-mt-[8.1rem] "
      id="service"
    >
      <h3 className="pt-[0.7rem] pb-[2rem] text-center text-[2rem]">
        {serviceContent.title}
      </h3>
      <div className="flex flex-col gap-4">
        {serviceContent.services.map((service, index) => (
          <div
            key={index}
            className="border-[0.08rem] border-black dark:border-white rounded-[2rem] py-2 px-4"
            onClick={() =>
              setActiveService(activeService === index ? undefined : index)
            }
          >
            <div className="flex justify-start items-center gap-[1.2rem] ">
              <div
                className="h-[6rem] w-[8.4rem] bg-no-repeat bg-auto bg-left "
                style={{ backgroundImage: `url(${service.image})` }}
              ></div>
              <h6 className="text-[1.7rem] max-w-[21.3rem]">
                {service.service}
              </h6>
            </div>
            {activeService === index && (
              <>
                <div
                  className={`font-bold text-[1.4rem]  ${service.description ? "mt-[1.1rem] mb-[0.7rem]" : ""
                    } `}
                >
                  {service.description}
                </div>
                <p
                  className={`font-normal text-[1.3rem]  ${service.text ? "mb-[1.1rem]" : ""
                    }`}
                >
                  {service.text}
                </p>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
