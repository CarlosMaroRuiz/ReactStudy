import { useReducer } from "react";
import { counterReducer } from "../reducers/counter-reducer";

const initialState = {count: 0}
const useCounter = () =>{
    const [state, dispatch] = useReducer(counterReducer, initialState)
    const increment = () => dispatch({type: "increment"})
    const decrement = () => dispatch({type: "decrement"})
    const reset = () => dispatch({type: "reset"})
    const set = (value:number) => dispatch({type: "set", payload: value})
    return {state, increment, decrement, reset, set}

}
export default useCounter;