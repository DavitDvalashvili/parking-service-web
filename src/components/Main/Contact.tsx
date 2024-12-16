import data from "../../assets/locales/translations.json";
import { useParking } from "../../App";
import { useState } from "react";

type contact = {
  variant: "popup" | "landing";
};
export const Contact = ({ variant }: contact) => {
  const isPopup = variant === "popup";
  const [firstNameErr, setFirstNameErr] = useState<string | undefined>(
    undefined
  );
  const [lastNameErr, setLastNameErr] = useState<string | undefined>(undefined);
  const [emailErr, setEmailErr] = useState<string | undefined>(undefined);
  const [numberErr, setNumberErr] = useState<string | undefined>(undefined);

  const { language } = useParking();

  const contactContent = data[language].contact;

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
      /^(511|514|551|552|555|557|558|559|568|570|571|574|577|579|591|592|593|595|596|597|598|599)\d{6}$/;
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
    <div
      className="bg-white dark:bg-dark-brown font-firago px-8 pb-[3rem] scroll-mt-[8.1rem]"
      id="contact"
    >
      <h3 className="text-[2rem] text-center font-bold uppercase font-feature leading-[2.4rem] pb-[1.8rem] dark:text-white">
        {contactContent.title}
      </h3>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 ">
        <div className="flex flex-col gap-4">
          <div
            className={`rounded-[2rem] shadow-customShadow py-[1.1rem] px-4 border
              ${isPopup ? "dark:bg-dark-brown " : "bg-white "}
               ${firstNameErr
                ? " border-errorRed dark:border-errorRed "
                : "border-white"
              }
            `}
          >
            {/* <label htmlFor="firstName">{contactContent.labels.firstName}</label> */}
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
              className={`w-full h-8 focus:outline-none text-black font-medium ${firstNameErr
                  ? "placeholder:text-errorRed "
                  : "placeholder:text-placeholder"
                } ${isPopup ? "dark:bg-dark-brown" : "dark:bg-white "}`}
            />
          </div>
          <div
            className={`rounded-[2rem] shadow-customShadow py-[1.1rem] px-4 border
              ${isPopup ? "dark:bg-dark-brown " : "bg-white "}
               ${firstNameErr
                ? " border-errorRed dark:border-errorRed "
                : "border-white"
              }
            `}
          >
            {/* <label htmlFor="lastName">{contactContent.labels.lastName}</label> */}
            <input
              onChange={handleChange}
              type="text"
              name="lastName"
              id="lastName"
              value={formData.lastName}
              placeholder={
                lastNameErr ? lastNameErr : contactContent.placeholders.lastName
              }
              className={`w-full h-8 focus:outline-none text-black font-medium ${lastNameErr
                  ? "placeholder:text-errorRed"
                  : "placeholder:text-placeholder"
                } ${isPopup ? "dark:bg-dark-brown" : "dark:bg-white "}
              `}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div
            className={`rounded-[2rem] shadow-customShadow py-[1.1rem] px-4 border
              ${isPopup ? "dark:bg-dark-brown  " : "bg-white "}
               ${firstNameErr
                ? " border-errorRed dark:border-errorRed "
                : "border-white"
              }
            `}
          >
            {/* <label htmlFor="email">{contactContent.labels.email}</label> */}
            <input
              onChange={handleChange}
              type="string"
              name="email"
              id="email"
              value={formData.email}
              placeholder={
                emailErr ? emailErr : contactContent.placeholders.email
              }
              className={`w-full h-8 focus:outline-none text-black font-medium ${emailErr
                  ? "placeholder:text-errorRed"
                  : "placeholder:text-placeholder"
                } ${isPopup ? "dark:bg-dark-brown" : "dark:bg-white "}
              `}
            />
          </div>
          <div
            className={`rounded-[2rem] shadow-customShadow py-[1.1rem] px-4 border
              ${isPopup ? "dark:bg-dark-brown" : "bg-white "}
               ${firstNameErr
                ? " border-errorRed dark:border-errorRed "
                : "border-white"
              }
            `}
          >
            {/* <label htmlFor="phoneNumber">
              {contactContent.labels.phoneNumber}
            </label> */}
            <input
              onChange={handleChange}
              type="string"
              name="phoneNumber"
              id="phoneNumber"
              value={formData.phoneNumber}
              placeholder={
                numberErr ? numberErr : contactContent.placeholders.phoneNumber
              }
              className={`w-full h-8 focus:outline-none text-black font-medium ${numberErr
                  ? "placeholder:text-errorRed"
                  : "placeholder:text-placeholder"
                } ${isPopup ? "dark:bg-dark-brown" : "dark:bg-white "}
              `}
            />
          </div>
        </div>
        <div
          className={`rounded-[2rem] shadow-customShadow py-[1.1rem] px-4 dark:border
            ${isPopup ? "dark:bg-dark-brown" : "dark:bg-white"}
          `}
        >
          {/* <label htmlFor="message">{contactContent.labels.message}</label> */}
          <textarea
            onChange={handleChange}
            name="message"
            id="message"
            value={formData.message}
            placeholder={contactContent.placeholders.message}
            className={`${isPopup ? "dark:bg-dark-brown" : "dark:bg-white "}
              w-full h-[5.6rem] focus:outline-none placeholder:text-placeholder text-black font-medium`}
          />
        </div>
        <button
          type="submit"
          className={`mt-4  text-[1.2rem] leading-8 font-medium text-white bg-primary dark:text-black
             dark:bg-secondary w-[19.7rem] h-[4.1rem] rounded-[2rem] mx-auto cursor-pointer border border-[#FFCA40] 
             uppercase ${isPopup ? "w-full" : ""}`}
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
