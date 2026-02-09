import Card from "@/common/components/cards/Card";
import useCounter from "../hooks/useCounter";
import Button from "@/common/components/buttons/Button";
import Input from "@/common/components/input/Input";
const Counter = () => {

     const {state, increment, decrement, reset, set} = useCounter();
    return <Card className="">
        <h2 className="">Valor del contador: {state.count}</h2>
        
        <section className="container-row">
            <Button onClick={increment} variant="primary" className="w-36 text-sm">Incrementar</Button>
            <Button onClick={decrement} variant="secondary" className="w-36 text-sm">Decrementar</Button>
            <Button onClick={reset} variant="danger" className="w-36 text-sm">Resetear</Button>
        </section>
        <section>
            <p>Modificar manualmente</p>
             <Input 
      type="number"
      placeholder="Escribe tu nombre..."
      value={state.count}
      onChange={(e) => set(Number(e.target.value))}
    />
        </section>
    </Card>
}
export default Counter;