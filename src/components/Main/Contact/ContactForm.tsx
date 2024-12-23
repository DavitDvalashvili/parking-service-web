import data from "../../../assets/locales/translations.json";
import { useParking } from "../../../App";
import { useState } from "react";

type contact = {
    variant: "popup" | "landing";
};
export const ContactForm = ({ variant }: contact) => {
    const isPopup = variant === "popup";
    const [firstNameErr, setFirstNameErr] = useState<string | undefined>(
        undefined
    );
    const [lastNameErr, setLastNameErr] = useState<string | undefined>(undefined);
    const [emailErr, setEmailErr] = useState<string | undefined>(undefined);
    const [numberErr, setNumberErr] = useState<string | undefined>(undefined);

    const { language } = useParking();

    const contactContent = data[language].contact.contactForm;

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    const handleChange = (
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        handleError();
    };

    const handleError = () => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const mobileRegex =
            /^(511|514|551|552|555|557|558|559|568|570|571|574|577|579|591|592|593|595|596|597|598|599)\d{5}$/;
        setFirstNameErr(
            formData.firstName === "" ? "ველის შევსება სავალდებულოა" : undefined
        );
        setLastNameErr(
            formData.lastName === "" ? "ველის შევსება სავალდებულოა" : undefined
        );
        setNumberErr(
            formData.phoneNumber === ""
                ? "ველის შევსება სავალდებულოა"
                : !mobileRegex.test(formData.phoneNumber)
                    ? "ტელეფონის ნომრის ფორმატი არასწორია"
                    : undefined
        );
        setEmailErr(
            formData.email === ""
                ? "ველის შევსება სავალდებულოა"
                : !emailRegex.test(formData.email)
                    ? "მეილის ფორმატი არასწორია"
                    : undefined
        );
    };

    return (
        <div className="bg-white dark:bg-dark-brown font-firago px-8 pb-[2rem]  lg:w-[59.5rem] lg:p-0">
            <h3 className="text-[2rem] text-center font-bold uppercase font-feature leading-[2.4rem] pb-[1.8rem] dark:text-white lg:hidden">
                {contactContent.title}
            </h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 lg:gap-[4rem] ">
                <div className="flex flex-col gap-4 lg:flex-row justify-between lg:gap-[4rem]">
                    <div
                        className={`rounded-[2rem] shadow-customShadow lg:shadow-none py-[1.1rem] px-4 border lg:w-full  lg:rounded-none lg:py-0 lg:px-0  lg:border-0 lg:border-b 
                            ${isPopup ? "dark:bg-dark-brown " : "bg-white lg:dark:bg-dark-brown"} ${firstNameErr
                                ? " border-errorRed dark:border-errorRed "
                                : "border-white lg:border-black"
                            }`}
                    >
                        <label htmlFor="firstName" className={`hidden lg:block text-[1.6rem] font-medium leading-[2rem] ${firstNameErr ? "text-errorRed" : "text-black dark:text-white"}`}>{contactContent.labels.firstName}</label>
                        <span className=" hidden group-hover:block">{firstNameErr}</span>
                        <input
                            onChange={handleChange}
                            type="text"
                            name="firstName"
                            id="firstName"
                            value={formData.firstName}
                            placeholder={
                                firstNameErr
                                    ? firstNameErr
                                    : contactContent.placeholders.firstName
                            }
                            className={`w-full h-8 focus:outline-none text-black font-medium lg:h-[2rem] lg:text-[1.2rem] lg:my-[0.875rem] lg:dark:text-white ${firstNameErr
                                ? "placeholder:text-errorRed "
                                : "placeholder:text-placeholder lg:placeholder:text-transparent"
                                } ${isPopup ? "dark:bg-dark-brown" : "dark:bg-white lg:dark:bg-dark-brown "}`}
                        />
                    </div>
                    <div
                        className={`rounded-[2rem] shadow-customShadow lg:shadow-none py-[1.1rem] px-4 border lg:w-full lg:rounded-none lg:py-0 lg:px-0 lg:border-0 lg:border-b  
                            ${isPopup ? "dark:bg-dark-brown " : "bg-white lg:dark:bg-dark-brown"} ${lastNameErr
                                ? " border-errorRed dark:border-errorRed "
                                : "border-white lg:border-black"
                            }`}
                    >
                        <label htmlFor="lastName" className={`hidden lg:block text-[1.6rem] font-medium leading-[2rem] ${lastNameErr ? "text-errorRed" : "text-black dark:text-white"}`}>{contactContent.labels.lastName}</label>
                        <input
                            onChange={handleChange}
                            type="text"
                            name="lastName"
                            id="lastName"
                            value={formData.lastName}
                            placeholder={
                                lastNameErr ? lastNameErr : contactContent.placeholders.lastName
                            }
                            className={`w-full h-8 focus:outline-none text-black font-medium lg:h-[2rem] lg:text-[1.2rem] lg:my-[0.875rem] ${lastNameErr
                                ? "placeholder:text-errorRed"
                                : "placeholder:text-placeholder lg:placeholder:text-transparent"
                                } ${isPopup ? "dark:bg-dark-brown" : "dark:bg-white lg:dark:bg-dark-brown"} `}
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-4 lg:flex-row lg:gap-[4rem]">
                    <div
                        className={`rounded-[2rem] shadow-customShadow lg:shadow-none py-[1.1rem] px-4 border lg:w-full lg:rounded-none lg:py-0 lg:px-0 lg:border-0 lg:border-b 
                            ${isPopup ? "dark:bg-dark-brown  " : "bg-white lg:dark:bg-dark-brown"} ${emailErr
                                ? " border-errorRed dark:border-errorRed "
                                : "border-white lg:border-black"
                            }`}
                    >
                        <label htmlFor="email" className={`hidden lg:block text-[1.6rem] font-medium leading-[2rem] ${emailErr ? "text-errorRed" : "text-black dark:text-white"}`}>{contactContent.labels.email}</label>
                        <input
                            onChange={handleChange}
                            type="string"
                            name="email"
                            id="email"
                            value={formData.email}
                            placeholder={
                                emailErr ? emailErr : contactContent.placeholders.email
                            }
                            className={`w-full h-8 focus:outline-none text-black font-medium lg:h-[2rem] lg:text-[1.2rem] lg:my-[0.875rem] lg:dark:text-white ${emailErr
                                ? "placeholder:text-errorRed"
                                : "placeholder:text-placeholder lg:placeholder:text-transparent"
                                } ${isPopup ? "dark:bg-dark-brown" : "dark:bg-white lg:dark:bg-dark-brown"}`}
                        />
                    </div>
                    <div
                        className={`rounded-[2rem] shadow-customShadow lg:shadow-none py-[1.1rem] px-4 border lg:w-full lg:rounded-none lg:py-0 lg:px-0 lg:border-0 lg:border-b  
                            ${isPopup ? "dark:bg-dark-brown" : "bg-white lg:dark:bg-dark-brown"} ${numberErr
                                ? " border-errorRed dark:border-errorRed "
                                : "border-white lg:border-black"
                            }`}>
                        <label htmlFor="phoneNumber " className={`hidden lg:block text-[1.6rem] font-medium leading-[2rem] ${numberErr ? "text-errorRed" : "text-black dark:text-white"}`}>
                            {contactContent.labels.phoneNumber}
                        </label>
                        <input
                            onChange={handleChange}
                            type="string"
                            name="phoneNumber"
                            id="phoneNumber"
                            value={formData.phoneNumber}
                            placeholder={
                                numberErr ? numberErr : contactContent.placeholders.phoneNumber
                            }
                            className={`w-full h-8 focus:outline-none text-black font-medium lg:h-[2rem] lg:text-[1.2rem] lg:my-[0.875rem] ${numberErr
                                ? "placeholder:text-errorRed"
                                : "placeholder:text-placeholder lg:placeholder:text-transparent"
                                } ${isPopup ? "dark:bg-dark-brown" : "dark:bg-white lg:dark:bg-dark-brown"} `}
                        />
                    </div>
                </div>
                <div
                    className={`rounded-[2rem] shadow-customShadow lg:shadow-none py-[1.1rem] px-4 dark:border lg:py-0 lg:px-0 lg:border-[0rem] lg:dark:border-0 lg:border-b lg:dark:border-b lg:border-black
                     lg:dark:border-white lg:rounded-none ${isPopup ? "dark:bg-dark-brown" : "dark:bg-white lg:dark:bg-dark-brown"} `} >
                    <label htmlFor="message" className="hidden lg:block text-[1.6rem] font-medium leading-[2rem] *:text-black dark:text-white">{contactContent.labels.message}</label>
                    <textarea
                        onChange={handleChange}
                        name="message"
                        id="message"
                        value={formData.message}
                        placeholder={contactContent.placeholders.message}
                        className={`${isPopup ? "dark:bg-dark-brown" : "dark:bg-white lg:dark:bg-dark-brown"} w-full h-[5.6rem] focus:outline-none placeholder:text-placeholder text-black font-medium
                        lg:h-[2rem] lg:text-[1.2rem] lg:mt-[0.8rem] lg:placeholder:text-transparent lg:dark:text-white`}
                    />
                </div>
                <button
                    type="submit"
                    className={`mt-4 lg:mt-2 text-[1.2rem] leading-8 font-medium text-white bg-primary dark:text-black dark:bg-secondary w-[19.7rem] h-[4.1rem] rounded-[2rem] mx-auto cursor-pointer border border-[#FFCA40]  uppercase 
                       lg:w-[21.4rem]b lg:h-[5.4rem] lg:text-[1.6rem] lg:font-bold lg:border-none lg:mx-0 lg:ml-auto ${isPopup ? "w-full" : ""}`}
                    onClick={() => {
                        handleError();
                    }}
                >
                    {contactContent.button}
                </button>
            </form>
        </div>
    );
};
