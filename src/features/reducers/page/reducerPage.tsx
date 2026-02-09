import { LayoutPage } from "@layouts/layoutPages/LayoutPage";
import Counter from "../components/Counter";
const ReducerPage = () => {
  return (
    <LayoutPage
      header={

          <h1>Practicas de reducer</h1>  
      }
      

      content={
        <div>
          <Counter />     
        </div>
      }
    />
  );
};

export default ReducerPage;