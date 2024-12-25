import { ContactBox } from "./ContactBox"
import { ContactForm } from "./ContactForm"
import { RxCross1 } from "react-icons/rx";
import { useParking } from "../../../App";

export const ContactPopup = () => {
    const { toggleShowContactForm } = useParking()
    return (
        <div className="fixed top-[8rem] left-0 w-screen h-screen  bg-white dark:bg-dark-brown overflow-hidden z-40 flex flex-col justify-start lg:bg-popupBackground lg:dark:bg-popupBackground  lg:top-0
        lg:pt-[20rem]">
            <div className="w-full max-w-[76.8rem] mx-auto lg:max-w-[121.3rem] lg:bg-white lg:dark:bg-dark-brown lg:rounded-[2rem] lg:p-[3rem] lg:pb-0 ">
                <div>
                    <div className="flex justify-end px-8 pt-4 py-8 lg:px-0 lg:py-0">
                        <div
                            onClick={() => { toggleShowContactForm() }}
                            className="w-16 h-16 border border-[#e6e6e6] lg:border-[#606060] lg:border-[0.2rem] dark:border-white rounded-[1.6rem] lg:rounded-full flex justify-center items-center cursor-pointer lg:w-[2.4rem] lg:h-[2.4rem]"
                        >
                            <RxCross1 className="text-[1.4rem] stroke-[1] dark:text-white lg:text-[1.2rem] lg:text-[#606060] lg:stroke-[2]" />
                        </div>
                    </div>
                    <div className="lg:flex lg:justify-center lg:gap-[4.9rem] lg:mt-[3rem]">
                        <div className="hidden lg:block">
                            <ContactBox variant="popup" />
                        </div>
                        <ContactForm variant="popup" />
                    </div>
                </div>
                <div className="lg:w-[20.6rem] lg:ml-auto mr-[7rem] w-full h-[13.6rem] bg-letter-light dark:bg-letter-dark bg-contain bg-no-repeat bg-left lg:mb-[-2rem] ">
                </div>
            </div>
        </div>
    )
}
