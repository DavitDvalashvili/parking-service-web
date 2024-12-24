import { ContactButton } from "../components/ContactButton";
import { useParking } from "../App";
import { ContactPopup } from "../components/Main/Contact/ContactPopup";


export const Device = () => {
  const { showContactForm } = useParking();

  return <div className="max-w-[76.8rem] mx-auto lg:max-w-[192rem]">
    <div className="h-[200rem]"></div>
    {showContactForm &&
      <ContactPopup />
    }
    <ContactButton />
  </div>;
};
