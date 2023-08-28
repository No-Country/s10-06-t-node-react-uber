import Container from "../components/layouts/Container" 
import { BiArrowBack } from "react-icons/bi"
import { TbPointFilled } from "react-icons/tb"
import { GoTriangleDown } from "react-icons/go"

const SetTrip: React.FC = () => {
    return (
        <Container>
            <main className="text-20">
                <h2 className="flex"><BiArrowBack /> Solicitar un viaje</h2>
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