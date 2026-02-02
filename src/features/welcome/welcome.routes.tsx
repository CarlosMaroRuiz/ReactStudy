import type { RouteObject } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';

export const WELCOME_ROUTES: RouteObject[] = [
  {
    path: "/",
    element: <WelcomePage /> 
  }
];