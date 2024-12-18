import data from "../../assets/locales/translations.json";
import { useState } from "react";

import { useParking } from "../../App";

export const ServicesDesktop = () => {
    const { language } = useParking();
    const [activeService, setActiveService] = useState<number | undefined>(
        undefined
    );

    const serviceContent = data[language].services;

    return (
        <div className="font-firago pt-[8.1em] px-[6rem] xl:pt-[10rem] xl:px-[10rem]">
            <h3
                className="text-left text-[2rem] uppercase font-bold font-feature pb-[0.5rem] dark:text-white
            xl:[3rem] xl:pb-[1.6rem]"
            >
                {serviceContent.title}
            </h3>
            <p className="text-[1.6rem] font-normal dark:text-white xl:text-[2rem]">
                {serviceContent.paragraph}
            </p>
            <div className="flex flex-col justify-start pt-[4rem]">
                <div className=" w-fit flex flex-col items-center mx-[23rem] xl:mx-[33rem]">
                    <div
                        className="w-[12.7rem]  h-[12.4rem] rounded-[2rem] pl-[1.1rem] pt-[1.8rem] pb-[0.8rem] pr-[1.1rem] relative
                    xl:w-[22.3rem]  xl:h-[22.7rem] xl:pl-[1.966rem] xl:pt-[3.237rem] xl:pb-[1.39rem] xl:pr-[1.966rem]
                     bg-secondary dark:bg-white shadow-customShadow"
                    >
                        <div
                            className="h-[6.2rem] w-[10.5rem] bg-no-repeat bg-cover bg-left xl:h-[11.15rem] xl:w-[18.76rem]"
                            style={{
                                backgroundImage: `url(${serviceContent.services[0].image})`,
                            }}
                        ></div>
                        <h3 className="text-[1rem] font-bold leading-[1.2rem] uppercase font-feature mt-[1.2rem] xl:mt-[2.15rem] xl:text-[1.8rem] xl:leading-[2.15rem]">
                            {serviceContent.services[0].title}
                        </h3>
                        {/* <div className=" bg-secondary absolute bottom-[15.6rem] right-[-15rem] rounded-[1rem] pt-[0.8rem] pl-[0.8rem] pb-[0.8rem] ">
                            <div className="text-[1.4rem] font-bold mb-[0.5rem]">{serviceContent.services[1].description}</div>
                            <p className="text-[1.3rem] font-normal w-[22.6rem]">{serviceContent.services[1].paragraph}</p>
                        </div> */}
                    </div>
                    <div className="w-[0.1rem] h-[9rem] bg-secondary"></div>
                </div>
                <div className="flex justify-start items-center ">
                    <div className="min-w-[57.6rem] xl:min-w-[85.4rem] flex justify-start items-center">
                        <div
                            className="w-[12.7rem]  h-[12.5rem] rounded-[2rem] border border-secondary pl-[1.1rem] pt-[1.5rem] pb-[0.7rem] relative dark:text-white
                            xl:w-[22.7rem]  xl:h-[22.3rem]  xl:pt-[2.676rem] xl:pb-[1.249rem] "
                        >
                            <div
                                className="h-[7.8rem] w-[10.5rem] bg-no-repeat bg-cover bg-left xl:w-[18.767rem] xl:h-[13.915rem]  "
                                style={{
                                    backgroundImage: `url(${serviceContent.services[1].image})`,
                                }}
                            ></div>
                            <h3 className="text-[1rem] font-bold leading-[1.2rem] uppercase font-feature xl:text-[1.8rem] xl:leading-[2.15rem] xl:mt-[0.2rem] text-primary dark:text-white">
                                {serviceContent.services[1].title}
                            </h3>
                            {/* <div className=" bg-secondary absolute bottom-[15.6rem] right-[-15rem] rounded-[1rem] pt-[0.8rem] pl-[0.8rem] pb-[0.8rem] ">
                            <div className="text-[1.4rem] font-bold mb-[0.5rem]">{serviceContent.services[1].description}</div>
                            <p className="text-[1.3rem] font-normal w-[22.6rem]">{serviceContent.services[1].paragraph}</p>
                        </div> */}
                        </div>
                        <div className="w-[10.3rem] h-[0.1rem] bg-secondary"></div>
                        <div
                            className="w-[12.7rem]  h-[12.5rem] rounded-[2rem] relative bg-secondary dark:bg-white shadow-customShadow
                            xl:w-[22.7rem]  xl:h-[22.3rem] xl:pt-[0.2rem]"
                        >
                            <div
                                className="h-[10.3rem] w-[10.6rem] bg-no-repeat bg-cover bg-left xl:w-[18.96rem] xl:h-[18.375rem] "
                                style={{
                                    backgroundImage: `url(${serviceContent.services[3].image})`,
                                }}
                            ></div>
                            <h3 className="text-[1rem] font-bold leading-[1.2rem] uppercase font-feature pl-[1.2rem] mt-[-0.5rem] xl:text-[1.8rem] xl:leading-[2.15rem]">
                                {serviceContent.services[3].title}
                            </h3>
                            {/* <div className=" bg-secondary absolute bottom-[15.6rem] right-[-15rem] rounded-[1rem] pt-[0.8rem] pl-[0.8rem] pb-[0.8rem] ">
                            <div className="text-[1.4rem] font-bold mb-[0.5rem]">{serviceContent.services[1].description}</div>
                            <p className="text-[1.3rem] font-normal w-[22.6rem]">{serviceContent.services[1].paragraph}</p>
                        </div> */}
                        </div>
                        <div className="w-[9.2rem] h-[0.1rem] bg-secondary xl:w-[7rem]"></div>
                        <div
                            className="w-[12.7rem]  h-[12.5rem] rounded-[2rem] border border-secondary pl-[1.5rem] pt-[0.5rem] relative dark:text-white 
                             xl:w-[22.7rem]  xl:h-[22.3rem]  xl:pt-[0.896rem] xl:pl-[1.08rem]"
                        >
                            <div
                                className="h-[8.8rem] w-[7.1rem] bg-no-repeat bg-cover bg-left xl:w-[12.69rem] xl:h-[15.7rem] xl:ml-[1.6rem]"
                                style={{
                                    backgroundImage: `url(${serviceContent.services[4].image})`,
                                }}
                            ></div>
                            <h3 className="text-[1rem] font-bold leading-[1.2rem] uppercase font-feature pt-2 xl:text-[1.8rem] xl:leading-[2.15rem] xl:pt-[0.9rem] text-primary dark:text-white">
                                {serviceContent.services[4].title}
                            </h3>
                            {/* <div className=" bg-secondary absolute bottom-[15.6rem] right-[-15rem] rounded-[1rem] pt-[0.8rem] pl-[0.8rem] pb-[0.8rem] ">
                            <div className="text-[1.4rem] font-bold mb-[0.5rem]">{serviceContent.services[1].description}</div>
                            <p className="text-[1.3rem] font-normal w-[22.6rem]">{serviceContent.services[1].paragraph}</p>
                        </div> */}
                        </div>
                    </div>
                    <div className="h-[0.1rem] bg-secondary w-full"></div>
                    <div
                        className="w-[12.8rem]  h-[12.5rem] rounded-[2rem] border border-secondary pl-[0.9rem] pt-[0.7rem] pb-[0.5rem] relative dark:text-white
                        xl:w-[22.7rem]  xl:h-[22.3rem] xl:pt-[1.249rem] xl:pl-[1.096rem]"
                    >
                        <div
                            className="h-[8.3rem] w-[9.3rem] bg-no-repeat bg-cover bg-left xl:h-[14.8rem] xl:w-[17.025rem] xl:ml-[1.7rem]"
                            style={{
                                backgroundImage: `url(${serviceContent.services[5].image})`,
                            }}
                        ></div>
                        <h3 className="text-[1rem] font-bold leading-[1.2rem] uppercase font-feature mt-[0.5rem] xl:text-[1.8rem] xl:leading-[2.15rem] xl:mt-[1.414rem] text-primary dark:text-white">
                            {serviceContent.services[5].title}
                        </h3>
                        {/* <div className=" bg-secondary absolute bottom-[15.6rem] right-[-15rem] rounded-[1rem] pt-[0.8rem] pl-[0.8rem] pb-[0.8rem] ">
                            <div className="text-[1.4rem] font-bold mb-[0.5rem]">{serviceContent.services[1].description}</div>
                            <p className="text-[1.3rem] font-normal w-[22.6rem]">{serviceContent.services[1].paragraph}</p>
                        </div> */}
                    </div>
                    <div className="w-[11.4rem] h-[0.1rem] bg-secondary xl:w-[1.5rem]"></div>
                    <div
                        className="w-[12.7rem]  h-[12.5rem] rounded-[2rem] border border-secondary pl-[1.1rem] pt-[1.5rem] pb-[0.7rem] relative dark:text-white
                        xl:w-[22.7rem]  xl:h-[22.3rem] xl:pt-[3.746rem] xl:pl-[1.6rem]"
                    >
                        <div
                            className="h-[6rem] w-[10.8rem] bg-no-repeat bg-cover bg-left xl:h-[10.7rem] xl:w-[19.7rem]"
                            style={{
                                backgroundImage: `url(${serviceContent.services[6].image})`,
                            }}
                        ></div>
                        <h3 className="text-[1rem] font-bold leading-[1.2rem] uppercase font-feature  mt-[1.2rem] xl:text-[1.8rem] xl:leading-[2.15rem] xl:mt-[3.14rem] text-primary dark:text-white">
                            {serviceContent.services[6].title}
                        </h3>
                        {/* <div className=" bg-secondary absolute bottom-[15.6rem] right-[-15rem] rounded-[1rem] pt-[0.8rem] pl-[0.8rem] pb-[0.8rem] ">
                            <div className="text-[1.4rem] font-bold mb-[0.5rem]">{serviceContent.services[1].description}</div>
                            <p className="text-[1.3rem] font-normal w-[22.6rem]">{serviceContent.services[1].paragraph}</p>
                        </div> */}
                    </div>
                </div>
                <div className="flex items-top ml-[29.35rem] h-[17.6rem] xl:h-[28.65rem] xl:ml-[44.35rem]">
                    <div className="w-[11.6rem] h-[11.4rem] border-l border-b border-secondary xl:w-[19.5rem] xl:h-[17.5rem]"></div>
                    <div
                        className="w-[12.8rem]  h-[12.4rem] rounded-[2rem] border border-secondary pl-[0.9rem] pt-[0.4rem] relative mt-[5.2rem] bg-secondary dark:bg-white
                        shadow-customShadow xl:w-[22.7rem]  xl:h-[22.3rem] xl:pt-[0.72rem] "
                    >
                        <div
                            className="h-[8.7rem] w-[8.7rem] bg-no-repeat bg-cover bg-center ml-[1.1rem] xl:h-[14.646rem] xl:w-[15.428rem] xl:ml-[2.6rem]"
                            style={{
                                backgroundImage: `url(${serviceContent.services[2].image})`,
                            }}
                        ></div>
                        <h3 className="text-[1rem] font-bold leading-[1.2rem] uppercase font-feature mt-[0.2rem] xl:text-[1.8rem] xl:leading-[2.15rem] xl:mt-[1.6rem]">
                            {serviceContent.services[2].title}
                        </h3>
                        {/* <div className=" bg-secondary absolute bottom-[15.6rem] right-[-15rem] rounded-[1rem] pt-[0.8rem] pl-[0.8rem] pb-[0.8rem] ">
                            <div className="text-[1.4rem] font-bold mb-[0.5rem]">{serviceContent.services[1].description}</div>
                            <p className="text-[1.3rem] font-normal w-[22.6rem]">{serviceContent.services[1].paragraph}</p>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};
