import { useParking } from "../App"
import data from "../assets/locales/translations.json";

export const ContactButton = () => {
    const { toggleShowContactForm, language } = useParking()

    const coverContent = data[language].cover;

    return (
        <div className="sticky bottom-[1.6rem] z-10">
            <button
                className="w-full text-[2rem] font-bold text-black bg-secondary font-feature font-firago uppercase rounded-[1.5rem] py-[1.8rem] 
                leading-[2.4rem] cursor-pointer lg:hidden"
                onClick={() => { toggleShowContactForm() }}
            >
                {coverContent.button}
            </button>
        </div>
    )
}

