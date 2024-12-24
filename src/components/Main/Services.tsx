import { ServicesMobile } from "./Services/ServicesMobile"
import { ServicesDesktop } from "./Services/ServicesDesktop"

export const Services = () => {
    return (
        <div className="scroll-mt-[8.1rem] lg:scroll-mt-[13rem] xl:scroll-mt-[17.6rem]"
            id="service">
            <div className="lg:hidden">
                <ServicesMobile />
            </div>
            <div className="hidden lg:block">
                <ServicesDesktop />
            </div>
        </div>
    )
}
