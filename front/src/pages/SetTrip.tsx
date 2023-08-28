import Container from "../components/layouts/Container" 
import { BiArrowBack, BiTime } from "react-icons/bi"
import { TbPointFilled } from "react-icons/tb"
import { GoTriangleDown } from "react-icons/go"
import { HiLocationMarker } from "react-icons/hi"
import type React from "react"
import { create } from "zustand"

type typeSetTripState = {
    locationAutocomplete: boolean;
    activeLocationAutocomplete: () => void;
}

const useSetTripStore = create<typeSetTripState>()((set) => ({
    locationAutocomplete: false,
    activeLocationAutocomplete: () => {
        set(() => ({locationAutocomplete: true}))
    }
}));

const SetTrip: React.FC = () => {
    const { locationAutocomplete, activeLocationAutocomplete } = useSetTripStore(state => state);

    return (
        <Container>
            <main className="text-20">
                <h2 className="flex text-24 items-center"><BiArrowBack className="text-primary mr-3" /> Solicitar un viaje</h2>
                <form className="my-7 relative">
                    <div className="flex items-center mb-5">    
                        <TbPointFilled className="text-24 mr-[4px] text-primary" />
                        <Input inputType="text" inputPlaceholder="¿De dónde salís?" />
                    </div>
                    <div className="flex items-center">    
                        <GoTriangleDown className="text-24 mr-[4px] text-darkGray" />
                        <Input inputType="text" inputPlaceholder="¿A dónde te llevamos?" />
                    </div>
                </form>
                <section>
                    {
                        locationAutocomplete ? 
                        <>
                            <h5>Resultados</h5>
                            <LocationAutocompleteItems locationName="Banco Galicia" location="Av Rafael Nuñez 3254, Córdoba" km={3} />
                            <LocationAutocompleteItems locationName="Banco Galicia" location="Av Rafael Nuñez 3254, Córdoba" km={3} />
                            <LocationAutocompleteItems locationName="Banco Galicia" location="Av Rafael Nuñez 3254, Córdoba" km={3} />
                        </>
                        : 
                        <>
                            <h5>Recientes</h5>
                            <RecentTripsItem finishLocation="Av Colón 3240" km={5} />
                            <RecentTripsItem finishLocation="Av Colón 3240" km={5} />
                            <RecentTripsItem finishLocation="Av Colón 3240" km={5} />
                        </>
                    }
                </section>
            </main>
        </Container>
    );

    function handlerSetLocationInput() {
        console.log(locationAutocomplete)
        activeLocationAutocomplete();
    }
    
    function LocationAutocompleteItems({ locationName, location, km } : { locationName: string, location: string, km: number }) {
        return(
            <ItemsContainer>
                <HiLocationMarker className="mr-3 text-24 text-primary" />
                <p className="text-ellipsis overflow-hidden font-light">
                    <span className="font-bold block">{locationName}</span>
                    <span className="whitespace-nowrap">{location}</span>
                </p>
                <span className="font-bold justify-self-end">{km} km</span>
            </ItemsContainer>
        );   
    }
    // Esté componente, se utiliza para estilizar el contenedor de los items. 
    function ItemsContainer({ children }: { children: React.ReactNode }) {
        return (
            <div className="rounded-full items-center py-[6px] px-[12px] bg-[#f8f8f8] grid grid-flow-col grid-rows-[min-content] grid-cols-[max-content_minmax(min-content,_max-content)_minmax(min-content)] font-light shadow-setTripItems mt-3">
                {children}
            </div>
        );
    }

    function RecentTripsItem({ finishLocation, km }: { finishLocation: string, km: number } ) {
        return (
            <ItemsContainer>
                <BiTime className="mr-3 text-24" /> 
                { finishLocation } 
                <span className="font-bold justify-self-end">{km} km</span>
            </ItemsContainer>
        );
    }

    function Input({ inputType, inputPlaceholder, className = "" }: { inputType: string, inputPlaceholder: string, className?: string }) {
        return (
            <input onChange={() => {handlerSetLocationInput()}} className={`w-full focus:outline-none rounded-full py-[6px] px-[12px] border-solid border-dark border-2 placeholder-dark shadow-setTripItems ${className}`} type={inputType} placeholder={inputPlaceholder} /> 
        );
    }
}

export default SetTrip