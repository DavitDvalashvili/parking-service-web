import data from "../../assets/locales/translations.json";
import { useParking } from "../../App";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

export const Devices = () => {
  const { language } = useParking();

  const deviceContent = data[language].devices;

  return (
    <div
      className="bg-white dark:bg-dark-brown  pl-[1.6rem] font-firago pt-8 scroll-mt-[8.1rem]"
      id="device"
    >
      <h3 className="font-bold text-[2rem] font-feature text-center capitalize dark:text-white pb-8">
        {deviceContent.title}
      </h3>
      <Swiper slidesPerView={"auto"} spaceBetween={0}>
        {deviceContent.devices.map((device, index) => (
          <SwiperSlide key={index}>
            <div className="w-[20.8rem] h-[18.7rem] rounded-[1rem] mx-[0.4rem] pt-[1.1rem] shadow-customShadow">
              <img
                src={device.image}
                alt="device"
                className="mx-auto mb-[0.4rem]"
              />
              <Link to={`/device/${device.name}`}>
                <button className="w-full h-[4.5rem] bg-primary rounded-[1rem] text-white font-bold font-feature text-[1.6rem] cursor-pointer">
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
