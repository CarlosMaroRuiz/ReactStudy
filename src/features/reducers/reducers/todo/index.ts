import type { TodoState } from "./state/todo.state";
import type { TodoActions } from "./action/todo.action";
export const initialTodoState: TodoState = {
    todos: []
}

export const todoReducer = (state:TodoState,actions:TodoActions):TodoState=>{
    switch(actions.type){
        case "add_todo":
            return {
                todos:[
                    ...state.todos,
                    {
                        id: Date.now(),
                        text: actions.payload.text,
                        completed: false
                    }
                ]
            }
        case "toggle_todo":// funcion cambiar el estado de completado de un todo específico
            return {
                todos: state.todos.map(todo => {
                    if (todo.id === actions.payload.id) {
                        return {
                            ...todo,
                            completed: !todo.completed
                        }
                    }
                    return todo
                })
            }
        case "remove_todo":
            return {
                todos: state.todos.filter(todo => todo.id !== actions.payload.id)
            }
        case "clear_todos":
            return {
                todos: []
            }
        default:
            return state
    }
}