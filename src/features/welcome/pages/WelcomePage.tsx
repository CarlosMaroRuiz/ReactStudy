import Button from "@common/components/buttons/Button";
import TextWriter from "../components/TextWriter";
import { useNavigate } from "react-router-dom";
const WelcomePage = () => {
    const navigate = useNavigate();
    return <main className="w-full h-screen center-layout welcome-container">
         <TextWriter text="Bienvenido a mis apuntes de practica realizado" className="text-center"/>
         <Button onClick={() => navigate("/index")}>
            Ver
         </Button>
    </main>;
}
export default WelcomePage;