import Container from "../components/layouts/Container" 
import { BiArrowBack } from "react-icons/bi"

const SetTrip: () => React.ReactNode = () => {
    return (
        <Container>
            <main className="text-20">
                <h2 className="flex"><BiArrowBack /> Solicitar un viaje</h2>
                <form className="my-7">
                    <div>    
                        <span></span><Input className="mb-5" inputType="text" inputPlaceholder="¿De dónde salís?" />
                    </div>
                    <div>    
                        <span></span><Input inputType="text" inputPlaceholder="¿A dónde te llevamos?" />
                    </div>
                </form>
                <div>
                    <h5>Recientes</h5>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </main>
        </Container>
    );

    function Input({ inputType, inputPlaceholder, className = "" }: { inputType: string, inputPlaceholder: string, className?: string }) {
        const nameClass = `w-full focus:outline-none rounded-full p-[6px] border-solid border-dark border-2 placeholder-dark ${className}`
        return (
            <input className={nameClass} type={inputType} placeholder={inputPlaceholder} /> 
        );
    }
}

export default SetTrip