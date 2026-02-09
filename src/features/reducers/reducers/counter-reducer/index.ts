import type { CounterState } from "./type/counter.state";
import type { CounterAction } from "./action/counter.action";
//Creamos nuestro reducer
export const counterReducer = (state:CounterState,action:CounterAction):CounterState=>{

    switch(action.type){
        case "increment":
            return {count: state.count + 1}
        case "decrement":
            return {count: state.count - 1}
        case "reset":
            return {count: 0}
        case "set":
            return {count: action.payload}
        default:
            return state
    }
}
