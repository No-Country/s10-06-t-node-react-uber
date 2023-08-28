import Container from "../components/layouts/Container" 
import { BiArrowBack, BiTime } from "react-icons/bi"
import { TbPointFilled } from "react-icons/tb"
import { GoTriangleDown } from "react-icons/go"

const SetTrip: React.FC = () => {
    return (
        <Container>
            <main className="text-20">
                <h2 className="flex text-24 items-center"><BiArrowBack className="text-primary mr-3" /> Solicitar un viaje</h2>
                <form className="my-7 relative">
                    <div className="flex items-center mb-5">    
                        <TbPointFilled className="text-24 mr-[4px]" />
                        <Input inputType="text" inputPlaceholder="¿De dónde salís?" />
                    </div>
                    <div className="flex items-center">    
                        <GoTriangleDown className="text-24 mr-[4px]" />
                        <Input inputType="text" inputPlaceholder="¿A dónde te llevamos?" />
                    </div>
                </form>
                <div>
                    <h5>Recientes</h5>
                    <RecentTripsItem finishLocation="Av Colón 3240" km={7} />
                    <RecentTripsItem finishLocation="Mariano Moreno 106" km={9} />
                    <RecentTripsItem finishLocation="Arroyo Cabral 8756" km={25} />
                </div>
            </main>
        </Container>
    );

    function RecentTripsItem({ finishLocation, km }: { finishLocation: string, km: number } ) {
        return (
            <div className="rounded-full items-center py-[6px] px-[12px] bg-gray grid grid-cols-[max-content_max-content_1fr] text grid-rows-1 font-light">
                <BiTime className="mr-3" /> 
                { finishLocation } 
                <span className="font-bold justify-self-end">{km} km</span>
            </div>
        );
    }

    function Input({ inputType, inputPlaceholder, className = "" }: { inputType: string, inputPlaceholder: string, className?: string }) {
        const nameClass = `w-full focus:outline-none rounded-full py-[6px] px-[12px] border-solid border-dark border-2 placeholder-dark ${className}`
        return (
            <input className={nameClass} type={inputType} placeholder={inputPlaceholder} /> 
        );
    }
}

export default SetTrip