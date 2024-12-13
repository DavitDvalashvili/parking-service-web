import data from "../../assets/locales/translations.json";
import { useLanguage } from "../../App";
import { Swiper, SwiperSlide } from "swiper/react";

export const Benefits = () => {
  const { language } = useLanguage();

  const benefitContent = data[language].benefits;

  return (
    <div
      className="bg-white dark:bg-dark-brown text-black  pl-[1.6rem] font-firago pt-8 scroll-mt-[8.1rem]"
      id="about"
    >
      <h3 className="font-bold text-[2rem] font-feature text-center capitalize dark:text-white">
        {benefitContent.title}
      </h3>
      <div className="mt-4 mb-8 text-center mx-[6.7rem] font-normal text-[1.6rem] leading-[2rem] dark:text-white ">
        {benefitContent.description}
      </div>
      <Swiper slidesPerView={"auto"} spaceBetween={0}>
        {benefitContent.benefits.map((benefit, index) => (
          <SwiperSlide key={index}>
            <div className="w-[20.8rem] h-[18.7rem] rounded-[1rem] bg-benefit-card bg-center bg-cover flex flex-col justify-between items-center p-2 pt-6 mx-[0.4rem]">
              <img src="./images/benefits/parking.svg" alt="parkingLogo" />
              <p className="text-center font-medium text-[1.1rem] py-[0.625rem] leading-[1.3rem]">
                {benefit.text}
              </p>
              <img
                src="./icons/benefits/quotationMark.svg"
                alt="quotationMark"
                className="self-end"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
