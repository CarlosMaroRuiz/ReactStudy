export interface AppRoute {
  path: string;
  name: string;      
  keywords: string[]; 
}

export const routesPath: AppRoute[] = [
  { path: "/", name: "Home", keywords: ["inicio", "main", "root"] },
  { path: "/index", name: "Index", keywords: ["lista", "all"] },
  { path: "/notes/redux", name: "Redux Notes", keywords: ["store", "state", "react", "flux"] },
  {path: "/reducer", name: "Reducer practices", keywords: ["reducer", "useReducer", "state management"]},
  {path: "reducer/todo", name: "Todo Reducer", keywords: ["todo", "tasks", "list", "reducer"]},
];