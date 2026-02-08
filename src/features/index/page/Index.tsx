import Instructions from "../components/Instructions";
import pinguino from "@assets/img/pinguino.gif"
const IndexPage = () => {
    return <main className="w-full h-screen center-layout">
          <img src={pinguino} alt="Pinguino" className="w-64 h-64"/>

          <Instructions />
    </main>
}
export default IndexPage;