import Instructions from "../components/Instructions";
import pinguino from "@assets/img/pinguino.gif"
const IndexPage = () => {
    return <main className="w-full h-140 center-layout">
          <img src={pinguino} alt="Pinguino" className="w-72 h-72"/>

          <Instructions />
    </main>
}
export default IndexPage;