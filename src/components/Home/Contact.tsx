import data from "../../assets/locales/translations.json";
import { useLanguage } from "../../App";
import { useState } from "react";

export const Contact = () => {
  const { language } = useLanguage();

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
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="bg-red-700">
      <h3>{contactContent.title}</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label htmlFor="firstName">{contactContent.labels.firstName}</label>
            <input
              onChange={handleChange}
              type="text"
              name="firstName"
              id="firstName"
              value={formData.firstName}
              placeholder={contactContent.placeholders.firstName}
            />
          </div>
          <div>
            <label htmlFor="lastName">{contactContent.labels.lastName}</label>
            <input
              onChange={handleChange}
              type="text"
              name="lastName"
              id="lastName"
              value={formData.lastName}
              placeholder={contactContent.placeholders.lastName}
            />
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="email">{contactContent.labels.email}</label>
            <input
              onChange={handleChange}
              type="email"
              name="email"
              id="email"
              value={formData.email}
              placeholder={contactContent.placeholders.email}
            />
          </div>
          <div>
            <label htmlFor="phoneNumber">
              {contactContent.labels.phoneNumber}
            </label>
            <input
              onChange={handleChange}
              type="number"
              name="phoneNumber"
              id="phoneNumber"
              value={formData.phoneNumber}
              placeholder={contactContent.placeholders.phoneNumber}
            />
          </div>
        </div>
        <div>
          <label htmlFor="message">{contactContent.labels.message}</label>
          <input
            onChange={handleChange}
            type="text"
            name="message"
            id="message"
            value={formData.phoneNumber}
            placeholder={contactContent.placeholders.message}
          />
        </div>
        <button type="submit">{contactContent.button}</button>
      </form>
    </div>
  );
};
