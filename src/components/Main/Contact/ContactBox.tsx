import data from "../../../assets/locales/translations.json";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { useParking } from "../../../App";

export const ContactBox = () => {
    const { language, darkMode } = useParking();

    const contactContent = data[language].contact.contactInfo;

    return (
        <div className="w-[43.4rem] h-[35rem] border-[0.05rem] border-black rounded-[1rem] px-[2.2rem] py-[2.6rem] text-[1.8rem] font-firago uppercase font-feature
        flex flex-col justify-between xl:w-[51.3rem] xl:h-[37rem] xl:px-[2rem] xl:py-[2.7rem] xl:text-[2rem] dark:bg-black dark:text-white">
            <div>
                <h5 className=" font-bold leading-[90%] mb-[4rem]">
                    {contactContent.contact}
                </h5>
                <div className="flex flex-col gap-[3.2rem]  leading-[2.2rem] font-normal">
                    <div className="flex gap-8 items-center ">
                        <img
                            className="x-[2.4rem] h-[2.4rem] xl:x-[3.2rem] xl:h-[3.2rem]"
                            src={
                                darkMode
                                    ? "/icons/footer/envelopeDark.svg"
                                    : "/icons/footer/envelopeLight.svg"
                            }
                            alt="envelope"
                        />
                        <a href={`mailto:${contactContent.email} `}>{contactContent.email}</a>
                    </div>
                    <div className="flex gap-8 items-center ">
                        <img
                            className="x-[2.4rem] h-[2.4rem] xl:x-[3.2rem] xl:h-[3.2rem]"
                            src={
                                darkMode
                                    ? "/icons/footer/phoneDark.svg"
                                    : "/icons/footer/phoneLight.svg"
                            }
                            alt="phone"
                        />
                        <a href={`tel:${contactContent.phone} `}>{contactContent.phone}</a>
                    </div>
                    <div className="flex gap-8 items-center ">
                        <img
                            className="x-[2.4rem] h-[2.4rem] xl:x-[3.2rem] xl:h-[3.2rem]"
                            src={
                                darkMode
                                    ? "/icons/footer/pinDark.svg"
                                    : "/icons/footer/pinLight.svg"

                            }
                            alt="address"
                        />
                        <a href="https://maps.app.goo.gl/asgFvY8rYLSf7Mk37" target="blank">
                            {contactContent.address}
                        </a>
                    </div>
                </div>

            </div>
            <div className="flex gap-[4rem] xl:gap-[5.2rem]">
                <a href="www.facebook.com" target="blank">
                    <FaFacebookF className="w-[2.4rem] h-[2.4rem] cursor-pointer xl:w-[3.2rem] xl:h-[3.2rem]" />
                </a>
                <a href="www.linkedin.com" target="blank">
                    <FaLinkedinIn className="w-[2.4rem] h-[2.4rem] cursor-pointer xl:w-[3.2rem] xl:h-[3.2rem]" />
                </a>
                <a href="www.instagram.com" target="blank">
                    <FaInstagram className="w-[2.4rem] h-[2.4rem] cursor-pointer xl:w-[3.2rem] xl:h-[3.2rem]" />
                </a>
            </div>
        </div>

    )
}
