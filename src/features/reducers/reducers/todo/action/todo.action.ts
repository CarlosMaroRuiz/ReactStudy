import type { ActionsFromMap } from "@/features/reducers/utils/mapper/actionFromMap";

// Definir el ActionMap específico para el reducer de Todo
export type TodoActionMap = {
    add_todo: { text: string };
    toggle_todo: { id: number };
    remove_todo: { id: number };
    clear_todos: undefined; 
}
// Generar el tipo de acciones a partir del ActionMap que se usará en el reducer
export type TodoActions = ActionsFromMap<TodoActionMap>;