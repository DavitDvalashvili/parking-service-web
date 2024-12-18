import data from "../../assets/locales/translations.json";
import { useState } from "react";

import { useParking } from "../../App";

import { GeHeader, GeContact } from "../../assets/locales/translations.js"


export const ServicesDesktop = () => {
    const { language } = useParking();
    const [activeService, setActiveService] = useState<number | undefined>(
        undefined
    );

    const serviceContent = data[language].services;




    return (
        <div className="bg-red-600 font-firago p-[10rem]">
            <h3 className="pt-[0.7rem] pb-[2rem] text-center text-[2rem]">
                {serviceContent.title}
            </h3>
            <p>{serviceContent.paragraph}</p>
            <div className="w-[12.7rem]  h-[12.5rem] rounded-[2rem] border-[0.05rem] border-secondary pl-[1.1rem] pt-[1.5rem] pb-[0.7rem] relative ">
                <div
                    className="h-[7.8rem] w-[10.5rem] bg-no-repeat bg-cover bg-left "
                    style={{ backgroundImage: `url(${serviceContent.services[1].image})` }}
                ></div>
                <h3 className="text-[1rem] font-semibold leading-[1.2rem] uppercase font-feature">{serviceContent.services[1].title}</h3>
                <div className=" bg-secondary absolute bottom-[15.6rem] right-[-15rem] rounded-[1rem] pt-[0.8rem] pl-[0.8rem] pb-[0.8rem] ">
                    <div className="text-[1.4rem] font-bold mb-[0.5rem]">{serviceContent.services[1].description}</div>
                    <p className="text-[1.3rem] font-normal w-[22.6rem]">{serviceContent.services[1].paragraph}</p>
                </div>
            </div>
        </div>
    )
}
