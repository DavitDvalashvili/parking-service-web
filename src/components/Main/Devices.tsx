import data from "../../assets/locales/translations.json";
import { useParking } from "../../App";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

export const Devices = () => {
  const { language } = useParking();

  const deviceContent = data[language].devices;

  return (
    <div
      className="dark:bg-dark-brown bg-white font-firago pt-8 scroll-mt-[8.1rem]  lg:pt-[8rem] pl-[1.6rem] lg:pl-[6rem] xl:pl-[10rem]"
      id="device"
    >
      <h3 className="font-bold text-[2rem] font-feature text-center capitalize dark:text-white pb-8 lg:text-left xl:pb-[4rem] xl:text-[3rem] ">
        {deviceContent.title}
      </h3>

      <Swiper slidesPerView={"auto"} spaceBetween={0} className="pr-[1.6rem]  lg:pr-[-5.4rem]  xl:pr-[7.25rem] md:flex md:justify-center lg:gap-[10rem] xl:lg:gap-[14.5rem]">
        {deviceContent.devices.map((device, index) => (
          <SwiperSlide key={index}>
            <div className="w-[20.8rem] rounded-[1rem] mx-[0.4rem] pt-[1.1rem] shadow-customShadow lg:w-[16rem] xl:w-[20rem] lg:shadow-none lg:pt-0
            lg:mx-[10rem] xl:mx-[14.5rem]">
              <img
                src={device.image}
                alt="device"
                className="mx-auto mb-[0.4rem] lg:mb-[2.8rem] lg:w-[6.8rem] xl:mb-[0.7rem] xl:w-[10.3rem]"
              />
              <Link to={`/device/${device.name}`}>
                <button className="w-full h-[4.5rem] bg-primary rounded-[1rem] text-white font-bold font-feature text-[1.6rem] cursor-pointer
                lg:h-[3.4rem] lg:w-[16rem] lg:ml-auto xl:h-[4rem] xl:w-[20rem]">
                  {deviceContent.button}
                </button>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
