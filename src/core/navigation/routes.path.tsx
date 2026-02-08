export interface AppRoute {
  path: string;
  name: string;      
  keywords: string[]; 
}

export const routesPath: AppRoute[] = [
  { path: "/", name: "Home", keywords: ["inicio", "main", "root"] },
  { path: "/index", name: "Index", keywords: ["lista", "all"] },
  { path: "/notes/redux", name: "Redux Notes", keywords: ["store", "state", "react", "flux"] },
];