import data from "../../assets/locales/translations.json";
import { useParking } from "../../App";
import { Swiper, SwiperSlide } from "swiper/react";

export const Benefits = () => {
  const { language } = useParking();

  const benefitContent = data[language].benefits;

  return (
    <div
      className="bg-white dark:bg-dark-brown text-black font-firago pt-8 scroll-mt-[8.1rem] 
      xl:pt-10 pl-[1.6rem] 
      "
      id="about"
    >
      <h3 className="font-bold text-[2rem] font-feature text-center capitalize dark:text-white lg:text-left xl:text-[3rem]">
        {benefitContent.title}
      </h3>
      <p className="mt-4 mb-8 text-center mx-[6.7rem] font-normal text-[1.6rem] leading-[2rem] dark:text-white lg:text-left lg:mx-0 lg:mt-2 lg:mb-12
      xl:mt-[1.6rem] xl:mb-16 xl:text-[2rem]">
        {benefitContent.description}
      </p>
      <Swiper slidesPerView={"auto"} spaceBetween={0} className="pr-[1.6rem]" >
        {benefitContent.benefits.map((benefit, index) => (
          <SwiperSlide key={index}>
            <div className="w-[20.8rem] h-[18.7rem] rounded-[1rem] bg-benefit-card bg-center bg-cover flex flex-col justify-between items-center p-2 pt-6 mx-[0.4rem] 
              lg:w-[30.8rem] lg:h-[28.2rem]  lg:mx-[1rem] lg:p-[1.9rem] lg:pt-8 xl:w-[37.2rem] xl:h-[33.9rem] xl:mx-[2.7rem] xl:p-[2.2rem] xl:pt-[2.383rem] xl:justify-start
              cursor-pointer">
              <img src="./images/benefits/parking.svg" alt="parkingLogo" />
              <p className="text-center font-medium text-[1.1rem] py-[0.625rem] leading-[1.3rem] lg:text-[1.7rem] lg:leading-8 xl:text-[1.8rem] xl:leading-[2.2rem] xl:pt-[4.64rem]">
                {benefit.text}
              </p>
              <img
                src="./icons/benefits/quotationMark.svg"
                alt="quotationMark"
                className="self-end mt-auto"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="hidden lg:block text-black text-[2rem] font-normal pt-[3rem] max-w-[100rem] leading-[2.6rem]">{benefitContent.paragaph}</div>
    </div >
  );
};
