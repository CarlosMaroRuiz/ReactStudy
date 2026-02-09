import type { RouteObject } from 'react-router-dom';
import { ReducerPage,TodoReducePage } from './page';

export const REDUCER_ROUTES: RouteObject[] = [
     {
        path: "reducer",
        children:[
            {
                index: true,
                element: <ReducerPage />
            },
            {
                path: "todo",
                element: <TodoReducePage />
            }
        ]
     }
]