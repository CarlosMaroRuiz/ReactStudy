import type { RouteObject } from 'react-router-dom';
import { ReduxNote } from './pages';

export const NOTES_ROUTES: RouteObject[] = [
  {
    path: "notes",
    children: [
      {
        path: "redux",
        element: <ReduxNote /> 
      }
    ]
  
  }
];