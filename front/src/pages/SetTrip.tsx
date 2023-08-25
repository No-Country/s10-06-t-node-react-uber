import { BiArrowBack } from "react-icons/bi"

const SetTrip = () => {
    return (
        <main>
            <h2 className="text-18 flex"><BiArrowBack /> Solicitar un viaje</h2>
            <form>
                <ul>
                    <li><input type="text" placeholder="¿De dónde salís?" /></li>
                    <li><input type="text" placeholder="¿A dónde te llevamos?" /></li>
                </ul>
            </form>
            <div>
                <h5>Recientes</h5>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </main>
    );
}

export default SetTrip