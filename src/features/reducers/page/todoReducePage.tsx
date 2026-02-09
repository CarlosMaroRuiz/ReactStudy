import { LayoutPage } from "@layouts/layoutPages/LayoutPage";

const TodoReducePage = () => {
  return (
    <LayoutPage header = {<h1>Todo Reducer Page</h1>} 
    content={
        <div>
            <p>Esta es la pagina de todo reducer</p>
        </div>
    }
    />
  );
}
export default TodoReducePage;