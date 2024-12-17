import { ServicesMobile } from "../Services/ServicesMobile"
import { ServicesDesktop } from "../Services/ServicesDesktop"

export const Services = () => {
    return (
        <>
            <div className="lg:hidden">
                <ServicesMobile />
            </div>
            <div className="hidden lg:block">
                <ServicesDesktop />
            </div>
        </>
    )
}
