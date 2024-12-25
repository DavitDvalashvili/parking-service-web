import data from "../assets/locales/translations.json";
import { ContactButton } from "../components/ContactButton";
import { useParking } from "../App";
import { ContactPopup } from "../components/Main/Contact/ContactPopup";
import { useState } from "react";

type image = {
  image: string,
  id: number
}

export const Device = () => {
  const { showContactForm, toggleShowContactForm, language } = useParking();
  const deviceContent = data[language].devicesPage;

  const [activeImage, setActiveImage] = useState<image>(deviceContent.images[0])


  return <div className="max-w-[76.8rem] mx-auto lg:max-w-[192rem] mt-[8.1rem] lg:mt-[13rem] font-firago text-black dark:text-white">
    <div className=" px-8 pt-4 pb-[3.5rem]  lg:flex justify-center lg:pt-[10rem] lg:px-[2rem] lg:gap-[23.2rem] xl:px-[10rem] xl:gap-[26.4rem]">
      <div>
        <div
          className="w-full h-[23.5rem] lg:h-[44rem] xl:h-[66.2rem]"
        >
          <img src={activeImage?.image} alt={`${activeImage?.id} + ${activeImage?.id}`} className="h-full mx-auto" />
        </div>
        <div className="flex justify-left items-center flex-wrap gap-y-[1.6rem] pt-[1.7rem] px-[2.5rem] lg:w-[34.2rem] lg:px-0 lg:pt-[4.4rem] xl:w-[54.5rem]">
          {deviceContent.images.map((image) => (
            <div key={image.id} className="w-1/3 flex justify-center items-center "
              onClick={() => { setActiveImage(image) }}
            >
              <img src={image.image} alt={image.image} className="h-[7.6rem] xl:h-[13.9rem]" />
            </div>
          ))}

        </div>

      </div>
      <div className="lg:max-w-[60rem] xl:max-w-[85rem]">
        <h2 className="text-[1.8rem] font-bold text-center pt-[2.5rem] font-feature lg:pt-0 pb-[1.2rem] lg:text-left lg:text[2.4rem] 
        lg:pb-[2.4rem] xl:pb-[4rem]">{deviceContent.name}</h2>
        <div className="text-[1.2rem] font-normal pb-[1.6rem] lg:text-[2rem]">
          <p>{deviceContent.paragraph1}</p>
          <p>{deviceContent.paragraph2}</p>
          <p>{deviceContent.paragraph3}</p>
        </div>
        <div className="flex flex-col gap-[1.6rem] lg:text-[2rem] lg:pb-[2.4rem] xl:pb-[4.4rem]">
          {deviceContent.bullets.map(bullet =>
          (<div className="flex justify-start items-center gap-2 xl:gap-[2rem] ">
            <img src="/icons/device/check.svg" alt="check" />
            <span>{bullet.bullet}</span>
          </div>))}
        </div>
        <button className="text-[1.4rem] lg:text-[1.6rem] xl:[1.8rem] font-bold text-white bg-primary dark:text-black dark:bg-secondary w-[18rem] h-[5rem]
          xl:w-[22.4rem] xl:h-[6rem] font-firago font-feature rounded-[1.5rem] hidden lg:inline-block uppercase"
          onClick={() => { toggleShowContactForm() }}>
          {deviceContent.button}
        </button>
      </div>
    </div>
    <div className="hidden lg:block pt-[10.7rem] px-[6rem] pb-[12.7rem]">
      <h3 className="text-[1.8rem] font-bold font-feature uppercase pb-[4.6rem] xl:text-[2rem]">{deviceContent.title}</h3>
      <div className="flex justify-start items-center gap-[7.3rem]">
        <div className="border border-black dark:border-white rounded-[2rem] w-[33rem] h-[32.5rem] pt-8 pb-[1.2rem] flex flex-col justify-between items-center">
          <div>
            <img src="/images/devices/device02.svg" alt="device" className="h-[23.5rem]" />
          </div>
          <button
            className="text-[1.4rem] lg:text-[1.6rem] xl:[1.8rem] font-bold text-white bg-primary w-[18rem] h-[5rem]
            xl:w-[22.4rem] xl:h-[6rem] font-firago font-feature rounded-[1.5rem] hidden lg:inline-block uppercase dark:bg-secondary dark:text-black"
          >{deviceContent.detailButton}</button>
        </div>
        <div className="border border-black dark:border-white rounded-[2rem] w-[33rem] h-[32.5rem] pt-8 pb-[1.2rem] flex flex-col justify-between items-center">
          <div>
            <img src="/images/devices/device02.svg" alt="device" className="h-[23.5rem]" />
          </div>
          <button
            className="text-[1.4rem] lg:text-[1.6rem] xl:[1.8rem] font-bold text-white bg-primary w-[18rem] h-[5rem]
            xl:w-[22.4rem] xl:h-[6rem] font-firago font-feature rounded-[1.5rem] hidden lg:inline-block uppercase dark:bg-secondary dark:text-black"
          >{deviceContent.detailButton}</button>
        </div>
      </div>
    </div>
    {
      showContactForm &&
      <ContactPopup />
    }
    <ContactButton />
  </div >;
};
