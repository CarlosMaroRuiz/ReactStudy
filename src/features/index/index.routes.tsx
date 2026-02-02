import type { RouteObject } from 'react-router-dom';
import IndexPage from './page/Index';

const INDEX_ROUTES: RouteObject[] = [
    {
        path: "/index",
        element: <IndexPage />
    }

]
export default INDEX_ROUTES;